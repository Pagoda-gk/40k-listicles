import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import factions from "./data/factions";
import RuleModal from "./RuleModal";
import "./App.css";
import { buildReferenceRegistry } from "./data/referenceRegistry";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import ReactMarkdown from "react-markdown";
import React from "react";
import { renderWithReferences } from "./utils/referenceRenderer.jsx";


function UpgradeOptions({ unit, upgrades, onToggle, registry, openRuleModal }) {
    return (
        <div className="upgrade-group">
            {upgrades.map((up) => {
                const current = unit.chosenUpgrades.find(sel => sel.name === up.name);
                const value = current ? current.count : 0;
                const selected = Boolean(value);

                // Format the label with rule references
                const label = renderWithReferences(
                    up.name,
                    registry,
                    openRuleModal
                );

                return (
                    <div key={up.name} style={{ marginLeft: "1rem" }}>
                        {/* ----- single / perModel ----- */}
                        {(up.type === "single" || up.type === "perModel") && (
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selected}
                                    onChange={() =>
                                        onToggle(unit.id, { ...up, count: selected ? 0 : 1 })
                                    }
                                />
                                {label} (+{up.points} pts
                                {up.type === "perModel" ? " per model" : ""})
                            </label>
                        )}

                        {/* ----- limited (number input) ----- */}
                        {up.type === "limited" && (
                            <label>
                                {label} (+{up.points} pts each)
                                <input
                                    type="number"
                                    min={0}
                                    max={up.maxPer}
                                    value={value}
                                    onChange={(e) =>
                                        onToggle(unit.id, {
                                            ...up,
                                            count: Number(e.target.value),
                                        })
                                    }
                                    style={{ width: "3rem", marginLeft: "0.5rem" }}
                                />
                            </label>
                        )}

                        {/* ----- nested children ----- */}
                        {selected && up.children && (
                            <UpgradeOptions
                                unit={unit}
                                upgrades={up.children}
                                onToggle={onToggle}
                                registry={registry}
                                openRuleModal={openRuleModal}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}



export default function ArmyBuilder({ saved }) {

    const { factionId, listIndex } = useParams();

    let faction;
    let initialArmy = [];

    if (saved) {
        const savedLists = JSON.parse(localStorage.getItem("savedLists") || "[]");
        const list = savedLists[listIndex];
        if (!list) return <p>Saved list not found!</p>;
        initialArmy = list.army;
        faction = {
            name: list.name,
            system: list.system,
            units: [],
            rules: [],
            wargear: [],
        };
    } else {
        faction = factions[factionId];
    }

    if (!faction) return <p>Faction not found!</p>;


    const { units, rules, wargear } = faction;
    const [army, setArmy] = useState(initialArmy);
    const [modalRule, setModalRule] = useState(null);
    const [showSaveDialog, setShowSaveDialog] = useState(false);
    const [saveName, setSaveName] = useState("");

    const registry = buildReferenceRegistry(faction);
    const categories = ["HQ", "Elites", "Troops", "Fast Attack", "Heavy Support"];

    const limits = {
        HQ: 2,
        Troops: 6,
        Elites: 3,
        "Fast Attack": 3,
        "Heavy Support": 3,
    };

    const categoryCounts = categories.reduce((acc, cat) => {
        acc[cat] = army.filter(u => u.category === cat).length;
        return acc;
    }, {});

    const openRuleModal = (rule) => setModalRule(rule);
    const closeRuleModal = () => setModalRule(null);



    const addUnit = (unit) => {
        const entry = {
            ...unit,
            id: Date.now(),
            count: unit.minModels,
            chosenUpgrades: [],
        };
        setArmy([...army, entry]);
    };

    const removeUnit = (unitId) => {
        setArmy((prev) => prev.filter((u) => u.id !== unitId));
    };

    const resetUnit = (unitId) => {
        setArmy((prev) =>
            prev.map((u) => {
                if (u.id !== unitId) return u;
                const resetUnit = { ...u, count: u.minModels, chosenUpgrades: [] };
                return { ...resetUnit };
            })
        );
    };



    const toggleUpgrade = (unitId, upgrade) => {
        setArmy(prev =>
            prev.map(u => {
                if (u.id !== unitId) return u;

                const newUpgrades = u.chosenUpgrades
                    .filter(x => x.name !== upgrade.name)
                    .concat(upgrade.count > 0 ? [{ ...upgrade }] : []);

                return {
                    ...u,
                    chosenUpgrades: newUpgrades,

                };
            })
        );
    };


    const updateCount = (unitId, value) => {
        setArmy((prev) =>
            prev.map((u) => {
                if (u.id !== unitId) return u;

                const newCount = Math.max(u.minModels, Math.min(value, u.maxModels));
                const updatedUnit = {
                    ...u,
                    count: newCount,
                    chosenUpgrades: u.chosenUpgrades.map((up) =>
                        up.type === "perModel" ? { ...up, count: 1 } : up
                    ),
                };

                return { ...updatedUnit };
            })
        );
    };



    const totalPoints = army.reduce((sum, u) => {
        const base = u.basePoints * u.count;
        const upgrades = u.chosenUpgrades.reduce((s, up) => {
            if (up.type === "perModel") return s + up.points * u.count;
            return s + up.points * (up.count || 1);
        }, 0);
        return sum + base + upgrades;
    }, 0);


    const [panelIndex, setPanelIndex] = useState(0); // 0 = left, 1 = middle, 2 = right
    const wrapperRef = useRef(null);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => setPanelIndex((i) => Math.min(i + 1, 2)),
        onSwipedRight: () => setPanelIndex((i) => Math.max(i - 1, 0)),
        preventScrollOnSwipe: true,        // stops the browser from hijacking the swipe
        trackMouse: true                   // allows click-and-drag on desktop for testing
    });

    const goToPanel = (index) => {
        setPanelIndex(index);
        if (wrapperRef.current) {
            wrapperRef.current.scrollTo({
                left: index * window.innerWidth,
                behavior: "smooth",
            });
        }
    };



    const [selectedConditional, setSelectedConditional] = useState(null);

    const activeModifier = selectedConditional
        ? conditionals[selectedConditional]
        : null;

    const displayedUnits = activeModifier
        ? units.map((u) => activeModifier.modifyUnitType(u))
        : units;





    return (
        <div {...swipeHandlers} style={{
            height: "100vh",
            overflow: "hidden",
            position: "relative"
        }}>



            {/* Home button */}
            <Link
                to="/"
                style={{
                    position: "fixed",
                    top: "1rem",
                    left: "1rem",
                    padding: "0.4rem 0.6rem",
                    background: "#0ff",
                    color: "#111",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    textDecoration: "none",
                    zIndex: 1000, // ensures it stays above everything
                    boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
                    fontSize: "0.9rem",
                }}
            >
                Home
            </Link>


            <button
                onClick={() => setShowSaveDialog(true)}
                style={{
                    position: "fixed",
                    top: "1rem",
                    left: "5rem",
                    padding: "0.4rem 0.6rem",
                    background: "#0ff",
                    color: "#111",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    zIndex: 1000,
                    boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                }}
            >
                Save
            </button>

            <Link to="/" style={{ position: "fixed", top: "1rem", left: "1rem", padding: "0.4rem 0.6rem", background: "#0ff", color: "#111", fontWeight: "bold", borderRadius: "5px", textDecoration: "none", zIndex: 1000, boxShadow: "0 2px 5px rgba(0,0,0,0.3)", fontSize: "0.9rem" }}>Home</Link>
            <button onClick={() => setShowSaveDialog(true)} style={{ position: "fixed", top: "1rem", left: "5rem", padding: "0.4rem 0.6rem", background: "#0ff", color: "#111", fontWeight: "bold", borderRadius: "5px", zIndex: 1000, boxShadow: "0 2px 5px rgba(0,0,0,0.3)", fontSize: "0.9rem", cursor: "pointer" }}>Save</button>

            {/* Panel Container */}
            <div ref={wrapperRef} style={{ display: "flex", width: "300vw", transform: `translateX(-${panelIndex * 100}vw)`, transition: "transform 0.3s ease", height: "100%" }}>



                {/* Left Panel */}
                <div className="panel" style={{ flex: "0 0 100vw", overflowY: "auto" }}>
                    <h2>Units</h2>
                    {categories.map((cat) => (
                        <div key={cat}>
                            <h3>{cat}</h3>
                            <div className="unit-list">
                                {units
                                    .filter((u) => u.category === cat)
                                    .map((u) => {
                                        const full = categoryCounts[cat] >= limits[cat];
                                        return (
                                            <button
                                                key={u.name}
                                                onClick={() => addUnit(u)}
                                                className="unit-button"
                                                style={{
                                                    opacity: full ? 0.4 : 1,
                                                    pointerEvents: full ? "none" : "auto",
                                                    cursor: full ? "not-allowed" : "pointer",
                                                }}
                                            >
                                                {u.name} <span className="unit-points">({u.basePoints} pts)</span>
                                            </button>
                                        );
                                    })}
                            </div>
                        </div>
                    ))}
                </div>


                {/* Middle Panel */}
                <div className="panel" style={{ flex: "0 0 100vw", overflowY: "auto" }}>
                    <h2>Army List</h2>
                    {categories.map((cat) => {
                        const unitsInCat = army.filter((u) =>
                            u.category === cat);
                        if (!unitsInCat.length) return null;

                        return (
                            <div key={cat} className="category-section">
                                <h3>{cat}</h3>
                                {unitsInCat.map((u) => {
                                    const unitPoints =
                                        u.basePoints * u.count +
                                        u.chosenUpgrades.reduce((s, up) => {
                                            if (up.type === "perModel") return s + u.count * up.points;
                                            return s + up.points * (up.count || 1);
                                        }, 0);


                                    return (
                                        <div key={u.id} className="unit-card">
                                            <h4 style={{ cursor: "pointer" }}>
                                                {u.count}× {u.name} ({unitPoints} pts)
                                            </h4>


                                            {/* Statline */}
                                            {u.statline && Array.isArray(u.statline) && (
                                                <table
                                                    style={{
                                                        width: "100%",
                                                        borderCollapse: "collapse",
                                                        marginTop: "0.25rem",
                                                        fontSize: "0.8rem",
                                                        textAlign: "center",
                                                        lineHeight: "1.2",
                                                    }}
                                                >
                                                    <thead>
                                                        <tr style={{ background: "#133", color: "#0ff" }}>
                                                            <th style={{ padding: "2px 4px", textAlign: "left" }}>Unit</th>
                                                            {["WS", "BS", "S", "T", "W", "I", "A", "Ld", "Sv"].map((stat) => (
                                                                <th key={stat} style={{ padding: "2px 4px" }}>{stat}</th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {u.statline.map((profile, i) => (
                                                            <tr
                                                                key={i}
                                                                style={{
                                                                    background: i % 2 === 0 ? "#111" : "#1a1a1a",
                                                                    color: "#ddd",
                                                                }}
                                                            >
                                                                <td style={{ padding: "2px 4px", textAlign: "left", color: "#0ff", fontWeight: "500", }}>
                                                                    {profile.name}
                                                                </td>
                                                                {["WS", "BS", "S", "T", "W", "I", "A", "Ld", "Sv"].map((stat) => (
                                                                    <td key={stat} style={{ padding: "2px 4px" }}>
                                                                        {profile[stat]}
                                                                    </td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            )}


                                            {/* Model Count */}
                                            <input
                                                type="number"
                                                min={u.minModels}
                                                max={u.maxModels}
                                                value={u.count}
                                                onChange={(e) =>
                                                    updateCount(u.id, Number(e.target.value))
                                                }
                                            />

                                            {/* Rules */}
                                            {u.rules?.length > 0 && (
                                                <>
                                                    <h4>Rules:</h4>

                                                    {renderWithReferences(u.rules.join(", "), registry, openRuleModal)}
                                                </>
                                            )}

                                            {/* Wargear */}
                                            {(u.wargear?.length || u.chosenUpgrades?.some(up => up.wargear)) > 0 && (
                                                <>
                                                    <h4>Wargear:</h4>
                                                    <div>
                                                        {renderWithReferences(
                                                            Array.from(
                                                                new Set([
                                                                    ...(u.wargear || []),
                                                                    ...(u.chosenUpgrades?.flatMap(up => up.wargear || []) || []),
                                                                ])
                                                            ).join(", "),
                                                            registry,
                                                            openRuleModal)}
                                                    </div>
                                                </>
                                            )}


                                            {/* Upgrades */}
                                            <h4>Options:</h4>
                                            <h4>Options:</h4>
                                            <UpgradeOptions
                                                unit={u}
                                                upgrades={u.upgrades || []}
                                                onToggle={toggleUpgrade}
                                                registry={registry}
                                                openRuleModal={openRuleModal}
                                            />


                                            {/* Action Buttons */}
                                            <div className="unit-actions">
                                                <button onClick={() => resetUnit(u.id)}>Reset</button>
                                                <button onClick={() => removeUnit(u.id)}>Remove</button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}

                    <h3>Total: {totalPoints} pts</h3>
                </div>

                {/* Right Panel */}
                <div className="panel" style={{ flex: "0 0 100vw", overflowY: "auto" }}>
                    <h2>Army Reference</h2>

                    {categories.map((cat) => {
                        const catUnits = army.filter((u) =>
                            u.category === cat);
                        if (!catUnits.length) return null;
                        return (
                            <div key={cat} style={{
                                marginBottom:
                                    "1rem"
                            }}>
                                <h3>{cat}</h3>
                                {catUnits.map((u) => {

                                    // Base wargear as before
                                    const baseGear = u.wargear || [];

                                    // Add upgrades’ wargear, but for limited ones include “ xN” if N>1
                                    const upgradeGear = (u.chosenUpgrades || []).flatMap(up => {
                                        const names = up.wargear || [];
                                        // if it's a limited upgrade with count > 1, append " xN"
                                        return names.map(name =>
                                            up.type === "limited" && up.count > 1
                                                ? `${name} x${up.count}`
                                                : name
                                        );
                                    });

                                    // Remove duplicates while preserving our xN text
                                    const finalWargear = Array.from(new Set([...baseGear, ...upgradeGear]));


                                    return (

                                        <div key={u.id} className="unit-card">
                                            <h4>{u.count}× {u.name}</h4>


                                            {/* Statline */}
                                            {u.statline && Array.isArray(u.statline) && (
                                                <table
                                                    style={{
                                                        width: "100%",
                                                        borderCollapse: "collapse",
                                                        marginTop: "0.25rem",
                                                        fontSize: "0.8rem",
                                                        textAlign: "center",
                                                        lineHeight: "1.2",
                                                    }}
                                                >
                                                    <thead>
                                                        <tr style={{ background: "#133", color: "#0ff" }}>
                                                            <th style={{ padding: "2px 4px", textAlign: "left" }}>Unit</th>
                                                            {["WS", "BS", "S", "T", "W", "I", "A", "Ld", "Sv"].map((stat) => (
                                                                <th key={stat} style={{ padding: "2px 4px" }}>{stat}</th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {u.statline.map((profile, i) => (
                                                            <tr
                                                                key={i}
                                                                style={{
                                                                    background: i % 2 === 0 ? "#111" : "#1a1a1a",
                                                                    color: "#ddd",
                                                                }}
                                                            >
                                                                <td style={{ padding: "2px 4px", textAlign: "left", color: "#0ff", fontWeight: "500" }}>
                                                                    {profile.name}
                                                                </td>
                                                                {["WS", "BS", "S", "T", "W", "I", "A", "Ld", "Sv"].map((stat) => (
                                                                    <td key={stat} style={{ padding: "2px 4px" }}>
                                                                        {profile[stat]}
                                                                    </td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            )}

                                            {/* Rules */}
                                            {u.rules?.length > 0 && (
                                                <>
                                                    <h4>Rules:</h4>
                                                    <div style={{
                                                        display:
                                                            "inline"
                                                    }}>
                                                        {renderWithReferences(u.rules.join(", "), registry,
                                                            openRuleModal)}
                                                    </div>
                                                </>
                                            )}

                                            {finalWargear.length > 0 && (
                                                <>
                                                    <h4>Wargear:</h4>
                                                    <div style={{ display: "inline" }}>
                                                        {renderWithReferences(finalWargear.join(", "), registry, openRuleModal)}
                                                    </div>
                                                </>
                                            )}


                                        </div>
                                    )

                                })}
                            </div>
                        );
                    })}
                </div>
            </div>


            {/* Panel Navigation (Desktop only) */}
            <button className="panel-nav-button" style={{ position: "absolute", top: "50%", left: "0.5rem", transform: "translateY(-50%)", zIndex: 1000 }} onClick={() => goToPanel(panelIndex - 1)}>◀</button>
            <button className="panel-nav-button" style={{ position: "absolute", top: "50%", right: "0.5rem", transform: "translateY(-50%)", zIndex: 1000 }} onClick={() => goToPanel(panelIndex + 1)}>▶</button>






            {/* Save Dialog */}
            {
                showSaveDialog && (
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "rgba(0,0,0,0.5)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 2000,
                        }}
                    >
                        <div style={{ background: "#222", padding: "1rem 2rem", borderRadius: "8px" }}>
                            <h3>Save Army List</h3>
                            <input
                                type="text"
                                placeholder="List Name"
                                value={saveName}
                                onChange={(e) => setSaveName(e.target.value)}
                                style={{ padding: "0.25rem 0.5rem", width: "100%", marginBottom: "1rem" }}
                            />
                            <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}>
                                <button onClick={() => setShowSaveDialog(false)}>Cancel</button>
                                <button
                                    onClick={() => {
                                        if (!saveName) return;
                                        // Load existing saved lists from localStorage
                                        const savedLists = JSON.parse(localStorage.getItem("savedLists") || "[]");
                                        savedLists.push({
                                            name: saveName,
                                            system: faction.system || faction.name,
                                            army,
                                        });
                                        localStorage.setItem("savedLists", JSON.stringify(savedLists));
                                        setShowSaveDialog(false);
                                        setSaveName("");
                                        alert("Army saved!");
                                    }}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* Rule Modal */}
            <RuleModal
                rule={modalRule}
                onClose={closeRuleModal}
                onSelectRule={openRuleModal}
                registry={registry}
            />
        </div >
    );

}
