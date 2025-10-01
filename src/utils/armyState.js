// utils/armyState.js

export function buildUnitState(unit) {
    // --- 1. Work out which profile(s) we’re displaying ------------------------
    let displayedStatlines = [];

    if (unit.unitComp?.length) {
        // Flatten all entries with count > 0
        const activeEntries = unit.unitComp.flatMap(pool =>
            pool.entries.filter(entry => (entry.count ?? 0) > 0)
        );

        // Only add a profile if there’s a matching active entry
        activeEntries.forEach(entry => {
            if (unit.variants?.profile?.options?.length) {
                const selectedProfile = unit.variants.profile.options.find(
                    p => p.name === entry.name
                );

                if (selectedProfile) {
                    displayedStatlines.push({
                        name: selectedProfile.name,
                        ...selectedProfile.statline,
                        isVehicle: unit.isVehicle,
                        isDreadnought: unit.isDreadnought,
                    });
                } else {
                    // fallback to unit.statline if variant not found
                    const matchingStatline = Array.isArray(unit.statline)
                        ? unit.statline.find(s => s.name === entry.name)
                        : unit.statline.name === entry.name
                            ? unit.statline
                            : null;

                    if (matchingStatline) {
                        displayedStatlines.push({
                            ...matchingStatline,
                            isVehicle: unit.isVehicle,
                            isDreadnought: unit.isDreadnought,
                        });
                    }
                }
            } else if (unit.statline) {
                // no variants at all, just use statline
                const matchingStatline = Array.isArray(unit.statline)
                    ? unit.statline.find(s => s.name === entry.name)
                    : unit.statline.name === entry.name
                        ? unit.statline
                        : null;

                if (matchingStatline) {
                    displayedStatlines.push({
                        ...matchingStatline,
                        isVehicle: unit.isVehicle,
                        isDreadnought: unit.isDreadnought,
                    });
                }
            }
        });
        if (displayedStatlines.length === 0 && unit.statline) {
            const firstStatline = Array.isArray(unit.statline)
                ? unit.statline[0]
                : unit.statline;

            if (firstStatline) {
                displayedStatlines.push({
                    ...firstStatline,
                    isVehicle: unit.isVehicle,
                    isDreadnought: unit.isDreadnought,
                });
            }
        }
    }



    // --- 2. Build composition models from unitComp ---------------------------
    const compositionModels = [];

    if (unit.unitComp?.length) {
        unit.unitComp.forEach(pool => {
            pool.entries.forEach(entry => {
                const count = entry.count ?? 0; // how many of this entry are selected
                for (let i = 0; i < count; i++) {
                    compositionModels.push({
                        name: entry.name,
                        gear: [...(entry.wargearEach || [])],
                    });
                }
            });
        });
    } else {
        // fallback for old-style units
        const baseName =
            (unit.selectedVariants?.profile &&
                unit.variants?.profile?.options?.find(
                    o => o.name === unit.selectedVariants.profile
                )?.name) ||
            (displayedStatlines.length ? displayedStatlines[0].name : unit.name);

        for (let i = 0; i < unit.count; i++) {
            compositionModels.push({
                name: baseName,
                gear: [...(unit.wargearEach || [])],
            });
        }
    }

    // --- 3. Collect unit-wide data before upgrades ---------------------------
    const unitWargear = [...(unit.wargearMain || [])];
    const unitRules = [...(unit.rules || [])];

    // --- 4. Apply chosen upgrades (persistent per-user pools) ---------------
    const assignmentPools = compositionModels.reduce((acc, m) => {
        if (!acc[m.name]) acc[m.name] = [];
        acc[m.name].push(m);
        return acc;
    }, {});

    // Helper: apply removes + add wargear
    const applyWargear = (model, up) => {
        if (Array.isArray(up.removes)) {
            model.gear = model.gear.filter(g => !up.removes.includes(g));
        }
        model.gear.push(...(up.wargearEach || []));
    };

    (unit.chosenUpgrades || []).forEach(up => {
        const c = up.count || 0;
        if (c <= 0) return;

        // Per-model gear (distribute across models using persistent pools)
        if (up.wargearEach) {
            const pool = assignmentPools[up.user] ?? [];

            if (!pool.length) {
                // no matching models in this unit — skip
            } else if (pool.length === 1) {
                // only one model of this type: stack all upgrades on it
                const model = pool[0];
                // apply once — UI should prevent selecting a count > 1 when unit count === 1,
                // but we loop c times to be robust in case input is unexpected
                for (let i = 0; i < c; i++) {
                    applyWargear(model, up);
                }
            } else {
                // multiple models: give each upgrade to a different model (consume pool)
                for (let i = 0; i < c && pool.length > 0; i++) {
                    const model = pool.shift(); // remove this instance from the pool (persistent)
                    applyWargear(model, up);
                }
                // if c > original pool size, we stop assigning extras rather than reusing models
                // (change behavior below if you want cycling instead)
            }
        }

        // Unit-wide gear
        if (up.wargearMain) unitWargear.push(...up.wargearMain);

        // Extra rules
        if (up.rules) unitRules.push(...up.rules);

        // Statline modifiers
        if (up.statlineModifiers) {
            displayedStatlines = displayedStatlines.map(s => ({
                ...s,
                ...up.statlineModifiers,
            }));
        }
    });

    // --- 5. Flatten & merge identical models for display ---------------------
    const grouped = {};

    compositionModels.forEach(m => {
        // Use the *entire* gear set as the key, but keep it per model
        // Sorting ensures consistent ordering when multiple items exist
        const gearKey = m.gear.length
            ? `${m.name}, ${[...m.gear].sort().join(", ")}`
            : m.name;

        grouped[gearKey] = (grouped[gearKey] || 0) + 1;
    });

    const composition = Object.entries(grouped).map(([label, count]) =>
        count > 1 ? `${label} (${count})` : label
    );

    // --- 6. Return the unit’s display state ----------------------------------
    return {
        id: unit.id,
        name: unit.name,
        count: compositionModels.length,
        modelType: unit.modelType,
        statlines: displayedStatlines,
        composition,
        rules: unitRules,
        wargear: unitWargear,
        category: unit.category,
        isDreadnought: unit.isDreadnought,
        isVehicle: unit.isVehicle,
    };
}

// Build the full army state
export function buildArmyState(army) {
    return army.map(buildUnitState);
}
