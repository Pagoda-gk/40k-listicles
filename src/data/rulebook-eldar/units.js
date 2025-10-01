import ReactMarkdown from "react-markdown";

export const units = [
    {
        name: "Avatar",
        category: "HQ",
        modelType: "[Monstrous Creature]",
        unitLimit: 1,
        unitComp: [
            {
                type: "singleVariant",
                compText: "1 Avatar.",
                entries: [
                    {
                        name: "Avatar",
                        basePoints: 80,
                        wargearEach: ["[The Wailing Doom]"]
                    },
                ]
            },
        ],
        statline: [
            {
                name: "Avatar",
                WS: 10,
                BS: 0,
                S: 6,
                T: 6,
                W: 4,
                I: 5,
                A: 3,
                Ld: 10,
                Sv: "5++",
            },
        ],
        rules: ["[Independent Character]", "[Fearless]"],
    },


    {
        name: "Phoenix Lord",
        category: "HQ",
        unitComp: [
            {
                type: "singleVariant",
                compText: "Phoneix Lord of one of the following types:",
                entries: [
                    {
                        name: "Dark Reaper",
                        basePoints: 75,
                        wargearEach: ["[Shuriken Pistol]", "[Shuriken Cannon]", "[Power Weapon]"]
                    },
                    {
                        name: "Howling Banshee",
                        basePoints: 70,
                        wargearEach: ["[Shuriken Pistol]", "[Banshee Mask]", "[Power Weapon]", "[Silent Death]"]
                    },
                    {
                        name: "Striking Scorpion",
                        basePoints: 73,
                        wargearEach: ["[Shuriken Pistol]", "[Mandiblaster]", "[Chainsword]", "[Power Fist]"]
                    },
                    {
                        name: "Swooping Hawk",
                        basePoints: 85,
                        wargearEach: ["[Shuriken Pistol]", "[Swooping Hawk Wings]", "2x [Power Weapons]"]
                    },
                    {
                        name: "Fire Dragon",
                        basePoints: 72,
                        wargearEach: ["[Shuriken Pistol]", "[Power Weapon]", "[Meltagun]"]
                    },
                    {
                        name: "Dire Avenger",
                        basePoints: 63,
                        wargearEach: ["[Shuriken Pistol]", "[Twin-Linked] [Shuriken Catapult]", "[Power Weapon]"]
                    },
                ]
            },
        ],
        statline: [
            {
                name: "Phoenix Lord",
                WS: 6,
                BS: 6,
                S: 4,
                T: 4,
                W: 3,
                I: 7,
                A: 3,
                Ld: 10,
                Sv: "3+",
            },
        ],
        rules: ["[Independent Character]"],
        upgrades: [
        ],

    },
    {
        name: "Farseer",
        category: "HQ",
        unitComp: [
            {
                type: "corePool",
                compText: "One Farseer. The Farseer may be joined by up to 5 Warlocks, who may not move on their own. They must either remain in a unit with the Farseer, or they may be assigned to join Wraithguard or Guardian squads, no more than one Warlock per unit. If assigned to a Jetbike Squad then the Warlock must be mounted on a Jetbike.",
                minTotal: 1,
                maxTotal: 6,
                entries: [
                    {
                        name: "Farseer",
                        basePoints: 65,
                        min: 1,          // each entry can have its own min/max
                        max: 1,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Shuriken Pistol]", "[Witchblade]"],
                    },
                    {
                        name: "Warlock",
                        basePoints: 26,
                        min: 0,          // each entry can have its own min/max
                        max: 5,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Shuriken Pistol]", "[Witchblade]"],
                    },
                    {
                        name: "Jetbike Warlock",
                        basePoints: 48,
                        min: 0,          // each entry can have its own min/max
                        max: 5,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Shuriken Pistol]", "[Witchblade]", "[Eldar Jetbike]", "[Twin-Linked] [Shuriken Catapult]"],
                    },
                ]
            },
        ],
        statline: [
            {
                name: "Farseer",
                WS: 5,
                BS: 5,
                S: 3,
                T: 4,
                W: 3,
                I: 5,
                A: 1,
                Ld: 10,
                Sv: "4++",
            },
            {
                name: "Warlock",
                WS: 4,
                BS: 4,
                S: 3,
                T: 3,
                W: 1,
                I: 4,
                A: 1,
                Ld: 8,
                Sv: "4++",
            },
            {
                name: "Jetbike Warlock",
                WS: 4,
                BS: 4,
                S: 3,
                T: 4,
                W: 1,
                I: 4,
                A: 1,
                Ld: 8,
                Sv: "3+/4++",
            },

        ],
        rules: ["[Independent Character] (unless accompanied by Warlocks)", "[Psychic Power - Runesight]", "[Warlock]"],
        upgrades: [
            { upgradeText: "The unit may be mounted in a", type: "single", name: "[Wave Serpent]", wargearMain: ["Wave Serpent [Dedicated Transport]"] },
        ]
    },
    {
        name: "Warp Spider",
        category: "Elites",
        basePoints: 18,
        minModels: 5,
        maxModels: 10,
        statline: [
            {
                name: "Warp Spider",
                WS: 4,
                BS: 4,
                S: 3,
                T: 3,
                W: 1,
                I: 5,
                A: 1,
                Ld: 9,
                Sv: "3+",
            },
            {
                name: "Exarch",
                WS: 5,
                BS: 5,
                S: 3,
                T: 3,
                W: 1,
                I: 6,
                A: 2,
                Ld: 9,
                Sv: "3+",
            },
        ],
        wargear: ["[Death Spinner]", "[Jump Pack]"],
        upgrades: [
            {
                type: "single", name: "[Exarch]", points: 30,
                children: [
                    { type: "single", name: "[Double Death Spinner]", points: 10, wargear: ["[Double Death Spinner]"] },
                ],
            },

        ]
    },

    {
        name: "Striking Scorpions",
        category: "Elites",
        basePoints: 18,
        minModels: 5,
        maxModels: 10,
        statline: [
            {
                name: "Scorpion",
                WS: 4,
                BS: 4,
                S: 4,
                T: 3,
                W: 1,
                I: 5,
                A: 1,
                Ld: 9,
                Sv: "3+",
            },
            {
                name: "Exarch",
                WS: 5,
                BS: 5,
                S: 4,
                T: 3,
                W: 1,
                I: 6,
                A: 2,
                Ld: 9,
                Sv: "3+",
            },
        ],
        wargear: ["[Shuriken Pistol]", "[Chainsword]", "[Mandiblaster]"],
        upgrades: [
            {
                type: "single", name: "[Exarch]", points: 30,
                children: [
                    { type: "single", name: "[Power Fist]", points: 8, wargear: ["[Power Fist]"], statlineModifiers: { S: 9 } },
                ],
            },
            { upgradeText: "The unit may be mounted in a", type: "single", name: "[Wave Serpent]" },
        ]
    },
    {
        name: "Howling Banshees",
        category: "Elites",
        basePoints: 16,
        minModels: 5,
        maxModels: 10,
        statline: [
            {
                name: "Banshee",
                WS: 4,
                BS: 4,
                S: 3,
                T: 3,
                W: 1,
                I: 5,
                A: 1,
                Ld: 9,
                Sv: "4+",
            },
            {
                name: "Exarch",
                WS: 5,
                BS: 5,
                S: 3,
                T: 3,
                W: 1,
                I: 6,
                A: 2,
                Ld: 9,
                Sv: "3+",
            },
        ],
        wargear: ["[Shuriken Pistol]", "[Power Weapon]", "[Banshee Mask]"],
        upgrades: [
            {
                type: "single", name: "[Exarch]", points: 32,
                children: [
                    { type: "single", name: "[Power Fist]", points: 8, wargear: ["[Power Fist]"] },
                ],
            },
            { upgradeText: "The unit may be mounted in a", type: "single", name: "[Wave Serpent]" },


        ]
    },
    {
        name: "Fire Dragons",
        category: "Elites",
        basePoints: 17,
        minModels: 5,
        maxModels: 10,
        statline: [
            {
                name: "Fire Dragon",
                WS: 4,
                BS: 4,
                S: 3,
                T: 3,
                W: 1,
                I: 5,
                A: 1,
                Ld: 9,
                Sv: "4+",
            },
            {
                name: "Exarch",
                WS: 5,
                BS: 5,
                S: 3,
                T: 3,
                W: 1,
                I: 6,
                A: 2,
                Ld: 9,
                Sv: "3+",
            },
        ],
        wargear: ["[Fusion Gun]", "[Melta Bombs]"],
        upgrades: [
            {
                type: "single", name: "[Exarch]", points: 28,
                children: [
                    { upgradeText: "May exchange fusion gun for", type: "single", name: "[Meltagun]", points: 6, wargear: ["[Meltagun]"] },
                ],
            },
            { upgradeText: "The unit may be mounted in a", type: "single", name: "[Wave Serpent]" },


        ]
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
