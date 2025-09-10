import { useState, useEffect } from "react";
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


export default function ArmyBuilder({ saved }) {

    function computeAvailableUpgrades(unit) {
        let available = [...unit.upgrades];

        // Apply conditional effects from chosen upgrades
        unit.chosenUpgrades.forEach(sel => {
            if (unit.conditionalEffects) {
                unit.conditionalEffects.forEach(effect => {
                    if (effect.triggerUpgrade === sel.name) {
                        // Unlock additional upgrades
                        if (effect.effects.unlockUpgrades) {
                            available = [...available, ...effect.effects.unlockUpgrades];
                        }
                    }
                });
            }
        });

        return available;
    }

    function computeAvailableWargear(unit) {
        let wargear = [...unit.wargear];

        unit.chosenUpgrades.forEach(sel => {
            if (unit.conditionalEffects) {
                unit.conditionalEffects.forEach(effect => {
                    if (effect.triggerUpgrade === sel.name && effect.effects.unlockWargear) {
                        wargear = [...wargear, ...effect.effects.unlockWargear];
                    }
                });
            }
        });

        return wargear;
    }

    function applyArmyConditionals(units, chosenUnits, conditionals = []) {
        let modifiedUnits = units.map(u => ({ ...u }));

        conditionals.forEach(rule => {
            const triggerActive = chosenUnits.some(cu => cu.name === rule.triggerUnit);
            if (triggerActive) {
                rule.effects.forEach(effect => {
                    modifiedUnits = modifiedUnits.map(u => {
                        if (u.name === effect.target) {
                            return { ...u, ...effect.changes };
                        }
                        return u;
                    });
                });
            }
        });

        return modifiedUnits;
    }

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

    const [army, setArmy] = useState([]);
    const [selectedConfig, setSelectedConfig] = useState(null);
    const [selectedRules, setSelectedRules] = useState(null);
    const [modalRule, setModalRule] = useState(null);
    const [showSaveDialog, setShowSaveDialog] = useState(false);
    const [saveName, setSaveName] = useState("");

    const registry = buildReferenceRegistry(faction);
    const categories = ["HQ", "Elites", "Troops", "Fast Attack", "Heavy Support"];

    const getRule = (name) => rules.find((r) => r.name === name);
    const getWargear = (name) => wargear.find((w) => w.name === name);

    const openRuleModal = (rule) => setModalRule(rule);
    const closeRuleModal = () => setModalRule(null);

    const effectiveUnits = applyArmyConditionals(
        Object.values(registry).filter(item => item._type === "unit"),
        army,
        Object.values(registry).filter(item => item._type === "conditional"),
    );



    // Recalculate wargear counts for a unit
    const recalcWargearCounts = (unit) => {
        const counts = {};
        unit.wargear?.forEach((w) => (counts[w] = 1));
        unit.chosenUpgrades?.forEach((up) => {
            if (!up.wargear) return;
            up.wargear.forEach((w) => {
                const qty = up.type === "perModel" ? unit.count : up.count || 1;
                counts[w] = (counts[w] || 0) + qty;
            });
        });
        return counts;
    };



    const addUnit = (unit) => {
        const entry = {
            ...unit,
            id: Date.now(),
            count: unit.minModels,
            chosenUpgrades: [],
            wargearCounts:
                unit.wargear?.reduce((acc, w) => {
                    acc[w] = 1;
                    return acc;
                }, {}) || {},
        };
        setArmy([...army, entry]);
        setSelectedConfig(entry);
    };


    const removeUnit = (unitId) => {
        setArmy((prev) => prev.filter((u) => u.id !== unitId));
    };

    const resetUnit = (unitId) => {
        setArmy((prev) =>
            prev.map((u) => {
                if (u.id !== unitId) return u;
                const resetUnit = { ...u, count: u.minModels, chosenUpgrades: [] };
                return { ...resetUnit, wargearCounts: recalcWargearCounts(resetUnit) };
            })
        );
    };



    const toggleUpgrade = (unitId, upgrade) => {
        setArmy(prev =>
            prev.map(u => {
                if (u.id !== unitId) return u;

                let newUpgrades = [...u.chosenUpgrades];
                const existing = newUpgrades.find(x => x.name === upgrade.name);

                if (upgrade.count === 0) {
                    newUpgrades = newUpgrades.filter(x => x.name !== upgrade.name);
                } else if (existing) {
                    newUpgrades = newUpgrades.map(x => x.name === upgrade.name ? upgrade : x);
                } else {
                    newUpgrades.push(upgrade);
                }

                const updatedUnit = { ...u, chosenUpgrades: newUpgrades };
                // ALWAYS recalc wargear counts after any upgrade change
                updatedUnit.wargearCounts = recalcWargearCounts(updatedUnit);

                return updatedUnit;
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

                return { ...updatedUnit, wargearCounts: recalcWargearCounts(updatedUnit) };
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




    function ArmyBuilderSwipeWrapper({ children }) {
        const [currentPanel, setCurrentPanel] = useState(0);
        const totalPanels = React.Children.count(children);

        const handlers = useSwipeable({
            onSwipedLeft: () => setCurrentPanel((prev) => Math.min(prev + 1, totalPanels - 1)),
            onSwipedRight: () => setCurrentPanel((prev) => Math.max(prev - 1, 0)),
            trackMouse: true,
        });

        return (
            <div
                {...handlers}
                style={{ overflow: "hidden", width: "100%", height: "100vh" }}
            >
                <div
                    style={{
                        display: "flex",
                        width: `${totalPanels * 100}%`,
                        transform: `translateX(-${(100 / totalPanels) * currentPanel}%)`,
                        transition: "transform 0.3s ease",
                        height: "100%",
                    }}
                >
                    {React.Children.map(children, (child) => (
                        <div style={{ flex: "0 0 100%", overflowY: "auto", height: "100%" }}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    const conditionals = Object.values(registry).filter(item => item._type === "conditional");

    // Derived army with conditionals applied
    const effectiveArmy = applyArmyConditionals(army, army, conditionals);


    return (
        <div
            style={{
                padding: "1rem",
                height: "100vh", // ensures swipe wrapper fills the viewport
                boxSizing: "border-box",
            }}
        >

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


            <div
                style={{
                    display: "flex",
                    flexDirection: "row", // horizontal layout
                    gap: "1rem",          // optional spacing between panels
                    height: "100%",        // fill parent height
                    overflowX: "auto",    // scroll if panels overflow
                    boxSizing: "border-box",
                }}
            >

                {/* Left Panel */}
                <div className="panel">
                    <h2>Units</h2>
                    {categories.map((cat) => (
                        <div key={cat}>
                            <h3>{cat}</h3>
                            <div className="unit-list">
                                {units
                                    .filter((u) => u.category === cat)
                                    .map((u) => (
                                        <button
                                            key={u.name}
                                            onClick={() => addUnit(u)}
                                            className="unit-button"
                                        >
                                            {u.name}{" "}
                                            <span className="unit-points">({u.basePoints} pts)</span>
                                        </button>
                                    ))}
                            </div>
                        </div>
                    ))}

                </div>


                {/* Middle Panel */}
                <div className="panel">
                    <h2>Army List</h2>
                    {categories.map((cat) => {
                        const unitsInCat = effectiveArmy.filter(u => u.category === cat);
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
                                                    <div style={{ display: "inline" }}>
                                                        {renderWithReferences(u.rules.join(", "), registry, openRuleModal)}
                                                    </div>
                                                </>
                                            )}
                                            {/* Wargear */}
                                            {u.wargear?.length > 0 && (
                                                <>
                                                    <h4>Wargear:</h4>
                                                    <div style={{ display: "inline" }}>
                                                        {renderWithReferences(
                                                            Object.entries(u.wargearCounts)
                                                                .map(([gearName, count]) =>
                                                                    count > 1 ? `${gearName} x${count}` : gearName
                                                                )
                                                                .join(", "),
                                                            registry,
                                                            openRuleModal
                                                        )}
                                                    </div>
                                                </>
                                            )}



                                            {/* Upgrades */}
                                            <h4>Options:</h4>
                                            <div className="upgrade-list">
                                                {computeAvailableUpgrades(effectiveArmy.find(eu => eu.id === u.id) || u).map((up) => {
                                                    const current = u.chosenUpgrades.find(sel => sel.name === up.name);
                                                    const value = current ? current.count : 0;

                                                    return (
                                                        <div key={up.name} className="upgrade-option">
                                                            {up.type === "single" && (
                                                                <>
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={!!value}
                                                                        onChange={() => toggleUpgrade(u.id, { ...up, count: value ? 0 : 1 })}
                                                                    />
                                                                    {renderWithReferences(up.name, registry, openRuleModal)} (+{up.points} pts)
                                                                </>
                                                            )}

                                                            {up.type === "limited" && (
                                                                <>
                                                                    {renderWithReferences(up.name, registry, openRuleModal)} (+{up.points} pts each)
                                                                    <input
                                                                        type="number"
                                                                        min={0}
                                                                        max={up.maxPer}
                                                                        value={value}
                                                                        onChange={(e) => toggleUpgrade(u.id, { ...up, count: Number(e.target.value) })}
                                                                    />
                                                                </>
                                                            )}

                                                            {up.type === "perModel" && (
                                                                <>
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={!!value}
                                                                        onChange={() => toggleUpgrade(u.id, { ...up, count: value ? 0 : 1 })}
                                                                    />
                                                                    {renderWithReferences(up.name, registry, openRuleModal)} (+{up.points} pts per model)
                                                                </>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="unit-actions">
                                                <button
                                                    className="unit-button"
                                                    onClick={() => resetUnit(u.id)}
                                                >
                                                    Reset
                                                </button>
                                                <button
                                                    className="unit-button"
                                                    onClick={() => removeUnit(u.id)}
                                                >
                                                    Remove
                                                </button>
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
                <div className="panel">
                    <h2>Army Reference</h2>
                    {categories.map((cat) => {
                        const catUnits = effectiveArmy.filter((u) => u.category === cat); if (!catUnits.length) return null;

                        return (
                            <div key={cat} style={{ marginBottom: "1rem" }}>
                                <h3>{cat}</h3>
                                {catUnits.map((u) => {
                                    // Split base vs upgrade wargear for clarity
                                    const baseGear = u.wargear || [];
                                    const upgradeGear = Object.entries(u.wargearCounts)
                                        .filter(([name]) => !baseGear.includes(name));

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
                                                            <th style={{ padding: "2 px 4px", textAlign: "left" }}>Unit</th>
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
                                                                <td style={{ padding: "2px 4px", textAlign: "left", color: "#0ff" }}>
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
                                                    <div style={{ display: "inline" }}>
                                                        {renderWithReferences(u.rules.join(", "), registry, openRuleModal)}
                                                    </div>
                                                </>
                                            )}

                                            {/* Base Wargear */}
                                            {baseGear.length > 0 && (
                                                <>
                                                    <h4>Wargear:</h4>
                                                    <div style={{ display: "inline" }}>
                                                        {renderWithReferences(
                                                            baseGear.map((name) => {
                                                                const count = u.wargearCounts[name] || 1;
                                                                return count > 1 ? `${name} x${count}` : name;
                                                            }).join(", "),
                                                            registry,
                                                            openRuleModal
                                                        )}
                                                    </div>
                                                </>
                                            )}

                                            {/* Upgrade Wargear */}
                                            {upgradeGear.length > 0 && (
                                                <>
                                                    <h4>Upgrade Wargear:</h4>
                                                    <div style={{ display: "inline" }}>
                                                        {renderWithReferences(
                                                            upgradeGear.map(([name, count]) =>
                                                                count > 1 ? `[${name}] x${count}` : `[${name}]`
                                                            ).join(", "),
                                                            registry,
                                                            openRuleModal
                                                        )}
                                                    </div>
                                                </>
                                            )}


                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>

            </div>


            {/* Save Dialog */}
            {showSaveDialog && (
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
            )}

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
