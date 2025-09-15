import ReactMarkdown from "react-markdown";

export const units = [
    {
        name: "Dark Eldar Lord",
        category: "HQ",
        basePoints: 60,
        minModels: 1,
        maxModels: 1,
        variants: {
            profile: {
                label: "Hero Type",
                options: [
                    {
                        name: "Archon",
                        statline: { WS: 6, BS: 6, S: 3, T: 3, W: 3, I: 7, A: 3, Ld: 9, Sv: "5+" },
                        extraPoints: 0
                    },
                    {
                        name: "Dracon",
                        statline: { WS: 5, BS: 5, S: 3, T: 3, W: 2, I: 6, A: 2, Ld: 9, Sv: "5+" },
                        extraPoints: -25
                    },
                ]
            },

        },
        rules: ["[Independent Character]", "[Retinue]", "[Haemonculus]"],
        wargear: ["[Splinter Pistol]"],
        upgrades: [
            {
                type: "grouped",
                name: "Lord Special Weapons",
                maxPer: 2,
                options: [
                    { type: "single", name: "[Close Combat Weapon]", points: 1, wargear: ["[Close Combat Weapon]"] },
                    { type: "single", name: "[Power Weapon]", points: 10, wargear: ["[Power Weapon]"] },
                    { type: "single", name: "[Splinter Pistol]", points: 1, wargear: ["[Splinter Pistol]"] },
                    { type: "single", name: "[Splinter Rifle]", points: 2, wargear: ["[Splinter Rifle]"] },
                ]
            },
            { type: "single", name: "[Raider]", points: 0, wargear: ["[Raider]"] },


        ],

    },
    {
        name: "Dark Eldar Lord's Retinue",
        category: "HQ",
        basePoints: 8,
        minModels: 5,
        maxModels: 10,
        ignoreSlot: true,
        statline: [
            {
                name: "Dark Eldar",
                WS: 4,
                BS: 4,
                S: 3,
                T: 3,
                W: 1,
                I: 5,
                A: 1,
                Ld: 8,
                Sv: "5+",
            },
            {
                name: "Incubus",
                WS: 5,
                BS: 4,
                S: 3,
                T: 3,
                W: 1,
                I: 5,
                A: 1,
                Ld: 8,
                Sv: "3+",
            },
            {
                name: "Haemonculus",
                WS: 4,
                BS: 4,
                S: 3,
                T: 4,
                W: 2,
                I: 4,
                A: 2,
                Ld: 8,
                Sv: "5+",
            }
        ],
        rules: [""],
        wargear: ["[Splinter Rifle]"],
        upgrades: [
            { type: "perModelLimited", name: "[Incubi]", points: 17, wargear: ["[Splinter Pistol]", "[Power weapon]"] },
            {
                type: "grouped",
                name: "ret Special Weapons",
                maxPer: 2,
                options: [
                    { name: "Dark Eldar [Splinter Cannon]", points: 10, wargear: ["[Splinter Cannon]"] },
                    { name: "Dark Eldar [Lascannon]", points: 15, wargear: ["[Lascannon]"] },
                ]
            },
            { type: "limited", name: "Incubi [Shredder]", points: 10, maxPer: 2, wargear: ["[Shredder]"] },
            { type: "single", name: "[Haemonculus]", points: 35, wargear: ["[Flamer]", "[Poisoned Blades]", "[Krak Grenades]"] },
        ],

    },
    {
        name: "Wyches",
        category: "Elites",
        basePoints: 12,
        minModels: 5,
        maxModels: 20,
        statline: [
            {
                name: "Succubus",
                WS: 4,
                BS: 4,
                S: 3,
                T: 3,
                W: 1,
                I: 6,
                A: 2,   // example: extra attack for squad leader
                Ld: 9,  // example: higher leadership
                Sv: "6+",
            },
            {
                name: "Wych",
                WS: 4,
                BS: 4,
                S: 3,
                T: 3,
                W: 1,
                I: 6,
                A: 1,
                Ld: 8,
                Sv: "6+",
            }

        ],
        rules: ['[Dodge]', '[Combat Drugs]'],
        wargear: ["[Splinter Pistol]", "[Close Combat Weapon]"],
        upgrades: [
            { type: "single", name: "[Succubus]", points: 8 },
            { type: "limited", name: "[Blaster]", points: 15, maxPer: 2 },
            { type: "perModel", name: "[Haywire Grenades]", points: 4 },
            { type: "perModel", name: "[Plasma Grenades]", points: 1 },
            { type: "perModel", name: "[Wych Weapons]", points: 1 },
        ],
        conditionalEffects: [
            {
                // Triggered by selecting this upgrade
                triggerUpgrade: "[Succubus]",
                effects: {
                    //  unlockWargear: ["[Agonizer]", "[Wych Blade]"], // extra wargear options
                    unlockUpgrades: [
                        { type: "perModel", name: "[Special Wych Weapon]", points: 3 },
                    ],
                },
            },
        ],
    },

    {
        name: "Kabalite Warriors",
        category: "Troops",
        basePoints: 8,
        minModels: 3,
        maxModels: 10,
        statline: [
            {
                name: "Warrior",
                WS: 4,
                BS: 4,
                S: 3,
                T: 3,
                W: 1,
                I: 6,
                A: 1,
                Ld: 8,
                Sv: "6+",
            },
            {
                name: "Sybarite",
                WS: 4,
                BS: 4,
                S: 3,
                T: 3,
                W: 1,
                I: 6,
                A: 2,
                Ld: 8,
                Sv: "6+",
            }
        ],
        rules: ["Dodge", "Combat Drugs"],
        wargear: ["Splinter Pistols", "Close Combat Weapons"],
        upgrades: [
            { type: "single", name: "Blaster", points: 15 },
            { type: "single", name: "Dark Lance", points: 20 },
        ],

    },
];
