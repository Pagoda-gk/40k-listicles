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
        name: "Haemonculus",
        category: "HQ",
        basePoints: 35,
        minModels: 1,
        maxModels: 3,
        statline: [
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
            },
        ],
        rules: ["[Squad]"],
        wargear: ["[Flamer]", "[Poisoned Blades]", "[Krak Grenades]", "[Krak Grenades]"],
    },
    {
        name: "Mandrakes",
        category: "Elites",
        basePoints: 15,
        minModels: 5,
        maxModels: 10,
        statline: [
            {
                name: "Mandrake",
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
        ],
        rules: ['[Shadow-Skinned]', '[Infiltrators]'],
        wargear: ["[Splinter Pistol]", "[Close Combat Weapon]"],
    },

    {
        name: "Wyches",
        category: "Elites",
        basePoints: 7,
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
                A: 2,
                Ld: 8,
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
            {
                type: "single", name: "[Succubus]", points: 8,
                children: [
                    {
                        type: "grouped",
                        name: "wych Special Weapons",
                        maxPer: 1,
                        options: [
                            { type: "single", name: "[Close Combat Weapon]", points: 1, wargear: ["[Close Combat Weapon]"] },
                            { type: "single", name: "[Power Weapon]", points: 10, wargear: ["[Power Weapon]"] },
                            { type: "single", name: "[Splinter Pistol]", points: 1, wargear: ["[Splinter Pistol]"] },
                            { type: "single", name: "[Splinter Rifle]", points: 2, wargear: ["[Splinter Rifle]"] },
                        ]
                    }
                ],
            },
            { type: "limited", name: "[Shredder]", points: 10, maxPer: 2, wargear: ["[Shredder]"] },
            { type: "single", name: "[Raider]", points: 0 },
        ],
    },

    {
        name: "Warrior Squad",
        category: "Troops",
        basePoints: 8,
        minModels: 10,
        maxModels: 20,
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
                name: "Sybarite",
                WS: 4,
                BS: 4,
                S: 3,
                T: 3,
                W: 1,
                I: 5,
                A: 2,
                Ld: 8,
                Sv: "5+",
            }
        ],
        rules: [""],
        wargear: ["[Splinter Rifle]"],
        upgrades: [
            {
                type: "grouped",
                name: "Warrior Special Weapons",
                maxPer: 2,
                options: [
                    { name: "[Splinter Cannon]", points: 10, wargear: ["[Splinter Cannon]"] },
                    { name: "[Lascannon]", points: 20, wargear: ["[Lascannon]"] },
                ]
            },
            {
                type: "single", name: "Sybarite", points: 8,
                children: [
                    {
                        type: "grouped",
                        name: "wych Special Weapons",
                        maxPer: 1,
                        options: [
                            { type: "single", name: "[Close Combat Weapon]", points: 1, wargear: ["[Close Combat Weapon]"] },
                            { type: "single", name: "[Power Weapon]", points: 10, wargear: ["[Power Weapon]"] },
                            { type: "single", name: "[Splinter Pistol]", points: 1, wargear: ["[Splinter Pistol]"] },
                            { type: "single", name: "[Splinter Rifle]", points: 2, wargear: ["[Splinter Rifle]"] },
                        ]
                    },
                    { type: "single", name: "[Splinter Pistol] and [Close Combat Weapon]", points: 0, wargear: ["[Splinter Pistol]", "[Close Combat Weapon]"] },

                ],

            },
            { type: "single", name: "[Raider]", points: 0 },

        ],

    },
    {
        name: "Raider Squad",
        category: "Troops",
        basePoints: 8,
        minModels: 5,
        maxModels: 10,
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
                name: "Sybarite",
                WS: 4,
                BS: 4,
                S: 3,
                T: 3,
                W: 1,
                I: 5,
                A: 2,
                Ld: 8,
                Sv: "5+",
            }
        ],
        rules: ["The unit is mounted on a Raider"],
        wargear: ["[Splinter Rifle]"],
        upgrades: [
            {
                type: "grouped",
                name: "Raider Special Weapons",
                maxPer: 2,
                options: [
                    { type: "limited", name: "[Shredder]", points: 10, maxPer: 1, wargear: ["[Shredder]"] },
                ]
            },
            {
                type: "grouped",
                name: "Raider Heavy Weapons",
                maxPer: 1,
                options: [
                    { name: "[Splinter Cannon]", points: 10, wargear: ["[Splinter Cannon]"] },
                    { name: "[Lascannon]", points: 10, wargear: ["[Lascannon]"] },
                ]
            },
            {
                type: "single", name: "Sybarite", points: 6,
                children: [
                    {
                        type: "grouped",
                        name: "wych Special Weapons",
                        maxPer: 1,
                        options: [
                            { type: "single", name: "[Close Combat Weapon]", points: 1, wargear: ["[Close Combat Weapon]"] },
                            { type: "single", name: "[Power Weapon]", points: 10, wargear: ["[Power Weapon]"] },
                            { type: "single", name: "[Splinter Pistol]", points: 1, wargear: ["[Splinter Pistol]"] },
                            { type: "single", name: "[Splinter Rifle]", points: 2, wargear: ["[Splinter Rifle]"] },
                        ]
                    }
                ],

            },
        ],

    },
    {
        name: "Raider",
        category: "Troops",
        modelType: "Vehicle",
        basePoints: 55,
        minModels: 1,
        maxModels: 1,
        ignoreSlot: true,
        isVehicle: true,
        statline: [
            {
                name: "Raider",
                armourFront: 10,
                armourSide: 10,
                armourRear: 10,
                BS: 4,
            },
        ],
        rules: ["[Skimmer]", "[Fast]", "[Open-Topped]", "[Transport] (10)"],
        wargear: ["[Lascannon]"],
        upgrades: [
            { type: "single", name: "[Plasma Cannon]", points: 0, wargear: ["[Plasma Cannon]"], removes: ["[Lascannon]"] },
        ],

    },
        {
        name: "Reaver Jetbike Squad",
        category: "Fast Attack",
        basePoints: 25,
        minModels: 3,
        maxModels: 10,
        statline: [
            {
                name: "Succubus",
                WS: 4,
                BS: 4,
                S: 4,
                T: 4,
                W: 1,
                I: 6,
                A: 2,
                Ld: 8,
                Sv: "4+",
            },
            {
                name: "Rider",
                WS: 4,
                BS: 4,
                S: 4,
                T: 4,
                W: 1,
                I: 6,
                A: 1,
                Ld: 8,
                Sv: "4+",
            }

        ],
        rules: [''],
        wargear: ["[Splinter Rifle]", "[Close Combat Weapon]"],
        upgrades: [
            {
                type: "single", name: "[Succubus]", points: 16,
                children: [
                    {
                        type: "grouped",
                        name: "wych Special Weapons",
                        maxPer: 1,
                        options: [
                            { type: "single", name: "[Close Combat Weapon]", points: 1, wargear: ["[Close Combat Weapon]"] },
                            { type: "single", name: "[Power Weapon]", points: 10, wargear: ["[Power Weapon]"] },
                            { type: "single", name: "[Splinter Pistol]", points: 1, wargear: ["[Splinter Pistol]"] },
                            { type: "single", name: "[Splinter Rifle]", points: 2, wargear: ["[Splinter Rifle]"] },
                        ]
                    }
                ],
            },
            { type: "limited", name: "[Shredder]", points: 15, maxPer: 3, wargear: ["[Shredder]"] },
        ],
    },

    {
        name: "Scourges",
        category: "Heavy Support",
        basePoints: 16,
        minModels: 5,
        maxModels: 10,
        statline: [
            {
                name: "Scourge",
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
                name: "Sybarite",
                WS: 4,
                BS: 4,
                S: 3,
                T: 3,
                W: 1,
                I: 5,
                A: 2,
                Ld: 8,
                Sv: "5+",
            }
        ],
        rules: ["[Deep Strike]"],
        wargear: ["[Jump Packs]", "[Splinter Rifle]"],
        upgrades: [
            {
                type: "grouped",
                name: "scourge heavy Weapons",
                maxPer: 4,
                options: [
                    { name: "[Splinter Cannon]", points: 20, wargear: ["[Splinter Cannon]"] },
                    { name: "[Lascannon]", points: 25, wargear: ["[Lascannon]"] },
                ]
            },
            {
                type: "single", name: "Sybarite", points: 6,
                children: [
                    { type: "single", name: "[Splinter Pistol] and [Close Combat Weapon]", points: 0, wargear: ["[Splinter Pistol]", "[Close Combat Weapon]"] },
                    { type: "single", name: "[Close Combat Weapon]", points: 1, wargear: ["[Close Combat Weapon]"] },
                    { type: "single", name: "[Power Weapon]", points: 10, wargear: ["[Power Weapon]"] },
                    { type: "single", name: "[Splinter Pistol]", points: 1, wargear: ["[Splinter Pistol]"] },
                    { type: "single", name: "[Splinter Rifle]", points: 2, wargear: ["[Splinter Rifle]"] },
                ],

            },
            { type: "single", name: "[Raider]", points: 0 },

        ],

    },
    {
        name: "Ravager",
        category: "Heavy Support",
        modelType: "Vehicle",
        basePoints: 105,
        minModels: 1,
        maxModels: 1,
        isVehicle: true,
        statline: [
            {
                name: "Raider",
                armourFront: 11,
                armourSide: 11,
                armourRear: 10,
                BS: 4,
            },
        ],
        rules: ["[Skimmer]", "[Fast]", "[Open-Topped]"],
        wargear: ["3x [Lascannon]"],
        upgrades: [
            { type: "Limited", name: "[Plasma Cannon]", points: 0, maxPer: 3, wargear: ["[Plasma Cannon]"] },
        ],

    },


];
