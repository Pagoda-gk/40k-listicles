import { useParams } from "react-router-dom";
import factions from "./data/factions";
import RuleModal from "./RuleModal";
import { buildReferenceRegistry } from "./data/referenceRegistry";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import ReactMarkdown from "react-markdown";
import React from "react";
import { renderWithReferences } from "./utils/referenceRenderer.jsx";
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { useState, useEffect, useRef } from "react";


function Stepper({ value, min = 0, max = Infinity, onChange }) {
    const dec = () => onChange(Math.max(min, value - 1));
    const inc = () => onChange(Math.min(max, value + 1));

    return (
        <div className="stepper">
            <button type="button" onClick={dec} disabled={value <= min}>
                -
            </button>
            <span className="stepper-value">{value}</span>
            <button type="button" onClick={inc} disabled={value >= max}>
                +
            </button>
        </div>
    );
}

function getUpgradeCost(upgrade, selectedVariantName) {
    let cost = 0;
    if (upgrade.pointsByVariant && selectedVariantName) {
        cost = upgrade.pointsByVariant[selectedVariantName] ?? 0;
    } else if (typeof upgrade.points === "number") {
        cost = upgrade.points;
    }
    return Number(cost); // ensures NaN never happens
}



function UpgradeOptions({ unit, upgrades, onToggle, registry, openRuleModal }) {

    // helper: total count selected in a group
    const totalSelectedInGroup = (group) =>
        group.options.reduce((sum, opt) => {
            const sel = unit.chosenUpgrades.find(u => u.name === opt.name);
            return sum + (sel ? sel.count : 0);
        }, 0);

    return (
        <div className="upgrade-group">
            {upgrades.map((up) => {
                const current = unit.chosenUpgrades.find(sel => sel.name === up.name);
                const value = current ? current.count : 0;
                const selected = Boolean(value);

                // Format label with rule references
                const label = renderWithReferences(up.name, registry, openRuleModal);

                // --- SINGLE or PER MODEL ---
                if (up.type === "single" || up.type === "perModel") {
                    return (
                        <div key={up.name} className="upgrade-item">
                            <span className="upgrade-label">
                                {label} (+{getUpgradeCost(up, unit.selectedVariants?.profile)} pts{up.type === "perModel" ? " per model" : ""})
                            </span>

                            <input
                                type="checkbox"
                                checked={selected}
                                disabled={up.forced}
                                onChange={() =>
                                    onToggle(unit.id, { ...up, count: selected ? 0 : 1 })
                                }
                                className="upgrade-input-checkbox"
                            />

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
                }

                // --- LIMITED ---
                if (up.type === "limited") {
                    return (
                        <div key={up.name} className="upgrade-item">
                            <span className="upgrade-label">
                                {label} (+{up.points} pts each)
                            </span>
                            <Stepper
                                value={value}
                                min={0}
                                max={up.maxPer}
                                onChange={(newVal) => onToggle(unit.id, { ...up, count: newVal })}
                                className="upgrade-stepper"
                            />
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
                }

                // --- GROUPED ---
                if (up.type === "grouped") {
                    const totalSelected = totalSelectedInGroup(up);

                    return (
                        <div key={up.name} className="upgrade-group">
                            <strong>Up to {up.maxPer} models may take:</strong>
                            {up.options.map(opt => {
                                const optCurrent = unit.chosenUpgrades.find(sel => sel.name === opt.name);
                                const optValue = optCurrent ? optCurrent.count : 0;
                                const maxAllowed = up.maxPer - (totalSelected - optValue);

                                return (
                                    <div key={opt.name} className="upgrade-item">
                                        <span className="upgrade-label">
                                            {opt.name} (+{opt.points} pts)
                                        </span>
                                        <Stepper
                                            value={optValue}
                                            min={0}
                                            max={maxAllowed}
                                            onChange={(newVal) => onToggle(unit.id, { ...opt, count: newVal })}
                                        />
                                    </div>
                                );
                            })}

                            {/* optional: nested children per option */}
                            {up.options.map(opt => {
                                const sel = unit.chosenUpgrades.find(s => s.name === opt.name);
                                return sel?.count > 0 && opt.children ? (
                                    <UpgradeOptions
                                        key={opt.name + "-children"}
                                        unit={unit}
                                        upgrades={opt.children}
                                        onToggle={onToggle}
                                        registry={registry}
                                        openRuleModal={openRuleModal}
                                    />
                                ) : null;
                            })}
                        </div>
                    );
                }

                return null; // fallback
            })}
        </div>
    );
}

function getMinimumUnitCost(unit) {
    const base = unit.basePoints * unit.minModels;
    const forced = (unit.upgrades || [])
        .filter(up => up.forced)
        .reduce((sum, up) => {
            if (up.type === "perModel") {
                // forced per model → pay for each model
                return sum + up.points * unit.minModels;
            }
            return sum + up.points;  // single/limited forced assumed count 1
        }, 0);
    return base + forced;
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


    useEffect(() => {
        if (!factionId) return;

        // Remove previous theme
        const oldTheme = document.getElementById("faction-theme");
        if (oldTheme) oldTheme.remove();

        // Load new theme
        const link = document.createElement("link");
        link.id = "faction-theme";
        link.rel = "stylesheet";
        link.href = `/data/${factionId}/theme.css`;  // assumes it's in public/data/factionId/theme.css
        document.head.appendChild(link);

        return () => link.remove();
    }, [factionId]);


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
        acc[cat] = army.filter(
            u => u.category === cat && !u.ignoreSlot   // ✅ skip if ignoreSlot is true
        ).length;
        return acc;
    }, {});

    const openRuleModal = (rule) => setModalRule(rule);
    const closeRuleModal = () => setModalRule(null);



    const addUnit = (unit) => {
        const forced = (unit.upgrades || [])
            .filter(up => up.forced)
            .map(up => ({ ...up, count: 1 }));
        const entry = {
            ...unit,
            id: Date.now(),
            count: unit.minModels,
            chosenUpgrades: forced,
            selectedVariants: {
                profile: unit.variants?.profile?.options[0].name ?? null,
                armour: unit.variants?.armour?.options[0].name ?? null
            }
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

        const selectedVariantName = u.selectedVariants?.profile;
        const variantExtraPoints =
            u.variants?.profile?.options.find(p => p.name === selectedVariantName)?.extraPoints || 0;

        const upgrades = (u.chosenUpgrades || []).reduce((s, up) => {
            const cost = getUpgradeCost(up, selectedVariantName);
            if (up.type === "perModel") return s + cost * u.count;
            return s + cost * (up.count || 1);
        }, 0);

        return sum + base + variantExtraPoints + upgrades;
    }, 0);


    const [selectedConditional, setSelectedConditional] = useState(null);



    const activeModifier = selectedConditional
        ? conditionals[selectedConditional]
        : null;

    const displayedUnits = activeModifier
        ? units.map((u) => activeModifier.modifyUnitType(u))
        : units;

    // --- hooks and refs ---
    const leftRef = useRef(null);
    const middleRef = useRef(null);
    const rightRef = useRef(null);
    const containerRef = useRef(null);

    const panelOrder = ["units", "list", "reference"];
    const refs = [leftRef, middleRef, rightRef];

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            const i = panelOrder.indexOf(activePanel);
            if (i < panelOrder.length - 1) {
                const nextPanel = panelOrder[i + 1];
                setActivePanel(nextPanel);
                scrollToPanel(refs[i + 1]);
            }
        },
        onSwipedRight: () => {
            const i = panelOrder.indexOf(activePanel);
            if (i > 0) {
                const prevPanel = panelOrder[i - 1];
                setActivePanel(prevPanel);
                scrollToPanel(refs[i - 1]);
            }
        },
        delta: 90,
        preventScrollOnSwipe: true,
    });









    const [activePanel, setActivePanel] = useState("units");

    const scrollToPanel = (ref) => {
        if (ref.current) {
            const container = containerRef.current;
            container.scrollTo({
                left: ref.current.offsetLeft,
                behavior: "smooth",
            });
        }
    };




    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let timeout;
        const onScroll = () => {
            const scrollLeft = container.scrollLeft;
            const width = container.clientWidth;
            const index = Math.round(scrollLeft / width);
            setActivePanel(panelOrder[index]);
        };

        container.addEventListener("scroll", onScroll);
        return () => container.removeEventListener("scroll", onScroll);
    }, []);

    // --- helpers for middle panel ---
    // Returns a merged statline array based on selected variant & armour
    function getMergedStatlines(u) {
        const profileOpt = u.variants?.profile?.options?.find(
            o => o.name === u.selectedVariants?.profile
        );
        const armourOpt = u.variants?.armour?.options?.find(
            o => o.name === u.selectedVariants?.armour
        );

        const wargear = [
            ...(u.wargear || []),
            ...(armourOpt?.wargear || [])
        ];
        const rules = [
            ...(u.rules || []),
            ...(armourOpt?.rules || [])
        ];

        const variantPoints =
            (activeProfile?.extraPoints || 0) + (armourOpt?.extraPoints || 0);
        const unitPoints = u.basePoints * u.count + variantPoints


        // if a profile is chosen, start from that; otherwise use the base statline array
        let rows = profileOpt
            ? [{ name: profileOpt.name, ...profileOpt.statline }]
            : u.statline;

        // apply armour overrides (e.g. T +1 for Bike, Sv 2+ for Terminator)
        if (armourOpt?.statline) {
            rows = rows.map(r => ({ ...r, ...armourOpt.statline }));
        }

        return rows;
    }



    return (
        <div className="army-builder" {...handlers}>
            <nav className="top-nav">
                <div className="panel-labels">
                    {panelOrder.map((panel) => (
                        <span key={panel} className={`panel-label ${activePanel === panel ? "active" : ""}`}>
                            {panel === "units" ? "Units" :
                                panel === "list" ? "Army List" :
                                    panel === "reference" ? "Army Reference" : panel}
                        </span>
                    ))}
                    <div
                        className="panel-indicator"
                        style={{ transform: `translateX(${panelOrder.indexOf(activePanel) * 33.33}%)` }}
                    />
                </div>
            </nav>

            {/* Floating Army Total */}
            <div className="floating-total">
                Total: {totalPoints} pts
            </div>

            {/* Home and save button */}
            <Link to="/" className="fixed-button home">Home</Link>
            <button onClick={() => setShowSaveDialog(true)} className="fixed-button save">Save</button>

            <div ref={containerRef} className="panels-wrapper">

                {/* Left Panel */}
                <div ref={leftRef} className="panel panel-left">

                    <h2>Codex</h2>
                    {categories.map((cat) => (
                        <div key={cat}>
                            <h3>{cat}</h3>
                            <div className="unit-list">
                                {units
                                    .filter((u) => u.category === cat)
                                    .map((u) => {
                                        // ✅ If this unit is marked ignoreSlot, never treat the category as full for it
                                        const full =
                                            !u.ignoreSlot &&                // <--- add this
                                            categoryCounts[cat] >= limits[cat];

                                        const unitCount = army.filter(a => a.name === u.name).length;
                                        const minCost = getMinimumUnitCost(u);

                                        return (
                                            <button
                                                key={u.name}
                                                onClick={() => addUnit(u)}
                                                className="unit-button"
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    opacity: full ? 0.4 : 1,
                                                    pointerEvents: full ? "none" : "auto",
                                                    cursor: full ? "not-allowed" : "pointer",
                                                    padding: "0.25rem 0.5rem"
                                                }}
                                            >
                                                <span>
                                                    {u.name} <span className="unit-points">({minCost} pts)</span>
                                                </span>
                                                {unitCount > 0 && <span className="unit-count">{unitCount}</span>}
                                            </button>
                                        );
                                    })}
                            </div>
                        </div>
                    ))}
                </div>




                {/* Middle Panel */}
                <div ref={middleRef} className="panel panel-middle">

                    <h2>Army List</h2>
                    {categories.map((cat) => {
                        const unitsInCat = army.filter((u) =>
                            u.category === cat);
                        if (!unitsInCat.length) return null;

                        return (
                            <div key={cat} className="category-section">
                                <h3>{cat}</h3>
                                {unitsInCat.map((u) => {

                                    // --- Variant-dependent unit points ---
                                    const selectedVariantName = u.selectedVariants?.profile;

                                    // Base points
                                    const basePoints = u.basePoints * u.count;

                                    // Extra points from selected variant itself
                                    const variantExtraPoints =
                                        u.variants?.profile?.options.find(p => p.name === selectedVariantName)?.extraPoints || 0;

                                    // Points from chosen upgrades
                                    const upgradePoints = (u.chosenUpgrades || []).reduce((sum, up) => {
                                        const cost = getUpgradeCost(up, selectedVariantName);
                                        if (up.type === "perModel") return sum + cost * u.count;
                                        return sum + cost * (up.count || 1);
                                    }, 0);

                                    const unitPoints = basePoints + variantExtraPoints + upgradePoints;


                                    const activeProfile = u.variants?.profile?.options.find(
                                        o => o.name === u.selectedVariants?.profile
                                    );
                                    const statlines = activeProfile
                                        ? [{ name: activeProfile.name, ...activeProfile.statline }]
                                        : u.statline;

                                    // pick the profile variant first
                                    const baseProfile =
                                        u.variants?.profile?.options.find(
                                            o => o.name === u.selectedVariants?.profile
                                        );

                                    // then the armour choice
                                    const armourOpt =
                                        u.variants?.armour?.options.find(
                                            o => o.name === u.selectedVariants?.armour
                                        );

                                    // Start mergedStats with profile statline
                                    let mergedStats = [
                                        {
                                            name: baseProfile?.name || u.name,
                                            ...baseProfile?.statline,
                                        },
                                    ];

                                    u.chosenUpgrades.forEach(up => {
                                        if (up.statlineModifiers) {
                                            mergedStats = mergedStats.map(stat => ({
                                                ...stat,
                                                ...up.statlineModifiers
                                            }));
                                        }
                                    });

                                    // Compute merged wargear from base unit + chosen upgrades
                                    const mergedWargear = [
                                        ...(u.wargear || []),
                                        ...u.chosenUpgrades.flatMap(up => up.wargear || [])
                                    ];


                                    return (
                                        <div key={u.id} className="unit-card">
                                            <h4 style={{ cursor: "pointer" }}>
                                                {u.name} ({unitPoints} pts)
                                            </h4>

                                            {u.variants && (
                                                <div className="variant-selectors" style={{ display: "flex", gap: "1rem" }}>
                                                    {Object.entries(u.variants).map(([key, cfg]) => (
                                                        <div key={key} style={{ flex: 1 }}>
                                                            <label>{cfg.label}: </label>
                                                            <select
                                                                value={u.selectedVariants?.[key] || ""}
                                                                onChange={(e) =>
                                                                    setArmy(prev =>
                                                                        prev.map(unit =>
                                                                            unit.id === u.id
                                                                                ? {
                                                                                    ...unit, selectedVariants: {
                                                                                        ...unit.selectedVariants,
                                                                                        [key]: e.target.value
                                                                                    }
                                                                                }
                                                                                : unit
                                                                        )
                                                                    )
                                                                }
                                                            >
                                                                {cfg.options.map(opt => (
                                                                    <option key={opt.name} value={opt.name}>{opt.name}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}


                                            {/* Model Count */}
                                            <h5 className="models-heading">models</h5>
                                            <Stepper
                                                value={u.count}
                                                min={u.minModels}
                                                max={u.maxModels}
                                                onChange={(val) => updateCount(u.id, val)}
                                            />


                                            {/* Statline */}
                                            {(Array.isArray(u.statline) || u.variants?.profile?.options) && (
                                                <table className="unit-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>WS</th>
                                                            <th>BS</th>
                                                            <th>S</th>
                                                            <th>T</th>
                                                            <th>W</th>
                                                            <th>I</th>
                                                            <th>A</th>
                                                            <th>Ld</th>
                                                            <th>Sv</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {[
                                                            // base profiles (if any)
                                                            ...(Array.isArray(u.statline) ? u.statline : []),

                                                            // every profile variant from the “Role” dropdown
                                                            ...(u.variants?.profile?.options?.map(opt => ({
                                                                name: opt.name,
                                                                ...opt.statline
                                                            })) || [])
                                                        ].map((profile, i) => (
                                                            <tr key={i}>
                                                                <td className="unit-name">{profile.name}</td>
                                                                {["WS", "BS", "S", "T", "W", "I", "A", "Ld", "Sv"].map(stat => (
                                                                    <td key={stat}>{profile[stat]}</td>

                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            )
                                            }


                                            {/* Rules */}
                                            {
                                                u.rules?.length > 0 && (
                                                    <>
                                                        <h4>Rules:</h4>
                                                        <div className="army-panel">
                                                            {renderWithReferences(u.rules.join(", "), registry, openRuleModal)}
                                                        </div>
                                                    </>
                                                )
                                            }

                                            {/* Wargear */}
                                            {
                                                (u.wargear?.length || u.chosenUpgrades?.some(up => up.wargear)) > 0 && (
                                                    <>
                                                        <h4>Wargear:</h4>
                                                        <div>
                                                            <div className="army-panel">
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
                                                        </div>
                                                    </>
                                                )
                                            }


                                            {/* Upgrades */}
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
                <div ref={rightRef} className="panel panel-right">
                    <h2>Army Reference</h2>

                    {/* --- Faction-wide rules --- */}
                    {rules && rules.length > 0 && (
                        <div className="faction-rules">
                            <h3>Faction Rules</h3>
                            <div className="army-panel">
                                {renderWithReferences(
                                    // Look up the “Faction Rules” object if present,
                                    // else join all rule names you’d like to display.
                                    (() => {
                                        const factionRule = rules.find(r => r.name.toLowerCase() === "faction rules");
                                        return factionRule
                                            ? factionRule.description
                                            : rules.map(r => `[${r.name}]`).join(", ");
                                    })(),
                                    registry,
                                    openRuleModal
                                )}
                            </div>
                        </div>
                    )}


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

                                    // --- Compute final wargear with additions/removals ---
                                    let finalWargear = [...(u.wargear || [])];

                                    (u.chosenUpgrades || []).forEach(up => {
                                        // Remove any gear replaced by the upgrade
                                        if (up.removes) {
                                            finalWargear = finalWargear.filter(g => !up.removes.includes(g));
                                        }

                                        // Add gear from the upgrade
                                        if (up.wargear) {
                                            const newGear = up.wargear.map(name =>
                                                up.type === "limited" && up.count > 1
                                                    ? `${name} x${up.count}`
                                                    : name
                                            );
                                            finalWargear.push(...newGear);
                                        }
                                    });


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

                                    // Determine the statline to display for this unit
                                    let displayedStatlines = [];

                                    if (u.variants?.profile) {
                                        // Find the selected variant
                                        const selectedProfileName = u.selectedVariants?.profile;
                                        const profileOption = u.variants.profile.options.find(p => p.name === selectedProfileName);

                                        if (profileOption) {
                                            displayedStatlines.push({
                                                name: profileOption.name,
                                                ...profileOption.statline
                                            });
                                        }
                                    } else if (u.statline) {
                                        // Fallback to the original statline array
                                        displayedStatlines = u.statline;
                                    }



                                    // Remove duplicates but preserve " xN" counts
                                    finalWargear = Array.from(new Set(finalWargear));

                                    // Filter displayed statlines based on whether the unit has taken the upgrade that grants them
                                    const filteredStatlines = displayedStatlines.filter(profile => {
                                        // If there’s a chosen upgrade with count > 0 that grants this profile, keep it
                                        const hasUpgrade = u.chosenUpgrades?.some(up => up.count > 0 && up.grantsProfile === profile.name);

                                        // Also keep it if it’s the base profile (not variant-dependent)
                                        const isBaseProfile = !u.variants?.profile?.options?.some(opt => opt.name === profile.name);

                                        return hasUpgrade || isBaseProfile;
                                    });



                                    return (

                                        <div key={u.id} className="unit-card">
                                            <h4>{u.count}× {u.name}</h4>


                                            {/* Statline */}
                                            {displayedStatlines.length > 0 && (
                                                <table className="unit-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>WS</th>
                                                            <th>BS</th>
                                                            <th>S</th>
                                                            <th>T</th>
                                                            <th>W</th>
                                                            <th>I</th>
                                                            <th>A</th>
                                                            <th>Ld</th>
                                                            <th>Sv</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {displayedStatlines
                                                            // filter out profiles requiring an upgrade that hasn't been taken
                                                            .filter(profile => {
                                                                // Does any upgrade match this profile name?
                                                                const needsUpgrade = (u.upgrades || []).some(
                                                                    up => up.name.replace(/\[|\]/g, "") === profile.name
                                                                );
                                                                if (!needsUpgrade) return true; // base profile → always show
                                                                return u.chosenUpgrades.some(
                                                                    cu => cu.name.replace(/\[|\]/g, "") === profile.name && cu.count > 0
                                                                );

                                                            })
                                                            .map((profile, i) => {
                                                                let modifiedProfile = { ...profile };
                                                                // apply statlineModifiers from chosen upgrades
                                                                (u.chosenUpgrades || []).forEach(up => {
                                                                    if (up.statlineModifiers) {
                                                                        modifiedProfile = { ...modifiedProfile, ...up.statlineModifiers };
                                                                    }
                                                                });

                                                                return (
                                                                    <tr key={i}>
                                                                        <td className="unit-name">{modifiedProfile.name}</td>
                                                                        {["WS", "BS", "S", "T", "W", "I", "A", "Ld", "Sv"].map(stat => (
                                                                            <td key={stat}>{modifiedProfile[stat]}</td>
                                                                        ))}
                                                                    </tr>
                                                                );
                                                            })}
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
                                                        <div className="army-panel">
                                                            {renderWithReferences(u.rules.join(", "), registry,
                                                                openRuleModal)}
                                                        </div>
                                                    </div>
                                                </>
                                            )}

                                            {finalWargear.length > 0 && (
                                                <>
                                                    <h4>Wargear:</h4>
                                                    <div style={{ display: "inline" }}>
                                                        <div className="army-panel">
                                                            {renderWithReferences(finalWargear.join(", "), registry, openRuleModal)}
                                                        </div>
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




                {/* Save Dialog */}
                {
                    showSaveDialog && (
                        <div className="modal-backdrop">
                            <div className="modal-content">
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
        </div>

    );

}
