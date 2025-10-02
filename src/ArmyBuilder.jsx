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
import { buildArmyState } from "./utils/armyState";
import RightPanel from "./RightPanel";



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

    // helper: check if a model exists in the unit
    const modelExists = (modelName) =>
        unit.unitComp?.flatMap(pool => pool.entries)
            .some(e => e.name === modelName && ((e.count ?? e.min ?? 0) > 0));

    return (
        <div className="upgrade-group">
            {upgrades.map((up) => {
                const current = unit.chosenUpgrades.find(sel => sel.name === up.name);
                const value = current ? current.count : 0;
                const selected = Boolean(value);

                // Disable upgrade if it requires a model that isn't in the unit
                const disabledByUser = up.user ? !modelExists(up.user) : false;

                // Format label with rule references
                const label = renderWithReferences(up.name, registry, openRuleModal);

                // --- Single / perModel / limited / grouped logic ---
                switch (up.type) {

                    case "single":
                    case "perModel": {
                        const prefix = up.upgradeText
                            ? renderWithReferences(up.upgradeText, registry, openRuleModal)
                            : "May take";

                        return (
                            <div key={up.name} className="upgrade-row">
                                <span className="upgrade-label">
                                    {prefix} {label} (+{getUpgradeCost(up, unit.selectedVariants?.profile)} pts)
                                </span>
                                <div className="upgrade-control">
                                    <input
                                        type="checkbox"
                                        checked={selected}
                                        disabled={up.forced || disabledByUser}
                                        onChange={() =>
                                            onToggle(unit.id, { ...up, count: selected ? 0 : 1 })
                                        }
                                        className="upgrade-input-checkbox"
                                    />
                                </div>
                            </div>
                        );
                    }

                    case "limited": {
                        const modelCount = getUnitModelCount(unit);
                        const maxAllowed = up.maxPer ?? modelCount;
                        const prefix = up.upgradeText
                            ? renderWithReferences(up.upgradeText, registry, openRuleModal)
                            : (up.maxPer ? `May take up to ${maxAllowed} of:` : "Any model in the unit may take");

                        return (
                            <div key={up.name} className="upgrade-row">
                                <span className="upgrade-label">
                                    {prefix} {label} (+{up.points} pts each)
                                </span>
                                <div className="upgrade-control">
                                    <Stepper
                                        value={value}
                                        min={0}
                                        max={maxAllowed}
                                        onChange={newVal => onToggle(unit.id, { ...up, count: newVal })}
                                        disabled={disabledByUser}
                                    />
                                </div>
                            </div>
                        );
                    }

                    case "grouped": {
                        const totalSelected = totalSelectedInGroup(up);
                        const modelCount = getUnitModelCount(unit);
                        const maxTotal = up.maxPer ?? modelCount;
                        const heading = up.upgradeText ??
                            (up.maxPer ? `May take up to ${maxTotal} of:` : `Each model may take one of the following:`);

                        return (
                            <div key={up.name} className="upgrade-group-card">
                                <div className="upgrade-group-heading">
                                    {renderWithReferences(heading, registry, openRuleModal)}
                                </div>
                                {up.options.map(opt => {
                                    // At the top of the map for up.options inside grouped
                                    const groupDisabled = up.user && !modelExists(up.user);

                                    const current = unit.chosenUpgrades.find(sel => sel.name === opt.name);
                                    const value = current ? current.count : 0;

                                    const maxAllowed = maxTotal - (totalSelected - value);
                                    const disabledOpt = opt.user ? !modelExists(opt.user) : false;

                                    // Radio-style if maxTotal === 1
                                    if (maxTotal === 1) {
                                        const selectedOpt = Boolean(value);
                                        return (
                                            <label key={opt.name} className="upgrade-option-row">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedOpt}
                                                    disabled={groupDisabled}
                                                    onChange={() => {
                                                        up.options.forEach(o => {
                                                            if (o.name !== opt.name) {
                                                                onToggle(unit.id, { ...o, count: 0 });
                                                            }
                                                        });
                                                        onToggle(unit.id, { ...opt, count: selectedOpt ? 0 : 1 });
                                                    }}
                                                    className="upgrade-input-checkbox"
                                                />
                                                <span className="upgrade-label">
                                                    {renderWithReferences(opt.name, registry, openRuleModal)} (+{opt.points} pts)
                                                </span>
                                            </label>
                                        );
                                    }

                                    // Stepper style for multiple selections
                                    return (
                                        <div key={opt.name} className="upgrade-row">
                                            <span className="upgrade-label">
                                                {renderWithReferences(opt.name, registry, openRuleModal)} (+{opt.points} pts each)
                                            </span>
                                            <div className="upgrade-control">
                                                <Stepper
                                                    value={value}
                                                    min={0}
                                                    max={maxAllowed}
                                                    onChange={v => onToggle(unit.id, { ...opt, count: v })}
                                                    disabled={groupDisabled}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    }

                    default:
                        return null;
                }
            })}
        </div>
    );
}

function getMinimumUnitCost(unit) {
    let base = 0;

    if (unit.unitComp?.length) {
        unit.unitComp.forEach(pool => {
            if (pool.type === "singleVariant" && pool.entries?.length) {
                // always take the cheapest for the minimum cost
                const cheapest = pool.entries.reduce(
                    (min, e) =>
                        (e.basePoints ?? 0) < (min.basePoints ?? 0) ? e : min,
                    pool.entries[0]
                );
                base += (cheapest.basePoints ?? 0);
            } else if (pool.type === "corePool" && pool.entries?.length) {
                const firstEntry = pool.entries[0];
                const minTotal = pool.minTotal ?? 0;
                base += (firstEntry.basePoints ?? 0) * minTotal;
            }
        });
    } else {
        base = (unit.basePoints ?? 0) * (unit.minModels ?? 0);
    }

    // Add forced upgrades
    const forced = (unit.upgrades || [])
        .filter(up => up.forced)
        .reduce((sum, up) => {
            if (up.type === "perModel") {
                const modelCount = unit.unitComp?.[0]?.minTotal ?? unit.minModels ?? 1;
                return sum + (up.points ?? 0) * modelCount;
            }
            return sum + (up.points ?? 0);
        }, 0);

    return base + forced;
}

function initializeUnitComp(unit) {
    // make a deep copy to avoid mutating the original template
    const newUnit = JSON.parse(JSON.stringify(unit));

    if (newUnit.unitComp?.length) {
        newUnit.unitComp.forEach(pool => {
            if (pool.type === "corePool" && pool.entries?.length) {
                let remaining = pool.minTotal ?? 0;

                pool.entries.forEach((entry, i) => {
                    // Give the first entry all of the minimum models
                    entry.count = i === 0 ? remaining : 0;
                });
            }
        });
    }

    // fallback for units without unitComp
    if (!newUnit.unitComp && newUnit.minModels) {
        newUnit.count = newUnit.minModels;
    }

    return newUnit;
}

function getUnitModelCount(unit) {
    return (unit.unitComp || []).reduce((sum, pool) =>
        sum +
        (pool.entries || []).reduce((s, e) => s + (e.count ?? 0), 0)
        , 0);
}




export default function Listicles({ saved }) {

    const [savedLists, setSavedLists] = useState(() => {
        return JSON.parse(localStorage.getItem("savedLists") || "[]");
    });
    
    


    const APP_NAME = "Listicles";

    const { factionId, listIndex } = useParams();
    const storageKey = `army-${factionId}`;

    let faction;
    let initialArmy = [];

    if (saved) {
        const savedLists = JSON.parse(localStorage.getItem("savedLists") || "[]");
        const list = savedLists[listIndex];
        if (!list) return <p>Saved list not found!</p>;

        initialArmy = list.army;
        faction = factions[list.factionId]; // 👈 reload from factions
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
    const [army, setArmy] = useState(() => {
        const saved = localStorage.getItem(storageKey);
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(army));

    }, [army, storageKey]);
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
            u => u.category === cat && !u.ignoreSlot
        ).length;
        return acc;
    }, {});

    const isUnitDisabled = (unit, categoryCounts, limits, army) => {
        const unitCount = army.filter(a => a.name === unit.name).length;
        const categoryFull = !unit.ignoreSlot && categoryCounts[unit.category] >= limits[unit.category];
        const unitFull = unit.unitLimit && unitCount >= unit.unitLimit;
        return categoryFull || unitFull;
    };


    const openRuleModal = (rule) => setModalRule(rule);
    const closeRuleModal = () => setModalRule(null);



    const addUnit = (unit) => {
        const forced = (unit.upgrades || [])
            .filter(up => up.forced)
            .map(up => ({ ...up, count: 1 }));

        // Copy the unit
        const entry = {
            ...unit,
            id: Date.now(),
            count: unit.minModels,
            chosenUpgrades: forced,
            selectedVariants: {
                profile: unit.variants?.profile?.options?.[0]?.name ?? null,
                armour: unit.variants?.armour?.options?.[0]?.name ?? null
            },
            unitComp: unit.unitComp?.map(pool => {
                if (pool.type === "singleVariant" && pool.entries?.length) {
                    // Auto-select the cheapest variant
                    const cheapestIndex = pool.entries.reduce(
                        (minIdx, e, idx, arr) =>
                            (e.basePoints ?? 0) < (arr[minIdx].basePoints ?? 0) ? idx : minIdx,
                        0
                    );
                    return {
                        ...pool,
                        entries: pool.entries.map((e, i) => ({
                            ...e,
                            count: i === cheapestIndex ? 1 : 0
                        }))
                    };
                } else {
                    // For other pool types (attachments, corePool, etc.), don't force counts
                    return {
                        ...pool,
                        entries: pool.entries.map(e => ({
                            ...e,
                            count: e.count ?? 0
                        }))
                    };
                }
                return pool;
            })
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
        // points from unitComp
        const unitCompPoints = (u.unitComp || []).reduce((poolSum, pool) => {
            return poolSum + (pool.entries || []).reduce((entrySum, entry) => {
                const count = entry.count ?? 0;
                return entrySum + (entry.basePoints ?? 0) * count;
            }, 0);
        }, 0);

        // points from upgrades
        const upgradePoints = (u.chosenUpgrades || []).reduce((s, up) => {
            const cost = getUpgradeCost(up, u.selectedVariants?.profile);
            if (up.type === "perModel") return s + cost * (u.count || 0);
            return s + cost * (up.count || 1);
        }, 0);

        return sum + unitCompPoints + upgradePoints;
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
                if (nextPanel === "reference") openRightPanel();
                else goToPanel(nextPanel);
            }
        },
        onSwipedRight: () => {
            const i = panelOrder.indexOf(activePanel);
            if (i > 0) {
                const prevPanel = panelOrder[i - 1];
                if (prevPanel === "reference") openRightPanel();
                else goToPanel(prevPanel);
            }
        },
        delta: 90,
        preventScrollOnSwipe: true,
    });


    // store refs for each panel
    const panelRefs = {
        units: leftRef,
        list: middleRef,
        reference: rightRef,
    };

    const [activePanel, setActivePanel] = useState("units");

    const scrollToPanel = (ref, key) => {
        if (ref.current && containerRef.current) {
            containerRef.current.scrollTo({
                left: ref.current.offsetLeft,
                behavior: "smooth",
            });
            // reset that panel's vertical scroll
            const panel = panelRefs[key]?.current;
            if (panel) panel.scrollTop = 0;
        }
    };

    // wherever you change activePanel:
    const goToPanel = (key) => {
        setActivePanel(key);
        scrollToPanel(panelRefs[key], key);
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

    function getUnitPoints(u) {
        if (!u.unitComp?.length) return (u.count ?? 0) * (u.basePoints ?? 0);

        return u.unitComp.reduce((poolSum, pool) => {
            return poolSum + (pool.entries?.reduce((entrySum, entry) => {
                return entrySum + (entry.count ?? 0) * (entry.basePoints ?? 0);
            }, 0) || 0);
        }, 0);
    }


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
        const unitPoints = getUnitPoints(u) + upgradePoints + variantExtraPoints;


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
    const panelLabels = {
        units: "Codex",
        list: "List",
        reference: "Ref",
    };

    const [armyState, setArmyState] = useState([]);

    const openRightPanel = () => {
        const state = buildArmyState(army);
        setArmyState(state);

        goToPanel("reference");
    };


    return (
        <div className="army-builder" {...handlers}>

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
                                        const minCost = getMinimumUnitCost(u);
                                        const unitCount = army.filter(a => a.name === u.name).length;
                                        const disabled = isUnitDisabled(u, categoryCounts, limits, army);

                                        return (
                                            <button
                                                key={u.name}
                                                onClick={() => addUnit(initializeUnitComp(u))}
                                                className="unit-button"
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    opacity: disabled ? 0.4 : 1,
                                                    pointerEvents: disabled ? "none" : "auto",
                                                    cursor: disabled ? "not-allowed" : "pointer",
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

                                    function updateUnitCompEntry(unitId, poolIndex, entryIndex, newCount) {
                                        setArmy(prev =>
                                            prev.map(u =>
                                                u.id !== unitId ? u : {
                                                    ...u,
                                                    unitComp: u.unitComp.map((p, i) =>
                                                        i === poolIndex
                                                            ? {
                                                                ...p,
                                                                entries: p.entries.map((e, j) =>
                                                                    j === entryIndex ? { ...e, count: newCount } : e
                                                                )
                                                            }
                                                            : p
                                                    )
                                                }
                                            )
                                        );
                                    }

                                    const unitCompPoints = u.unitComp?.reduce((poolSum, pool) => {
                                        return poolSum + pool.entries.reduce((entrySum, entry) => {
                                            const count = entry.count ?? 0;
                                            return entrySum + count * (entry.basePoints ?? 0);
                                        }, 0);
                                    }, 0) ?? 0;
                                    const upgradePoints = (u.chosenUpgrades || []).reduce((s, up) => {
                                        const cost = getUpgradeCost(up, u.selectedVariants?.profile);
                                        if (up.type === "perModel") return s + cost * (u.count || 0);
                                        return s + cost * (up.count || 1);
                                    }, 0);

                                    const totalUnitPoints = unitCompPoints + upgradePoints;



                                    // --- Variant-dependent unit points ---
                                    const selectedVariantName = u.selectedVariants?.profile;

                                    // Base points
                                    const basePoints = u.basePoints * u.count;

                                    const activeProfile = u.variants?.profile?.options.find(
                                        p => p.name === selectedVariantName
                                    );

                                    const variantExtraPoints = activeProfile?.extraPoints || 0;
                                    const statlines = activeProfile ? [{ name: activeProfile.name, ...activeProfile.statline }] : u.statline;


                                    const unitPoints = unitCompPoints; // + any global upgrades if needed



                                    const profile = activeProfile || { name: u.name, statline: u.statline || {} };
                                    let mergedStats = [
                                        { name: profile.name, ...profile.statline }
                                    ];

                                    // apply any statline modifiers
                                    (u.chosenUpgrades || []).forEach(up => {
                                        if (up.statlineModifiers) {
                                            mergedStats = mergedStats.map(stat => ({ ...stat, ...up.statlineModifiers }));
                                        }
                                    });

                                    u.chosenUpgrades.forEach(up => {
                                        if (up.statlineModifiers) {
                                            mergedStats = mergedStats.map(stat => ({
                                                ...stat,
                                                ...up.statlineModifiers
                                            }));
                                        }
                                    });

                                    return (
                                        <div key={u.id} className="unit-card">
                                            <h4 style={{ cursor: "pointer" }}>
                                                {u.name} ({totalUnitPoints} pts)
                                            </h4>

                                            {/* Action Buttons */}
                                            <div className="unit-actions">
                                                <button onClick={() => resetUnit(u.id)}>Reset</button>
                                                <button onClick={() => removeUnit(u.id)}>Remove</button>
                                            </div>

                                            {u.variants && (
                                                <div className="variant-selectors">
                                                    {Object.entries(u.variants).map(([key, cfg]) => (
                                                        <div key={key} className="variant-select">
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

                                            {/*for unit types*/}
                                            {u.modelType && (
                                                <div className="unit-type">
                                                    {renderWithReferences(u.modelType, registry,
                                                        openRuleModal)}
                                                </div>
                                            )}



                                            {/* Unit Composition */}
                                            <h5 className="models-heading">Unit Composition</h5>

                                            {u.unitComp?.length ? (

                                                u.unitComp.map((pool, pIndex) => {
                                                    if (pool.type !== "singleVariant") {

                                                        const alreadyChosen = pool.entries.some(e => (e.count ?? 0) > 0);
                                                        if (!alreadyChosen && pool.entries.length && pool.type !== "attachment") {
                                                            const cheapestIndex = pool.entries.reduce(
                                                                (minIdx, e, idx, arr) =>
                                                                    (e.basePoints ?? 0) < (arr[minIdx].basePoints ?? 0) ? idx : minIdx,
                                                                0
                                                            );

                                                            setArmy(prev =>
                                                                prev.map(unit =>
                                                                    unit.id !== u.id
                                                                        ? unit
                                                                        : {
                                                                            ...unit,
                                                                            unitComp: unit.unitComp.map((p, i) =>
                                                                                i !== pIndex
                                                                                    ? p
                                                                                    : {
                                                                                        ...p,
                                                                                        entries: p.entries.map((en, idx) => ({
                                                                                            ...en,
                                                                                            count: idx === cheapestIndex ? 1 : 0,
                                                                                        })),
                                                                                    }
                                                                            ),
                                                                        }
                                                                )
                                                            );
                                                        }
                                                    }

                                                    return (
                                                        <div key={pIndex} className="comp-pool">
                                                            {pool.compText && <p className="comp-text">{pool.compText}</p>}

                                                            {/* singleVariant logic */}
                                                            {pool.type === "singleVariant" ? (
                                                                <div className="comp-entry">
                                                                    <div className="entry-row">
                                                                        <label className="entry-label">Choose Variant</label>
                                                                        <select
                                                                            value={pool.entries.find(e => (e.count ?? 0) > 0)?.name || ""}
                                                                            onChange={e => {
                                                                                const chosen = e.target.value;
                                                                                setArmy(prev =>
                                                                                    prev.map(unit =>
                                                                                        unit.id !== u.id
                                                                                            ? unit
                                                                                            : {
                                                                                                ...unit,
                                                                                                unitComp: unit.unitComp.map((p, i) =>
                                                                                                    i !== pIndex
                                                                                                        ? p
                                                                                                        : {
                                                                                                            ...p,
                                                                                                            entries: p.entries.map(en => ({
                                                                                                                ...en,
                                                                                                                count: en.name === chosen ? 1 : 0,
                                                                                                            })),
                                                                                                        }
                                                                                                ),
                                                                                            }
                                                                                    )
                                                                                );
                                                                            }}
                                                                        >
                                                                            {pool.entries.map(opt => (
                                                                                <option key={opt.name} value={opt.name}>
                                                                                    {opt.name} ({opt.basePoints} pts)
                                                                                </option>
                                                                            ))}
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            ) : (

                                                                pool.entries.map((entry, eIndex) => {
                                                                    const entryCount = entry.count ?? 0;


                                                                    const currentTotal = pool.entries.reduce((s, e, i) => s + ((e.count ?? 0) * (!e.ignoresUnitMax ? 1 : 0)), 0);
                                                                    const minAllowed = entry.min ?? 0;
                                                                    const maxAllowed = entry.ignoresUnitMax
                                                                        ? entry.max ?? 1
                                                                        : pool.maxTotal != null
                                                                            ? Math.min(entry.max ?? pool.maxTotal, pool.maxTotal - (currentTotal - entryCount))
                                                                            : entry.max ?? 99;


                                                                    return (
                                                                        <div key={eIndex} className="comp-entry">
                                                                            {entry.compText && <p className="entry-comp-text">{entry.compText}</p>}
                                                                            <div className="entry-row">
                                                                                <span className="entry-label">{entry.name}</span>
                                                                                <Stepper
                                                                                    value={entryCount}
                                                                                    min={Math.max(entry.min ?? 0, pool.minTotal - pool.entries.reduce((s, e, i) => i !== eIndex ? s + (e.count ?? 0) : s, 0))}
                                                                                    max={maxAllowed}
                                                                                    onChange={val => updateUnitCompEntry(u.id, pIndex, eIndex, val)}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                })
                                                            )}
                                                        </div>
                                                    );
                                                })
                                            ) : (
                                                // keep the old simple stepper for units without unitComp
                                                <>
                                                    {u.minModels === 1 && u.maxModels === 1 ? (
                                                        <span className="models-fixed">1 model</span>
                                                    ) : (
                                                        <Stepper
                                                            value={u.count}
                                                            min={u.minModels}
                                                            max={u.maxModels}
                                                            onChange={val => updateCount(u.id, val)}
                                                        />
                                                    )}
                                                </>
                                            )}



                                            {/* Statline */}
                                            {(Array.isArray(u.statline) || u.variants?.profile?.options) && (() => {
                                                const profiles = [
                                                    ...(Array.isArray(u.statline) ? u.statline : []),
                                                    ...(u.variants?.profile?.options?.map(opt => ({
                                                        name: opt.name,
                                                        ...opt.statline
                                                    })) || [])
                                                ];

                                                return u.isDreadnought ? (
                                                    // ---------- Vehicle statline ----------
                                                    <table className="unit-table">
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>WS</th>
                                                                <th>BS</th>
                                                                <th>S</th>
                                                                <th>Fr</th>
                                                                <th>Si</th>
                                                                <th>Re</th>
                                                                <th>I</th>
                                                                <th>A</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {profiles.map((profile, i) => (
                                                                <tr key={i}>
                                                                    <td className="unit-name">{profile.name}</td>
                                                                    {["WS", "BS", "S", "armourFront", "armourSide", "armourRear", "I", "A"].map(stat => (
                                                                        <td key={stat}>{profile[stat]}</td>
                                                                    ))}
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                ) :


                                                    u.isVehicle ? (
                                                        // ---------- Vehicle statline ----------
                                                        <table className="unit-table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Name</th>
                                                                    <th>Front Armour</th>
                                                                    <th>Side Armour</th>
                                                                    <th>Rear Armour</th>
                                                                    <th>BS</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {profiles.map((profile, i) => (
                                                                    <tr key={i}>
                                                                        <td className="unit-name">{profile.name}</td>
                                                                        {["armourFront", "armourSide", "armourRear", "BS"].map(stat => (
                                                                            <td key={stat}>{profile[stat]}</td>
                                                                        ))}
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    ) : (


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
                                                    );
                                            })()}

                                            {/* Base Wargear Section */}
                                            <div className="unit-wargear">
                                                <h5>Base Wargear:</h5>

                                                {/* Wargear for each unitComp entry */}
                                                <div className="army-panel">
                                                    {u.unitComp?.map((pool, pIndex) =>
                                                        pool.entries.map((entry, eIndex) =>
                                                            entry.wargearEach?.length ? (
                                                                <p key={`${pIndex}-${eIndex}`}>
                                                                    Each {entry.name} is equipped with:{" "}
                                                                    {entry.wargearEach.map((w, i) => (
                                                                        <span key={i}>
                                                                            {renderWithReferences(w, registry, openRuleModal)}
                                                                            {i < entry.wargearEach.length - 1 ? ", " : ""}
                                                                        </span>
                                                                    ))}
                                                                    .
                                                                </p>
                                                            ) : null
                                                        )
                                                    )}
                                                </div>

                                                {/* Wargear for the main unit */}
                                                <div className="army-panel">
                                                    {u.wargearMain?.length ? (
                                                        <p>
                                                            The entire unit is equipped with:{" "}
                                                            {u.wargearMain.map((w, i) => (
                                                                <span key={i}>
                                                                    {renderWithReferences(w, registry, openRuleModal)}
                                                                    {i < u.wargearMain.length - 1 ? ", " : ""}
                                                                </span>
                                                            ))}
                                                            .
                                                        </p>
                                                    ) : null}
                                                </div>
                                            </div>



                                            {/* Rules */}
                                            {
                                                u.rules?.length > 0 && (
                                                    <div className="unit-wargear">
                                                        <h5>Rules:</h5>
                                                        <div className="army-panel">
                                                            {u.rules.map((r, i) => <div key={i}>{renderWithReferences(r, registry, openRuleModal)}</div>)}
                                                        </div>
                                                    </div>
                                                )
                                            }

                                            {/* Wargear */}
                                            {
                                                (u.wargear?.length || u.chosenUpgrades?.some(up => up.wargear)) > 0 && (
                                                    <div className="unit-wargear">
                                                        <h5>Wargear:</h5>
                                                        <div>
                                                            <div className="army-panel">
                                                                {u.wargear.map((w, i) => <div key={i}>{renderWithReferences(w, registry, openRuleModal)}</div>)}                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }


                                            {/* Upgrades */}
                                            <div className="unit-wargear">
                                                <h5>Options:</h5>
                                                <UpgradeOptions
                                                    unit={u}
                                                    upgrades={u.upgrades || []}
                                                    onToggle={toggleUpgrade}
                                                    registry={registry}
                                                    openRuleModal={openRuleModal}
                                                />
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
                    <RightPanel
                        armyState={armyState}
                        registry={registry}
                        openRuleModal={openRuleModal}
                        renderWithReferences={renderWithReferences}
                    />
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

                                            // Get the current faction ID from the URL (useParams)
                                            if (!factionId) {
                                                alert("Cannot save: missing faction ID.");
                                                return;
                                            }

                                            const newList = {
                                                name: saveName,
                                                system: faction.system || faction.name,
                                                factionId,        // 👈 important for reloading faction later
                                                army,             // current army state
                                            };

                                            // Load existing saved lists from localStorage
                                            const savedLists = JSON.parse(localStorage.getItem("savedLists") || "[]");

                                            // Add new list
                                            const updatedLists = [...savedLists, newList];

                                            // Save both to localStorage and state
                                            localStorage.setItem("savedLists", JSON.stringify(updatedLists));

                                            setSavedLists(updatedLists); // update state if you have it
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


            <div className="panel-nav">
                {panelOrder.map((key) => (
                    <button
                        key={key}
                        onClick={() => {
                            if (key === "reference") openRightPanel(); // compute state
                            else goToPanel(key);
                        }}
                        className={activePanel === key ? "page-btn active" : "page-btn"}
                    >
                        {panelLabels[key]}
                    </button>
                ))}
            </div>

        </div>

    );

}
