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
        name: "Warp Spiders",
        category: "Elites",
        unitComp: [
            {
                type: "corePool",
                compText: "Between 5 and 10 Warp Spiders.",
                minTotal: 5,
                maxTotal: 10,
                entries: [
                    {
                        name: "Warp Spider",
                        basePoints: 18,
                        min: 5,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Death Spinner]"],
                    },
                ]
            },
            {
                // a *separate* add-on model that doesn’t count toward the 5–10 total
                type: "attachment",
                compText: "May be joined by an:",
                minTotal: 0,
                maxTotal: 1,
                entries: [
                    {
                        name: "Exarch",
                        basePoints: 30,
                        wargearEach: ["[Death Spinner]"]
                    }
                ]
            }
        ],
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
        wargearMain: ["[Jump Pack]"],
        upgrades: [
            { type: "single", upgradeText: "The Exarch may take a", user: "Exarch", name: "[Double Death Spinner]", points: 10, wargearEach: ["[Double Death Spinner]"], removes: ["[Death Spinner]"] },
        ]
    },

    {
        name: "Striking Scorpions",
        category: "Elites",
        unitComp: [
            {
                type: "corePool",
                compText: "Between 5 and 10 Striking Scorpions.",
                minTotal: 5,
                maxTotal: 10,
                entries: [
                    {
                        name: "Striking Scorpion",
                        basePoints: 18,
                        min: 5,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Shuriken Pistol]", "[Chainsword]"],
                    },
                ]
            },
            {
                // a *separate* add-on model that doesn’t count toward the 5–10 total
                type: "attachment",
                compText: "May be joined by an:",
                minTotal: 0,
                maxTotal: 1,
                entries: [
                    {
                        name: "Exarch",
                        basePoints: 30,
                        wargearEach: ["[Shuriken Pistol]", "[Chainsword]"]
                    }
                ]
            }
        ],
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
        wargearMain: ["[Mandiblaster]"],
        upgrades: [
            { type: "single", upgradeText: "The Exarch may take a", user: "Exarch", name: "[Power Fist]", points: 8, wargearEach: ["[Power Fist]"] },
            { upgradeText: "The unit may be mounted in a", type: "single", name: "Wave Serpent", wargearMain: "Wave Serpent [Dedicated Transport]" },

        ]
    },
    {
        name: "Howling Banshees",
        category: "Elites",
        unitComp: [
            {
                type: "corePool",
                compText: "Between 5 and 10 Howling Banshees.",
                minTotal: 5,
                maxTotal: 10,
                entries: [
                    {
                        name: "Banshee",
                        basePoints: 16,
                        min: 5,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Shuriken Pistol]", "[Power Weapon]"],
                    },
                ]
            },
            {
                // a *separate* add-on model that doesn’t count toward the 5–10 total
                type: "attachment",
                compText: "May be joined by an:",
                minTotal: 0,
                maxTotal: 1,
                entries: [
                    {
                        name: "Exarch",
                        basePoints: 32,
                        wargearEach: ["[Shuriken Pistol]", "[Power Weapon]"]
                    }
                ]
            }
        ],
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
        wargearMain: ["[Banshee Mask]"],
        upgrades: [
            { upgradeText: "The unit may be mounted in a", type: "single", name: "Wave Serpent", wargearMain: "Wave Serpent [Dedicated Transport]" },
        ]
    },
    {
        name: "Fire Dragons",
        category: "Elites",
        unitComp: [
            {
                type: "corePool",
                compText: "Between 5 and 10 Warp Spiders.",
                minTotal: 5,
                maxTotal: 10,
                entries: [
                    {
                        name: "Fire Dragon",
                        basePoints: 17,
                        min: 5,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Fusion Gun]", "[Melta Bombs]"],
                    },
                ]
            },
            {
                // a *separate* add-on model that doesn’t count toward the 5–10 total
                type: "attachment",
                compText: "May be joined by an:",
                minTotal: 0,
                maxTotal: 1,
                entries: [
                    {
                        name: "Exarch",
                        basePoints: 28,
                        wargearEach: ["[Fusion Gun]", "[Melta Bombs]"]
                    }
                ]
            }
        ],
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
            { type: "single", upgradeText: "The Exarch may take a", user: "Exarch", upgradeText: "May exchange fusion gun for", type: "single", name: "[Meltagun]", points: 6, wargear: ["[Meltagun]"] },
            { upgradeText: "The unit may be mounted in a", type: "single", name: "Wave Serpent", wargearMain: "Wave Serpent [Dedicated Transport]" },
        ]
    },

    {
        name: "Wraithguard",
        category: "Elites",
        unitComp: [
            {
                type: "corePool",
                compText: "Between 5 and 10 Wraithguard.",
                minTotal: 5,
                maxTotal: 10,
                entries: [
                    {
                        name: "Wraithguard",
                        basePoints: 40,
                        min: 5,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Wraithcannon]"],
                    },
                ]
            },
        ],
        statline: [
            {
                name: "Wraithguard",
                WS: 4,
                BS: 4,
                S: 5,
                T: 5,
                W: 1,
                I: 4,
                A: 1,
                Ld: 10,
                Sv: "3+",
            },
        ],
        upgrades: [
            { upgradeText: "If the unit numbers 5 Wraithguard and up to 1 Warlock it may be mounted in a", type: "single", name: "Wave Serpent", wargearMain: ["Wave Serpent [Dedicated Transport]"] },
        ],

    },
    {
        name: "Dire Avengers",
        category: "Troops",
        unitComp: [
            {
                type: "corePool",
                compText: "Between 5 and 10 Dire Avengers.",
                minTotal: 5,
                maxTotal: 10,
                entries: [
                    {
                        name: "Dire Avenger",
                        basePoints: 12,
                        min: 5,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Shuriken Catapult]"],
                    },
                ]
            },
            {
                // a *separate* add-on model that doesn’t count toward the 5–10 total
                type: "attachment",
                compText: "May be joined by an:",
                minTotal: 0,
                maxTotal: 1,
                entries: [
                    {
                        name: "Exarch",
                        basePoints: 26,
                        wargearEach: ["[Shuriken Catapult]"]
                    }
                ]
            }
        ],
        statline: [
            {
                name: "Dire Avenger",
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
        upgrades: [
            { type: "single", upgradeText: "The Exarch may take a", user: "Exarch", name: "[Shuriken Pistol] and [Power Weapon]", points: 3, wargearEach: ["[[Shuriken Pistol]", "[Power Weapon]"] },
            { upgradeText: "The unit may be mounted in a", type: "single", name: "Wave Serpent", wargearMain: ["Wave Serpent [Dedicated Transport]"] },

        ],
    },
    {
        name: "Guardian Defender Squad",
        category: "Troops",
        unitComp: [
            {
                type: "corePool",
                compText: "Between 5 and 20 Guardian Defenders.",
                minTotal: 5,
                maxTotal: 20,
                entries: [
                    {
                        name: "Guardian Defender",
                        basePoints: 8,
                        min: 5,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Shuriken Catapult]"],
                    },
                ]
            },
        ],
        statline: [
            {
                name: "Guardian Defender",
                WS: 3,
                BS: 3,
                S: 3,
                T: 3,
                W: 1,
                I: 4,
                A: 1,
                Ld: 8,
                Sv: "5+",
            },
        ],
        upgrades: [
            {
                type: "grouped",
                name: "guardian grav platform",
                maxPer: 1,
                upgradeText: `May be joined by a heavy weapons platform.
                
                The heavy weapons platform has two Guardians as crew.If one crewman is killed the platform operates as normal, if both crew are killed the platform is useless(the platform itself can't be hit). The heavy weapon platform can move and fire.`,
                options: [
                    { type: "single", name: "[Shuriken Cannon]", points: 35, wargearMain: ["[Shuriken Cannon]"] },
                    { type: "single", name: "[Scatter Laser]", points: 40, wargearMain: ["[Scatter Laser]"] },
                    { type: "single", name: "[Missile Launcher]", points: 45, wargearMain: ["[Missile Launcher]"] },
                    { type: "single", name: "[Lascannon]", points: 50, wargearMain: ["[Lascannon]"] },
                    { type: "single", name: "[Plasma Cannon]", points: 50, wargearMain: ["[Plasma Cannon]"] },
                ]
            },
            { user: "Guardian Defender", type: "perModel", name: "[Frag Grenades]", points: 1, wargearMain: ["[Frag Grenades]"] },
            { upgradeText: "Unless accompanied by a Weapons Platform, the unit may be mounted in a", type: "single", name: "Wave Serpent", wargearMain: ["Wave Serpent [Dedicated Transport]"] },

        ],
    },
    {
        name: "Guardian Storm Squad",
        category: "Troops",
        unitComp: [
            {
                type: "corePool",
                compText: "Between 5 and 20 Guardians.",
                minTotal: 5,
                maxTotal: 20,
                entries: [
                    {
                        name: "Guardian Storm",
                        basePoints: 8,
                        min: 5,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Shuriken Pistol]", "[Close Combat Weapon]"],
                    },
                ]
            },
        ],
        statline: [
            {
                name: "Guardian Storm",
                WS: 3,
                BS: 3,
                S: 3,
                T: 3,
                W: 1,
                I: 4,
                A: 1,
                Ld: 8,
                Sv: "5+",
            },
        ],
        upgrades: [
            { type: "perModel", name: "[Frag Grenades]", points: 1, wargearMain: ["[Frag Grenades]"] },
            { type: "perModel", name: "[Krak Grenades]", points: 2, wargearMain: ["[Krak Grenades]"] },
            { type: "perModel", name: "[Melta Bombs]", points: 5, wargearMain: ["[Melta Bombs]"] },
            { upgradeText: "If there are 10 or fewer models, the unit may be mounted in a", type: "single", name: "Wave Serpent", wargearMain: ["Wave Serpent [Dedicated Transport]"] },
        ],
    },
    {
        name: "Rangers",
        category: "Troops",
        unitComp: [
            {
                type: "corePool",
                compText: "Between 3 and 10 Guardians.",
                minTotal: 3,
                maxTotal: 10,
                entries: [
                    {
                        name: "Ranger",
                        basePoints: 13,
                        min: 0,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Eldar Long Rifle]", "[Shuriken Pistol]"],
                    },
                ]
            },
        ],
        statline: [
            {
                name: "Ranger",
                WS: 3,
                BS: 4,
                S: 3,
                T: 3,
                W: 1,
                I: 4,
                A: 1,
                Ld: 8,
                Sv: "5+",
            },
        ],
        rules: ["[Infiltrators]"],
    },





    {
        name: "Wave Serpent",
        category: "Troops",
        modelType: "Vehicle",
        ignoreSlot: true,
        isVehicle: true,
         unitComp: [
            {
                type: "corePool",
                compText: "One Wave Serpent.",
                minTotal: 1,
                maxTotal: 1,
                entries: [
                    {
                        name: "Wave Serpent",
                        basePoints: 110,
                        min: 0,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Twin-Linked] [Shuriken Catapult]", "[Twin-Linked] [Shuriken Cannon]"],
                    },
                ]
            },
        ],
        statline: [
            {
                name: "Wave Serpent",
                armourFront: 14,
                armourSide: 14,
                armourRear: 10,
                BS: 3,
            },
        ],
        rules: ["[Transport]"],
        upgrades: [
            { upgradeText: `May switch Twin-Linked Shuriken Catapult for`, user: "Wave Serpent", type: "single", name: "[Shuriken Cannon]", points: 20, wargearEach: ["[Shuriken Cannon]"], removes: ["[Twin-Linked] [Shuriken Catapult]"] },
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
