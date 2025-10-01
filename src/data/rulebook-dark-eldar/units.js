import ReactMarkdown from "react-markdown";

export const units = [
    {
        name: "Dark Eldar Lord",
        category: "HQ",
        unitLimit: 1,
        unitComp: [
            {
                type: "singleVariant",
                compText: "May take an Archon for 60 points or a Dracon for 35 points.",
                entries: [
                    {
                        name: "Archon",
                        basePoints: 60,
                        wargearEach: ["[Splinter Pistol]"]
                    },
                    {
                        name: "Dracon",
                        basePoints: 35,
                        wargearEach: ["[Splinter Pistol]"]
                    }
                ]
            },
        ],
        statline: [
            {
                name: "Archon",
                WS: 6, BS: 6, S: 3, T: 3, W: 3, I: 7, A: 3, Ld: 9, Sv: "5+",
            },
            {
                name: "Dracon",
                WS: 5, BS: 5, S: 3, T: 3, W: 2, I: 6, A: 2, Ld: 9, Sv: "5+",
            },
        ],
        rules: ["[Independent Character]", "[Retinue]", "[Extra Haemonculus]"],
        upgrades: [
            {
                type: "grouped",
                name: "Lord Special Weapons",
                maxPer: 2,
                options: [
                    { type: "single", name: "[Close Combat Weapon]", points: 1, wargearMain: ["[Close Combat Weapon]"] },
                    { type: "single", name: "[Power Weapon]", points: 10, wargearMain: ["[Power Weapon]"] },
                    { type: "single", name: "[Splinter Pistol]", points: 1, wargearMain: ["[Splinter Pistol]"] },
                    { type: "single", name: "[Splinter Rifle]", points: 2, wargearMain: ["[Splinter Rifle]"] }
                ]
            },
            { type: "single", name: "[Raider]", points: 0, wargearMain: ["Raider [Dedicated Transport]"] },


        ],

    },
    {
        name: "Dark Eldar Lord's Retinue",
        category: "HQ",
        unitComp: [
            {
                type: "corePool",
                compText: "This unit is made up between 5 and 10 models which can be Dark Eldar or Incubi.",
                minTotal: 5,
                maxTotal: 10,
                entries: [
                    {
                        name: "Dark Eldar",
                        basePoints: 8,
                        min: 0,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Splinter Rifle]"]
                    },
                    {
                        name: "Incubus",
                        basePoints: 25,
                        min: 0,
                        max: null,
                        wargearEach: ["[Power Weapon]", "[Splinter Pistol]"]
                    }
                ]
            },
            {
                // a *separate* add-on model that doesn’t count toward the 5–10 total
                type: "attachment",
                compText: "May be joined by:",
                minTotal: 0,
                maxTotal: 1,
                entries: [
                    {
                        name: "Haemonculus",
                        basePoints: 35,
                        wargearEach: ["[Flamer]", "[Poisoned Blades]", "[Krak Grenades]"]
                    }
                ]
            }
        ],

        ignoreSlot: true,
        unitLimit: 1,
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
        upgrades: [
            { upgradeText: "Up to 2 Incubi may take a", user: "Incubus", type: "limited", name: "[Shredder]", points: 10, maxPer: 2, wargearEach: ["[Shredder]"], removes: ["[Power Weapon]", "[Splinter Pistol]"] },
            {
                type: "grouped",
                user: "Dark Eldar",
                name: "ret Special Weapons",
                upgradeText: "Up to 2 Dark Eldar may take:",
                maxPer: 2,
                options: [
                    { name: "[Splinter Cannon]", user: "Dark Eldar", points: 10, wargearEach: ["[Splinter Cannon]"], removes: ["[Splinter Rifle]"] },
                    { name: "[Lascannon]", user: "Dark Eldar", points: 15, wargearEach: ["[Lascannon]"], removes: ["[Splinter Rifle]"] },
                ]
            },
        ],

    },
    {
        name: "Haemonculus",
        category: "HQ",
        unitComp: [
            {
                type: "corePool",
                compText: "Between 1 and 3 Haemonculi may be taken as a single HQ choice.",
                minTotal: 1,
                maxTotal: 3,
                entries: [
                    {
                        name: "Haemonculus",
                        basePoints: 35,
                        wargearEach: ["[Flamer]", "[Poisoned Blades]", "[Krak Grenades]"],

                    },

                ]
            },
        ],
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
    },

    {
        name: "Mandrakes",
        category: "Elites",
        unitLimit: 1,
        unitComp: [
            {
                type: "corePool",
                compText: "Between 5 and 10 Mandrakes.",
                minTotal: 5,
                maxTotal: 10,
                entries: [
                    {
                        name: "Mandrake",
                        basePoints: 15,
                        wargearEach: ["[Splinter Pistol]", "[Close Combat Weapon]"],
                    },

                ]
            }
        ],
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
    },

    {
        name: "Wyches",
        category: "Elites",
        unitComp: [
            {
                type: "corePool",
                compText: "Between 5 and 20 Wyches.",
                minTotal: 5,
                maxTotal: 20,
                entries: [
                    {
                        name: "Wych",
                        basePoints: 7,
                        min: 0,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Splinter Pistol]", "[Close Combat Weapon]"],
                    },
                    {
                        name: "Succubus",
                        compText: "One model may upgrade to:",
                        basePoints: 15,
                        min: 0,          // each entry can have its own min/max
                        max: 1,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Splinter Pistol]", "[Close Combat Weapon]"],
                    },
                ]
            },
        ],
        statline: [
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
            },
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
        ],

        upgrades: [
            {
                type: "grouped",
                upgradeText: "The Succubus may take one of:",
                user: "Succubus",
                name: "wych Special Weapons",
                maxPer: 1,
                options: [
                    { type: "single", name: "[Close Combat Weapon]", points: 1, wargearEach: ["[Close Combat Weapon]"] },
                    { type: "single", name: "[Power Weapon]", points: 10, wargearEach: ["[Power Weapon]"] },
                    { type: "single", name: "[Splinter Pistol]", points: 1, wargearEach: ["[Splinter Pistol]"] },
                    { type: "single", name: "[Splinter Rifle]", points: 2, wargearEach: ["[Splinter Rifle]"] },
                ]
            },
            { user: "Wych", type: "limited", name: "[Shredder]", points: 10, maxPer: 2, wargearEach: ["[Shredder]"], removes: ["[Splinter Pistol]", "[Close Combat Weapon]"] },
            { user: "Wych", type: "single", name: "[Raider]", points: 0, wargearMain: ["Raider [Dedicated Transport]"], removes: ["[Splinter Pistol]", "[Close Combat Weapon]"] },
        ],
    },

    {
        name: "Warrior Squad",
        category: "Troops",
        unitComp: [
            {
                type: "corePool",
                compText: "This unit consists of between 10 and 20 Dark Eldar warriors.",
                minTotal: 10,
                maxTotal: 20,
                entries: [
                    {
                        name: "Dark Eldar",
                        basePoints: 8,
                        min: 0,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Splinter Rifle]"]
                    },
                    {
                        name: "Sybarite",
                        compText: "One model may be:",
                        basePoints: 14,
                        min: 0,
                        max: 1,
                        wargearEach: ["[Splinter Rifle]"]
                    },

                ]
            },
        ], statline: [
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
            },
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
            }
        ],
        upgrades: [
            {
                type: "grouped",
                user: "Dark Eldar",
                name: "Warrior Special Weapons",
                maxPer: 2,
                options: [
                    { name: "[Splinter Cannon]", user: "Dark Eldar", points: 10, wargearEach: ["[Splinter Cannon]"], removes: ["[Splinter Rifle]"] },
                    { name: "[Lascannon]", user: "Dark Eldar", points: 20, wargearEach: ["[Lascannon]"], removes: ["[Splinter Rifle]"] },
                ]
            },
            { type: "single", user: "Sybarite", upgradeText: "The Sybarite may replace it's [Splinter Rifle] with a", name: "[Splinter Pistol] and [Close Combat Weapon]", points: 0, wargearEach: ["[Splinter Pistol]", "[Close Combat Weapon]"], removes: ["[Splinter Rifle]"] },

            {
                type: "grouped",
                upgradeText: "The Sybarite may take one of the following:",
                user: "Sybarite",
                name: "syb Special Weapons",
                maxPer: 1,
                options: [
                    { user: "Sybarite",type: "single", name: "[Close Combat Weapon]", points: 1, wargearEach: ["[Close Combat Weapon]"] },
                    { user: "Sybarite", type: "single", name: "[Power Weapon]", points: 10, wargearEach: ["[Power Weapon]"] },
                    { user: "Sybarite", type: "single", name: "[Splinter Pistol]", points: 1, wargearEach: ["[Splinter Pistol]"] },
                    { user: "Sybarite", type: "single", name: "[Splinter Rifle]", points: 2, wargearEach: ["[Splinter Rifle]"] },
                ]
            },

            { type: "single", name: "[Raider]", points: 0, wargearMain: ["Raider [Dedicated Transport]"] },

        ],

    },
    {
        name: "Raider Squad",
        category: "Troops",
        unitComp: [
            {
                type: "corePool",
                compText: "This unit consists of between 5 and 10 Dark Eldar warriors.",
                minTotal: 5,
                maxTotal: 10,
                entries: [
                    {
                        name: "Dark Eldar",
                        basePoints: 8,
                        min: 0,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Splinter Rifle]"]
                    },
                    {
                        name: "Sybarite",
                        compText: "One model may upgrde to:",
                        basePoints: 14,
                        min: 0,
                        max: 1,
                        wargearEach: ["[Splinter Rifle]"]
                    },
                ]
            },
        ],
        statline: [
            { name: "Sybarite", WS: 4, BS: 4, S: 3, T: 3, W: 1, I: 5, A: 2, Ld: 8, Sv: "5+", },
            { name: "Dark Eldar", WS: 4, BS: 4, S: 3, T: 3, W: 1, I: 5, A: 1, Ld: 8, Sv: "5+", },
        ],
        wargearMain: ["Raider [Dedicated Transport]"],
        upgrades: [
            { user: "Dark Eldar", type: "limited", name: "[Shredder]", points: 10, maxPer: 1, wargearEach: ["[Shredder]"], removes: ["[Splinter Rifle]"] },
            {
                type: "grouped",
                user: "Dark Eldar",
                name: "Raider Heavy Weapons",
                maxPer: 1,
                options: [
                    { name: "[Splinter Cannon]", user: "Dark Eldar", points: 10, wargearEach: ["[Splinter Cannon]"], removes: ["[Splinter Rifle]"] },
                    { name: "[Lascannon]", user: "Dark Eldar", points: 10, wargearEach: ["[Lascannon]"], removes: ["[Splinter Rifle]"] },
                ]
            },
 {
                type: "grouped",
                upgradeText: "The Sybarite may take one of the following:",
                user: "Sybarite",
                name: "Raider syb Special Weapons",
                maxPer: 1,
                options: [
                    { user: "Sybarite", type: "single", name: "[Close Combat Weapon]", points: 1, wargearEach: ["[Close Combat Weapon]"] },
                    { user: "Sybarite",type: "single", name: "[Power Weapon]", points: 10, wargearEach: ["[Power Weapon]"] },
                    { user: "Sybarite",type: "single", name: "[Splinter Pistol]", points: 1, wargearEach: ["[Splinter Pistol]"] },
                    { user: "Sybarite",type: "single", name: "[Splinter Rifle]", points: 2, wargearEach: ["[Splinter Rifle]"] },
                ]
            },


        ],

    },
    {
        name: "Raider",
        category: "Troops",
        unitComp: [
            {
                type: "corePool",
                compText: "One Raider.",
                minTotal: 1,
                maxTotal: 1,
                entries: [
                    {
                        name: "Raider",
                        basePoints: 55,
                        min: 0,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Lascannon]"],
                    },
                ]
            },
        ],

        modelType: "Vehicle",
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
        upgrades: [
            { type: "single", user: "Raider", name: "[Plasma Cannon]", points: 0, wargearEach: ["[Plasma Cannon]"], removes: ["[Lascannon]"] },
        ],

    },
    {
        name: "Reaver Jetbike Squad",
        category: "Fast Attack",
        unitComp: [
            {
                type: "corePool",
                compText: "The unit consists of between 3 and 10 models.",
                minTotal: 3,
                maxTotal: 10,
                entries: [
                    {
                        name: "Rider",
                        basePoints: 26,
                        min: 0,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Close combat Weapon]", "[Splinter Rifle]"]
                    },
                    {
                        name: "Succubus",
                        basePoints: 42,
                        min: 0,          // each entry can have its own min/max
                        max: 1,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Close combat Weapon]", "[Splinter Rifle]"]
                    },
                ]
            },
        ],
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
        wargearMain: ["[Eldar Jetbike]"],
        upgrades: [

            {
                type: "grouped",
                name: "wych Special Weapons",
                user: "Succubus",
                upgradeText: "The Succubus may take one of:",
                maxPer: 1,
                options: [
                    { type: "single", name: "[Close Combat Weapon]", points: 1, wargearEach: ["[Close Combat Weapon]"] },
                    { type: "single", name: "[Power Weapon]", points: 10, wargearEach: ["[Power Weapon]"] },
                    { type: "single", name: "[Splinter Pistol]", points: 1, wargearEach: ["[Splinter Pistol]"] },
                    { type: "single", name: "[Splinter Rifle]", points: 2, wargearEach: ["[Splinter Rifle]"] },
                ]
            },


            { type: "limited", upgradeText: "Up to one in three bikes may take:", user: "Rider", name: "[Shredder]", points: 15, maxPer: 3, wargearEach: ["[Shredder]"] },
        ],
    },

    {
        name: "Scourges",
        category: "Heavy Support",
        unitComp: [
            {
                type: "corePool",
                compText: "The unit consists of between 5 and 10 models.",
                minTotal: 5,
                maxTotal: 10,
                entries: [
                    {
                        name: "Scourge",
                        basePoints: 16,
                        min: 0,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Splinter Rifle]"]
                    },
                    {
                        name: "Sybarite",
                        basePoints: 22,
                        min: 0,          // each entry can have its own min/max
                        max: 1,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Splinter Rifle]"]
                    },
                ]
            },
        ],
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
        wargearMain: ["[Jump Pack]s"],
        upgrades: [
            {
                type: "grouped",
                name: "scourge heavy Weapons",
                maxPer: 4,
                options: [
                    { name: "[Splinter Cannon]", user: "Scourge", points: 20, wargearEach: ["[Splinter Cannon]"], removes: ["[Splinter Rifle]"] },
                    { name: "[Lascannon]", user: "Scourge", points: 25, wargearEach: ["[Lascannon]"], removes: ["[Splinter Rifle]"] },
                ]
            },

            { type: "single", user: "Sybarite", name: "[Splinter Pistol] and [Close Combat Weapon]", points: 0, wargearEach: ["[Splinter Pistol]", "[Close Combat Weapon]"], removes: ["[Splinter Rifle]"] },
            { type: "single", user: "Sybarite", name: "[Close Combat Weapon]", points: 1, wargearEach: ["[Close Combat Weapon]"] },
            { type: "single", user: "Sybarite", name: "[Power Weapon]", points: 10, wargearEach: ["[Power Weapon]"] },
            { type: "single", user: "Sybarite", name: "[Splinter Pistol]", points: 1, wargearEach: ["[Splinter Pistol]"] },
            { type: "single", user: "Sybarite", name: "[Splinter Rifle]", points: 2, wargearEach: ["[Splinter Rifle]"] },

            { type: "single", name: "[Raider]", points: 0, wargearMain: ["[Dedicated Transport]"] },

        ],

    },
    {
        name: "Ravager",
        category: "Heavy Support",
        unitComp: [
            {
                type: "corePool",
                compText: "One Ravager.",
                minTotal: 1,
                maxTotal: 1,
                entries: [
                    {
                        name: "Ravager",
                        basePoints: 105,
                        min: 0,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                    },
                ]
            },
        ],

        modelType: "Vehicle",
        isVehicle: true,
        statline: [
            {
                name: "Ravager",
                armourFront: 11,
                armourSide: 11,
                armourRear: 10,
                BS: 4,
            },
        ],
        rules: ["[Skimmer]", "[Fast]", "[Open-Topped]"],
        upgrades: [
             {
                type: "grouped",
                name: "rav options",
                maxPer: 3,
                options: [
                    { name: "[Plasma Cannon]", user: "Ravager", points: 0, wargearEach: ["[Plasma Cannon]"]},
                    { name: "[Lascannon]",  user: "Ravager", points: 0, wargearEach: ["[Lascannon]"]},
                ]
            },
        ],

    },


];
