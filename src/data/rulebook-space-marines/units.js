import ReactMarkdown from "react-markdown";

export const units = [
    {
        name: "Space Marine Hero",
        category: "HQ",
        modelType: "[Infantry]",
        unitComp: [
            {
                type: "singleVariant",
                compText: "May take a Leader for 30 points, a Commander for 45 points or a Force Commander for 60 points. If your army contains a squad of Terminators, may take [Terminator Armour] for +15 (Leader), +20 (commander) or +30 (Force Commander)",
                entries: [
                    {
                        name: "Leader",
                        basePoints: 30,
                        wargearEach: ["[Bolt Pistol]"],

                    },
                    {
                        name: "Commander",
                        basePoints: 45,
                        wargearEach: ["[Bolt Pistol]"],

                    },
                    {
                        name: "Force Commander",
                        basePoints: 60,
                        wargearEach: ["[Bolt Pistol]"],

                    },
                    {
                        name: "Terminator Leader",
                        basePoints: 45,
                        wargearEach: ["[Terminator Armour]", "[Storm Bolter]", "[Power Fist]"],

                    },
                    {
                        name: "Terminator Commander",
                        basePoints: 65,
                        wargearEach: ["[Terminator Armour]", "[Storm Bolter]", "[Power Fist]"],

                    },
                    {
                        name: "Terminator Force Commander",
                        basePoints: 90,
                        wargearEach: ["[Terminator Armour]", "[Storm Bolter]", "[Power Fist]"],

                    },
                ]
            },
        ],
        statline: [
            {
                name: "Leader",
                WS: 4, BS: 4, S: 4, T: 4, W: 1, I: 4, A: 2, Ld: 9, Sv: "3+",
            },
            {
                name: "Commander",
                WS: 5, BS: 5, S: 4, T: 4, W: 2, I: 5, A: 3, Ld: 9, Sv: "3+",
            },
            {
                name: "Force Commander",
                WS: 5, BS: 5, S: 4, T: 4, W: 3, I: 5, A: 3, Ld: 10, Sv: "3+",
            },
            {
                name: "Terminator Leader",
                WS: 4, BS: 4, S: 4, T: 4, W: 1, I: 4, A: 2, Ld: 9, Sv: "2+",
            },
            {
                name: "Terminator Commander",
                WS: 5, BS: 5, S: 4, T: 4, W: 2, I: 5, A: 3, Ld: 9, Sv: "2+",
            },
            {
                name: "Terminator Force Commander",
                WS: 5, BS: 5, S: 4, T: 4, W: 3, I: 5, A: 3, Ld: 10, Sv: "2+",
            }
        ],
        rules: ["[Independent Character]", "[Command Squad Unit]"],
        upgrades: [
            {
                type: "grouped",
                name: "hero Special Weapons",
                maxPer: 2,
                options: [
                    { type: "single", name: "[Close Combat Weapon]", points: 1, wargearMain: ["[Close Combat Weapon]"] },
                    { type: "single", name: "[Power Weapon]", points: 15, wargearMain: ["[Power Weapon]"] },
                    { type: "single", name: "[Power Fist]", points: 25, wargearMain: ["[Power Fist]"] },
                    { type: "single", name: "[Bolter]", points: 2, wargearMain: ["[Bolter]"] },
                    { type: "single", name: "[Plasma Pistol]", points: 15, wargearMain: ["[Plasma Pistol]"] },
                    { type: "single", name: "[Storm Bolter]", points: 5, wargearMain: ["[Storm Bolter]"] },
                    { type: "single", name: "[Combi-flamer]", points: 10, wargearMain: ["[Combi-flamer]"] },
                    { type: "single", name: "[Combi-melta]", points: 15, wargearMain: ["[Combi-melta]"] },
                    { type: "single", name: "[Combi-plasma]", points: 15, wargearMain: ["[Combi-plasma]"] },
                    { type: "single", name: "[Frag Grenades]", points: 3, wargearMain: ["[Frag Grenades]"] },
                    { type: "single", name: "[Krak Grenades]", points: 3, wargearMain: ["[Krak Grenades]"] },
                ]
            }
        ],

    },
    {
        name: "Librarian",
        category: "HQ",
        modelType: "[Infantry]",
        unitComp: [
            {
                type: "singleVariant",
                compText: "1 Librarian. If the army contains a squad of Terminators, this model may take [Terminator Armour] for +30 points.",
                entries: [
                    {
                        name: "Librarian",
                        basePoints: 70,
                        wargearEach: ["[Bolt Pistol]", "[Force Weapon]"],

                    },
                    {
                        name: "Terminator Librarian",
                        basePoints: 100,
                        wargearEach: ["[Terminator Armour]", "[Storm Bolter]", "[Force Weapon]"],

                    },
                ],
            },
        ],
        statline: [
            {
                name: "Librarian",
                WS: 5,
                BS: 5,
                S: 4,
                T: 4,
                W: 2,
                I: 5,
                A: 3,
                Ld: 9,
                Sv: "3+",

            },
            {
                name: "Terminator Librarian",
                WS: 5,
                BS: 5,
                S: 4,
                T: 4,
                W: 2,
                I: 5,
                A: 3,
                Ld: 9,
                Sv: "2+",

            },
        ],
        rules: ["[Independent Character]", "[Command Squad]", "[Psychic Power - Smite]", "[Psychic Power - Storm of Destruction]"],
        wargear: ["[Bolt Pistol]", "Force Weapon (counts as [Power Weapon])"],
        upgrades: [

            { type: "single", name: "[Close Combat Weapon]", points: 1, wargearMain: ["[Close Combat Weapon]"] },
            { type: "single", name: "[Power Weapon]", points: 15, wargearMain: ["[Power Weapon]"] },
            { type: "single", name: "[Power Fist]", points: 25, wargearMain: ["[Power Fist]"] },
            { type: "single", name: "[Bolter]", points: 2, wargearMain: ["[Bolter]"] },
            { type: "single", name: "[Plasma Pistol]", points: 15, wargearMain: ["[Plasma Pistol]"] },
            { type: "single", name: "[Storm Bolter]", points: 5, wargearMain: ["[Storm Bolter]"] },
            { type: "single", name: "[Combi-flamer]", points: 10, wargearMain: ["[Combi-flamer]"] },
            { type: "single", name: "[Combi-melta]", points: 15, wargearMain: ["[Combi-melta]"] },
            { type: "single", name: "[Combi-plasma]", points: 15, wargearMain: ["[Combi-plasma]"] },
            { type: "single", name: "[Frag Grenades]", points: 3, wargearMain: ["[Frag Grenades]"] },
            { type: "single", name: "[Krak Grenades]", points: 3, wargearMain: ["[Krak Grenades]"] }
        ],

    },

    {
        name: "Chaplain",
        category: "HQ",
        modelType: "[Infantry]",
        unitComp: [
            {
                type: "singleVariant",
                compText: "1 Chaplain. If the army contains a squad of Terminators, this model may take [Terminator Armour] for +30 points. If the army contains a squad of Space Marine Bikes, this model may take [Space Marine Bike] for +25 points.",
                entries: [
                    {
                        name: "Chaplain",
                        basePoints: 70,
                        wargearEach: ["[Bolt Pistol]", "[Rosarius]", "[Crozius Arcanum]"],

                    },
                    {
                        name: "Terminator Chaplain",
                        basePoints: 100,
                        wargearEach: ["[Terminator Armour]", "[Storm Bolter]", "[Rosarius]", "[Crozius Arcanum]"],

                    },
                    {
                        name: "Bike Chaplain",
                        basePoints: 95,
                        wargearEach: ["[Space Marine Bike]", "[Twin-Linked] [Bolter]", "[Rosarius]", "[Crozius Arcanum]"],

                    }
                ],
            },
        ],
        statline: [
            {
                name: "Chaplain",
                WS: 5,
                BS: 5,
                S: 4,
                T: 4,
                W: 2,
                I: 5,
                A: 3,
                Ld: 9,
                Sv: "3+/4++",
            },
            {
                name: "Terminator Chaplain",
                WS: 5,
                BS: 5,
                S: 4,
                T: 4,
                W: 2,
                I: 5,
                A: 3,
                Ld: 9,
                Sv: "2+/4++",
            },
            {
                name: "Bike Chaplain",
                WS: 5,
                BS: 5,
                S: 4,
                T: 5,
                W: 2,
                I: 5,
                A: 3,
                Ld: 9,
                Sv: "3+/4++",
            },
        ],
        rules: ["[Independent Character]", "[Command Squad]"],
        upgrades: [
            { type: "single", name: "[Close Combat Weapon]", points: 1, wargearMain: ["[Close Combat Weapon]"] },
            { type: "single", name: "[Power Weapon]", points: 15, wargearMain: ["[Power Weapon]"] },
            { type: "single", name: "[Power Fist]", points: 25, wargearMain: ["[Power Fist]"] },
            { type: "single", name: "[Bolter]", points: 2, wargearMain: ["[Bolter]"] },
            { type: "single", name: "[Plasma Pistol]", points: 15, wargearMain: ["[Plasma Pistol]"] },
            { type: "single", name: "[Storm Bolter]", points: 5, wargearMain: ["[Storm Bolter]"] },
            { type: "single", name: "[Combi-flamer]", points: 10, wargearMain: ["[Combi-flamer]"] },
            { type: "single", name: "[Combi-melta]", points: 15, wargearMain: ["[Combi-melta]"] },
            { type: "single", name: "[Combi-plasma]", points: 15, wargearMain: ["[Combi-plasma]"] },
            { type: "single", name: "[Frag Grenades]", points: 3, wargearMain: ["[Frag Grenades]"] },
            { type: "single", name: "[Krak Grenades]", points: 3, wargearMain: ["[Krak Grenades]"] }
        ],
    },


    {
        name: "Command Squad",
        category: "HQ",
        modelType: "[Infantry]",
        unitComp: [
            {
                type: "corePool",
                compText: `One Space Marine Sergeant and between 4 and 9 Space Marines. The Sergeant may be upgraded to a Veteran Sergeant for +15 points.
                
                One model may be upgraded to an Apothecary for +20 points.
                
                One model may be upgraded to a Techmarine for +18 points.
                
                One model may be upgraded to a Standard Bearer for +18 points.`,
                minTotal: 5,
                maxTotal: 10,
                entries: [
                    {
                        name: "Space Marine",
                        basePoints: 15,
                        min: 0,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Bolter]"]
                    },
                    {
                        name: "Veteran Sergeant",
                        basePoints: 30,
                        min: 0,
                        max: 1,
                        wargearEach: ["[Bolter]"]
                    },
                    {
                        name: "Apothecary",
                        basePoints: 35,
                        min: 0,
                        max: 1,
                        wargearEach: ["[Bolter]", "[Apothecary]"]
                    },
                    {
                        name: "Techmarine",
                        basePoints: 33,
                        min: 0,
                        max: 1,
                        wargearEach: ["[Bolter]", "[Techmarine]"]
                    },
                    {
                        name: "Standard Bearer",
                        basePoints: 33,
                        min: 0,
                        max: 1,
                        wargearEach: ["[Bolter]", "[Standard]"]
                    }
                ]
            },

        ],
        ignoreSlot: true,
        statline: [
            {
                name: "Space Marine",
                WS: 4,
                BS: 4,
                S: 4,
                T: 4,
                W: 1,
                I: 4,
                A: 1,
                Ld: 8,
                Sv: "3+",
            },
            {
                name: "Veteran Sergeant",
                WS: 4,
                BS: 4,
                S: 4,
                T: 4,
                W: 1,
                I: 4,
                A: 2,
                Ld: 9,
                Sv: "3+",
            },
            {
                name: "Apothecary",
                WS: 4,
                BS: 4,
                S: 4,
                T: 4,
                W: 1,
                I: 4,
                A: 1,
                Ld: 8,
                Sv: "3+",
            },
            {
                name: "Techmarine",
                WS: 4,
                BS: 4,
                S: 4,
                T: 4,
                W: 1,
                I: 4,
                A: 1,
                Ld: 8,
                Sv: "3+",
            },
            {
                name: "Standard Bearer",
                WS: 4,
                BS: 4,
                S: 4,
                T: 4,
                W: 1,
                I: 4,
                A: 1,
                Ld: 8,
                Sv: "3+",
            },

        ],
        rules: [''],
        upgrades: [
            { type: "limited", name: "Sergeant [Bolt Pistol] and [Close Combat Weapon]", points: 0, wargearEach: ["[Bolt Pistol]", "[Close Combat Weapon]"], removes: ["[Bolter]"], maxPer: 1 },
            { type: "limited", user: "Apothecary", name: "Apothecary [Bolt Pistol] and [Close Combat Weapon]", points: 0, wargearEach: ["[Bolt Pistol] and [Close Combat Weapon]"], removes: ["[Bolter]"], maxPer: 1 },
            { type: "limited", user: "Techmarine", name: "Techmarine [Bolt Pistol] and [Close Combat Weapon]", points: 0, wargearEach: ["[Bolt Pistol] and [Close Combat Weapon]"], removes: ["[Bolter]"], maxPer: 1 },
            { type: "limited", upgradeText: "The Techmarine may take", user: "Techmarine", name: "[Servo Arm]", points: 10, wargear: ["[Servo Arm]"], maxPer: 1 },
            { type: "limited", user: "Standar Bearer", name: "Standard Bearer [Bolt Pistol] and [Close Combat Weapon]", points: 0, wargearEach: ["[Bolt Pistol] and [Close Combat Weapon]"], removes: ["[Bolter]"], maxPer: 1 },
            {
                type: "grouped",
                upgradeText: "The Veteran Sergeant may take one of:",
                user: "Veteran Sergeant",
                name: "vet serg command sq Weapons",
                maxPer: 1,
                options: [
                    { type: "single", user: "Veteran Sergeant", name: "[Close Combat Weapon]", points: 1, wargearEach: ["[Close Combat Weapon]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Power Weapon]", points: 15, wargearEach: ["[Power Weapon]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Power Fist]", points: 25, wargearEach: ["[Power Fist]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Bolter]", points: 2, wargearEach: ["[Bolter]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Plasma Pistol]", points: 15, wargearEach: ["[Plasma Pistol]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Storm Bolter]", points: 5, wargearEach: ["[Storm Bolter]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Combi-flamer]", points: 10, wargearEach: ["[Combi-flamer]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Combi-melta]", points: 15, wargearEach: ["[Combi-melta]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Combi-plasma]", points: 15, wargearEach: ["[Combi-plasma]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Frag Grenades]", points: 1, wargearEach: ["[Frag Grenades]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Krak Grenades]", points: 2, wargearEach: ["[Krak Grenades]"] },
                ]
            },
            {
                type: "grouped",
                name: "Command Special Weapons",
                user: "Space Marine",
                maxPer: 2,
                options: [
                    { name: "Missile Launcher", user: "Space Marine", points: 20, wargearEach: ["[Missile Launcher]"], removes: ["[Bolter]"] },
                    { name: "Heavy Bolter", user: "Space Marine", points: 15, wargearEach: ["[Heavy Bolter]"], removes: ["[Bolter]"] },
                    { name: "Lascannon", user: "Space Marine", points: 35, wargearEach: ["[Lascannon]"], removes: ["[Bolter]"] },
                    { name: "Flamer", user: "Space Marine", points: 3, wargearEach: ["Flamer]"], removes: ["[Bolter]"] },
                    { name: "Plasma Gun", user: "Space Marine", points: 6, wargearEach: ["Plasma Gun]"], removes: ["[Bolter]"] },
                    { name: "Meltagun", user: "Space Marine", points: 10, wargearEach: ["[Meltagun]"], removes: ["[Bolter]"] }
                ]
            },
            { type: "perModel", name: "[Frag Grenades]", points: 1, wargearMain: ["Frag Grenades"] },
            { type: "perModel", name: "[Krak Grenades]", points: 2, wargearMain: ["Krak Grenades"] },
            { type: "single", name: "Rhino [Dedicated Transport]", points: 0, wargearMain: ["Rhino [Dedicated Transport]"] },
            { type: "single", name: "Razorback [Dedicated Transport]", points: 0, wargearMain: ["Razorback [Dedicated Transport]"] },
        ],
    },

    {
        name: "Terminator Squad",
        category: "Elites",
        modelType: "[Infantry]",
        unitComp: [
            {
                type: "corePool",
                compText: "1 Sergeant and between 5 and 10 Terminators.",
                minTotal: 5,
                maxTotal: 10,
                entries: [
                    {
                        name: "Terminator",
                        basePoints: 42,
                        min: 4,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Power Fist]", "[Storm Bolter]"],
                    },
                    {
                        name: "Sergeant",
                        basePoints: 42,
                        min: 1,          // each entry can have its own min/max
                        max: 1,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Power Sword]", "[Storm Bolter]"],
                    },
                ]
            },
        ],
        statline: [
            {
                name: "Terminator",
                WS: 4,
                BS: 4,
                S: 4,
                T: 4,
                W: 1,
                I: 4,
                A: 2,
                Ld: 9,
                Sv: "2+",
            },

        ],
        rules: ["[Deep Strike]"],
        wargearMain: ["[Terminator Armour]"],
        upgrades: [
            {
                type: "grouped",
                name: "Term Special Weapons",
                user: "Terminator",
                maxPer: 2,
                options: [
                    { name: "[Assault Cannon]", user: "Terminator", points: 20, wargearEach: ["[Assault Cannon]"], removes: ["[Storm Bolter]"] },
                    { name: "[Heavy Flamer]", user: "Terminator", points: 10, wargearEach: ["[Heavy Flamer]"], removes: ["[Storm Bolter]"] },
                    { name: "[Cyclone Missile Launcher]", user: "Terminator", points: 20, wargearEach: ["[Cyclone Missile Launcher]"], removes: ["[Storm Bolter]"] },
                ]
            },


        ],

    },
    {
        name: "Terminator Assault Squad",
        category: "Elites",
        modelType: "[Infantry]",
        unitComp: [
            {
                type: "corePool",
                compText: "1 Sergeant and between 5 and 10 Terminators.",
                minTotal: 5,
                maxTotal: 10,
                entries: [
                    {
                        name: "Terminator",
                        basePoints: 42,
                        min: 4,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Thunder Hammer]", "[Storm Shield]"],
                    },
                    {
                        name: "Sergeant",
                        basePoints: 42,
                        min: 1,          // each entry can have its own min/max
                        max: 1,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Power Sword]", "[Storm Bolter]"],
                    },
                ],
            },
        ],
        statline: [
            {
                name: "Terminator",
                WS: 4,
                BS: 4,
                S: 4,
                T: 4,
                W: 1,
                I: 4,
                A: 2,
                Ld: 9,
                Sv: "2+",
            },

        ],
        rules: ["[Deep Strike]"],
        wargearMain: ["[Terminator Armour]"],
        upgrades: [
            {
                type: "grouped",
                name: "Term Melee upgrades",
                user: "Terminator",
                options: [
                    { name: "[Lightning Claws]", user: "Terminator", points: 0, wargearEach: ["[Lightning Claws]"], removes: ["[Thunder Hammer]", "Storm Shield]"] },
                    { name: "[Storm Bolter] and [Power Fist]", user: "Terminator", points: 0, wargearEach: ["[Storm Bolter], [Power Fist]"], removes: ["[Thunder Hammer]", "Storm Shield]"] },
                ]
            },
        ]


    },


    {
        name: "Space Marine Veteran Squad",
        category: "Elites",
        modelType: "[Infantry]",
        unitComp: [
            {
                type: "corePool",
                compText: "Between 5 and 10 Veteran Space Marines. One may be upgraded to a Veteran Sergeant for +12 points.",
                minTotal: 5,
                maxTotal: 10,
                entries: [
                    {
                        name: "Veteran",
                        basePoints: 18,
                        min: 4,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Bolter]"],
                    },
                    {
                        name: "Veteran Sergeant",
                        basePoints: 30,
                        min: 0,          // each entry can have its own min/max
                        max: 1,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Bolter]"],
                    },
                ]
            },
        ],
        statline: [
            {
                name: "Veteran",
                WS: 4,
                BS: 4,
                S: 4,
                T: 4,
                W: 1,
                I: 4,
                A: 1,
                Ld: 9,
                Sv: "3+",
            },
            {
                name: "Veteran Sergeant",
                WS: 4,
                BS: 4,
                S: 4,
                T: 4,
                W: 1,
                I: 4,
                A: 2,
                Ld: 9,
                Sv: "3+",
            }

        ],
        rules: [''],
        upgrades: [
            { type: "limited", user: "Veteran", name: "[Bolt Pistol] and [Close Combat Weapon]", points: 0, wargearEach: ["[Bolt Pistol]", "[Close Combat Weapon]"], removes: ["[Bolter]"] },
            {
                type: "grouped",
                name: "vet-heavy-upgrades",
                maxPer: 1,
                user: "Veteran",
                options: [
                    { name: "[Heavy Bolter]", user: "Veteran", points: 5, wargearEach: ["[Heavy Bolter]"], },
                    { name: "[Missile Launcher]", user: "Veteran", points: 10, wargearEach: ["[Missile Launcher]"] },
                    { name: "[Lascannon]", user: "Veteran", points: 15, wargearEach: ["[Lascannon]"] },
                ]
            },
            {
                type: "grouped",
                name: "Burny Vet Upgrades",
                maxPer: 1,
                user: "Veteran",
                options: [
                    { name: "[Flamer]", user: "Veteran", points: 6, wargearEach: ["[Flamer]"] },
                    { name: "[Meltagun]", user: "Veteran", points: 10, wargearEach: ["[Meltagun]"] },
                    { name: "[Plasma Gun]", user: "Veteran", points: 8, wargearEach: ["[Plasma Gun]"] },
                ]
            },
            { type: "single", name: "[Frag Grenades]", points: 1, wargearMain: ["[Frag Grenades]"] },
            { type: "single", name: "[Krak Grenades]", points: 2, wargearMain: ["[Krak Grenades]"] },

            {
                type: "grouped",
                name: "serg weapons",
                maxPer: 1,
                user: "Veteran Sergeant",
                upgradeText: "The Veteran Sergeant may take one of the folowing:",
                options: [
                    { type: "single", user: "Veteran Sergeant", name: "[Close Combat Weapon]", points: 1, wargearEach: ["[Close Combat Weapon]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Power Weapon]", points: 15, wargearEach: ["[Power Weapon]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Power Fist]", points: 25, wargearEach: ["[Power Fist]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Bolter]", points: 2, wargearEach: ["[Bolter]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Plasma Pistol]", points: 15, wargearEach: ["[Plasma Pistol]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Storm Bolter]", points: 5, wargearEach: ["[Storm Bolter]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Combi-flamer]", points: 10, wargearEach: ["[Combi-flamer]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Combi-melta]", points: 15, wargearEach: ["[Combi-melta]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Combi-plasma]", points: 15, wargearEach: ["[Combi-plasma]"] },
                ],
            },

            { type: "single", name: "Rhino Transport", points: 0, wargearMain: ["Rhino [Dedicated Transport]"] },
            { type: "single", name: "Razorback Transport", points: 0, wargearMain: ["Razorback [Dedicated Transport]"] },
        ],
    },
    {
        name: "Space Marine Tactical Squad",
        category: "Troops",
        modelType: "[Infantry]",

        unitComp: [
            {
                type: "corePool",
                compText: "Between 5 and 10 Veteran Space Marines. One may be upgraded to a Veteran Sergeant for +12 points.",
                minTotal: 5,
                maxTotal: 10,
                entries: [
                    {
                        name: "Space Marine",
                        basePoints: 15,
                        min: 4,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Bolter]"],
                    },
                    {
                        name: "Veteran Sergeant",
                        basePoints: 30,
                        min: 0,          // each entry can have its own min/max
                        max: 1,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Bolter]"],
                    },
                ]
            },
        ],
        statline: [
            {
                name: "Space Marine",
                WS: 4,
                BS: 4,
                S: 4,
                T: 4,
                W: 1,
                I: 4,
                A: 1,
                Ld: 8,
                Sv: "3+",
            },
            {
                name: "Veteran Sergeant",
                WS: 4,
                BS: 4,
                S: 4,
                T: 4,
                W: 1,
                I: 4,
                A: 2,
                Ld: 9,
                Sv: "3+",
            }

        ],
        upgrades: [
            { type: "single", user: "Space Marine", name: "Sergeant [Bolt Pistol] and [Close Combat Weapon]", points: 0, wargearEach: ["[Bolt Pistol] and [Close Combat Weapon]"], removes: "[Bolter]" },
            {
                type: "grouped",
                name: "tac serg weapons",
                maxPer: 1,
                user: "Veteran Sergeant",
                upgradeText: "The Veteran Sergeant may take one of the folowing:",
                options: [
                    { type: "single", user: "Veteran Sergeant", name: "[Close Combat Weapon]", points: 1, wargearEach: ["[Close Combat Weapon]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Power Weapon]", points: 15, wargearEach: ["[Power Weapon]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Power Fist]", points: 25, wargearEach: ["[Power Fist]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Bolter]", points: 2, wargearEach: ["[Bolter]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Plasma Pistol]", points: 15, wargearEach: ["[Plasma Pistol]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Storm Bolter]", points: 5, wargearEach: ["[Storm Bolter]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Combi-flamer]", points: 10, wargearEach: ["[Combi-flamer]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Combi-melta]", points: 15, wargearEach: ["[Combi-melta]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Combi-plasma]", points: 15, wargearEach: ["[Combi-plasma]"] },
                ],
            },
            {
                type: "grouped",
                name: " Tac Heavy Upgrades",
                maxPer: 1,
                user: "Space Marine",
                options: [
                    { name: "[Heavy Bolter]", user: "Space Marine", points: 5, wargearEach: ["[Heavy Bolter]"], removes: ["[Bolter]"] },
                    { name: "[Missile Launcher]", user: "Space Marine", points: 10, wargearEach: ["[Missile Launcher]"], removes: ["[Bolter]"] },
                    { name: "[Lascannon]", user: "Space Marine", points: 15, wargearEach: ["[Lascannon]"], removes: ["[Bolter]"] },
                ]
            },
            {
                type: "grouped",
                name: "Tac Burny Upgrades",
                maxPer: 1,
                user: "Space Marine",
                options: [
                    { name: "[Flamer]", user: "Space Marine", points: 6, wargearEach: ["[Flamer]"], removes: ["[Bolter]"] },
                    { name: "[Meltagun]", user: "Space Marine", points: 10, wargearEach: ["[Meltagun]"], removes: ["[Bolter]"] },
                    { name: "[Plasma Gun]", user: "Space Marine", points: 8, wargearEach: ["[Plasma Gun]"], removes: ["[Bolter]"] },
                ]
            },
            { type: "perModel", name: "[Frag Grenades]", points: 1, wargearMain: ["[Frag Grenades]"] },
            { type: "perModel", name: "[Krak Grenades]", points: 2, wargearMain: ["[Krak Grenades]"] },

            { type: "single", name: "Rhino Transport", points: 0, wargearMain: ["Rhino [Dedicated Transport]"] },
            { type: "single", name: "Razorback Transport", points: 0, wargearMain: ["Razorback [Dedicated Transport]"] },
        ],
    },



    {
        name: "Scout Squad",
        category: "Troops",
        modelType: "[Infantry]",
        basePoints: 13,
        minModels: 5,
        maxModels: 10,

        unitComp: [
            {
                type: "corePool",
                compText: "Between 5 and 10 Space Marine Scouts. One may be upgraded to a Veteran Sergeant for +12 points.",
                minTotal: 5,
                maxTotal: 10,
                entries: [
                    {
                        name: "Scout",
                        basePoints: 13,
                        min: 4,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Bolt Pistol]", "[Close Combat Weapon]"],
                    },
                    {
                        name: "Veteran Sergeant",
                        basePoints: 26,
                        min: 0,          // each entry can have its own min/max
                        max: 1,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Bolt Pistol]", "[Close Combat Weapon]"],
                    },
                ]
            },
        ],
        statline: [
            {
                name: "Scout",
                WS: 4,
                BS: 4,
                S: 4,
                T: 4,
                W: 1,
                I: 4,
                A: 1,
                Ld: 8,
                Sv: "4+",
            },
            {
                name: "Veteran Sergeant",
                WS: 4,
                BS: 4,
                S: 4,
                T: 4,
                W: 1,
                I: 4,
                A: 2,
                Ld: 9,
                Sv: "4+",
            }
        ],
        rules: ['[Infiltrators]'],
        upgrades: [
            {
                type: "grouped",
                name: " scout Upgrades",
                user: "Scout",
                options: [
                    { type: "limited", user: "Scout", name: "[Bolter]", points: 0, wargearEach: ["[Bolter]"], removes: ["[Bolt Pistol]", "[Close Combat Weapon]"] },
                    { type: "limited", user: "Scout", name: "[Sniper Rifle]", points: 5, wargearEach: ["[Sniper Rifle]"], removes: ["[Bolt Pistol]", "[Close Combat Weapon]"] },
                    { type: "limited", user: "Scout", name: "[Combat Shotgun]", points: 0, wargearEach: ["[Combat Shotgun]"], removes: ["[Bolt Pistol]", "[Close Combat Weapon]"] },
                ],
            },
            { type: "limited", user: "Scout", name: "[Heavy Bolter]", points: 15, maxPer: 1, wargearEach: ["[Heavy Bolter]"], removes: ["[Bolt Pistol]", "[Close Combat Weapon]"] },
            { type: "perModel", user: "Scout", name: "[Frag Grenades]", points: 1, wargearMain: ["[Frag Grenades]"], removes: ["[Bolt Pistol]", "[Close Combat Weapon]"] },
            { type: "perModel", user: "Scout", name: "[Krak Grenades]", points: 2, wargearMain: ["[Krak Grenades]"], removes: ["[Bolt Pistol]", "[Close Combat Weapon]"] },


            {
                type: "grouped",
                name: " scout vet Upgrades",
                user: "Veteran Sergeant",
                maxPer: 1,
                options: [
                    { type: "single", user: "Veteran Sergeant", name: "[Close Combat Weapon]", points: 1, wargearEach: ["[Close Combat Weapon]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Power Weapon]", points: 15, wargearEach: ["[Power Weapon]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Power Fist]", points: 25, wargearEach: ["[Power Fist]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Bolter]", points: 2, wargearEach: ["[Bolter]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Plasma Pistol]", points: 15, wargearEach: ["[Plasma Pistol]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Storm Bolter]", points: 5, wargearEach: ["[Storm Bolter]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Combi-flamer]", points: 10, wargearEach: ["[Combi-flamer]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Combi-melta]", points: 15, wargearEach: ["[Combi-melta]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Combi-plasma]", points: 15, wargearEach: ["[Combi-plasma]"] },
                ],
            },
        ],
    },


    {
        name: "Rhino",
        category: "Troops",
        modelType: "Vehicle",
        isVehicle: true,
        basePoints: 50,
        minModels: 1,
        maxModels: 1,
        ignoreSlot: true,
        statline: [
            {
                name: "Rhino",
                armourFront: 11,
                armourSide: 11,
                armourRear: 10,
                BS: 4,
            },
        ],
        rules: ['[Transport] (10)'],
        wargear: ["[Storm Bolter]"],



        upgrades: [
            { type: "single", name: "[Smoke Launchers]", points: 3, wargear: ["[Smoke Launchers]"] },
        ],
    },

    {
        name: "Razorback",
        category: "Troops",
        modelType: "Vehicle",
        basePoints: 70,
        minModels: 1,
        maxModels: 1,
        ignoreSlot: true,
        isVehicle: true,
        statline: [
            {
                name: "Razorback",
                armourFront: 11,
                armourSide: 11,
                armourRear: 10,
                BS: 4,
            },
        ],
        rules: ['[Transport] (6)'],
        wargear: ["[Twin-Linked Heavy Bolter]"],



        upgrades: [

            {
                type: "grouped",
                name: "Razorback big guns",
                maxPer: 1,
                options: [
                    { name: "[Twin-Linked Lascannon]", points: 20, wargear: ["[Twin-Linked Lascannon]"], removes: ["[Twin-Linked Heavy Bolter]"], },
                    { name: "[Multimelta]", points: 5, wargear: ["[Meltagun]"], removes: ["[Twin-Linked Heavy Bolter]"] },
                    { name: ["[Lascannon]", "[Twin-Linked Plasma Gun]"], points: 15, wargear: ["[Lascannon]", "[Twin-Linked Plasma Gun]"], removes: ["[Twin-Linked Heavy Bolter]"] },
                ]
            },
            { type: "single", name: "[Smoke Launchers]", points: 3, wargear: ["[Terminator Armor]", "[Storm Bolter]", "[Power Fist]"], }

        ],
    },

    {
        name: "Assault Squad",
        category: "Fast Attack",
        modelType: "[Jump Infantry]",
        unitComp: [
            {
                type: "corePool",
                compText: "One Sergeant and between 5 and 10 Space Marines. The sergeant may be upgraded to a Veteran Sergeant for +15 points.",
                minTotal: 5,
                maxTotal: 10,
                entries: [
                    {
                        name: "Space Marine",
                        basePoints: 25,
                        min: 4,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Bolt Pistol]"],
                    },
                    {
                        name: "Veteran Sergeant",
                        basePoints: 40,
                        min: 0,          // each entry can have its own min/max
                        max: 1,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Bolt Pistol]"],
                    },
                ]
            },
        ],
        statline: [
            {
                name: "Space Marine",
                WS: 4,
                BS: 4,
                S: 4,
                T: 4,
                W: 1,
                I: 4,
                A: 1,
                Ld: 8,
                Sv: "3+",
            },
            {
                name: "Veteran Sergeant",
                WS: 4,
                BS: 4,
                S: 4,
                T: 4,
                W: 1,
                I: 4,
                A: 2,
                Ld: 9,
                Sv: "3+",
            }
        ],

        wargearMain: ["[Jump Packs]", "[Frag Grenades]"],
        upgrades: [
            { type: "perModel", name: "[Krak Grenades]", points: 2, wargearMain: ["[Krak Grenades]"] },
            { type: "perModel", name: "[Melta Bombs]", points: 4, wargearMain: ["[Melta Bombs]"] },
            { type: "limited", name: "[Plasma Pistol]", points: 5, maxPer: 1, wargearMain: ["[Plasma Pistol]]"] },
            {
                type: "grouped",
                name: "ass vet Upgrades",
                user: "Veteran Sergeant",
                maxPer: 1,
                options: [
                    { type: "single", user: "Veteran Sergeant", name: "[Close Combat Weapon]", points: 1, wargearEach: ["[Close Combat Weapon]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Power Weapon]", points: 15, wargearEach: ["[Power Weapon]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Power Fist]", points: 25, wargearEach: ["[Power Fist]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Bolter]", points: 2, wargearEach: ["[Bolter]"] },
                    { type: "single", user: "Veteran Sergeant", name: "Vet [Plasma Pistol]", points: 15, wargearEach: ["[Plasma Pistol]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Storm Bolter]", points: 5, wargearEach: ["[Storm Bolter]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Combi-flamer]", points: 10, wargearEach: ["[Combi-flamer]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Combi-melta]", points: 15, wargearEach: ["[Combi-melta]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Combi-plasma]", points: 15, wargearEach: ["[Combi-plasma]"] },
                ],
            },
        ],
    },

    {
        name: "Bike Squadron",
        category: "Fast Attack",
        modelType: "Bike",
        unitComp: [
            {
                type: "corePool",
                compText: "One Sergeant and between 2 and 4 Space Marines. The sergeant may be upgraded to a Veteran Sergeant for +15 points. The squad may be joined by an Attack Bike for an additional 50 points.",
                minTotal: 3,
                maxTotal: 5,
                entries: [
                    {
                        name: "Space Marine Biker",
                        basePoints: 35,
                        min: 2,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Twin-Linked Bolters]", "[Bolt Pistol]"],
                    },
                    {
                        name: "Veteran Sergeant",
                        basePoints: 50,
                        min: 0,          // each entry can have its own min/max
                        max: 1,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Twin-Linked Bolters]", "[Bolt Pistol]"],
                    },

                ],

            },
            {
                // a *separate* add-on model that doesn’t count toward the 5–10 total
                type: "attachment",
                compText: "May be joined by:",
                minTotal: 0,
                maxTotal: 1,
                entries: [
                    {
                        name: "Attack Bike",
                        basePoints: 50,
                        wargearEach: ["[Twin-Linked Bolters]", "[Heavy Bolter]"]
                    }
                ]
            }
        ],

        statline: [
            {
                name: "Space Marine Biker",
                WS: 4,
                BS: 4,
                S: 4,
                T: 5,
                W: 1,
                I: 4,
                A: 1,
                Ld: 8,
                Sv: "3+",
            },
            {
                name: "Veteran Sergeant",
                WS: 4,
                BS: 4,
                S: 4,
                T: 5,
                W: 1,
                I: 4,
                A: 2,
                Ld: 9,
                Sv: "3+",
            },
            {
                name: "Attack Bike",
                WS: 4,
                BS: 4,
                S: 4,
                T: 5,
                W: 1,
                I: 4,
                A: 2,
                Ld: 8,
                Sv: "2+",
            }
        ],
        upgrades: [
            { type: "single", name: "Sergeant [Close Combat Weapon]", points: 1, wargear: ["Sergeant [Close Combat Weapon]"] },

            {
                type: "grouped",
                name: "ass vet Upgrades",
                user: "Veteran Sergeant",
                maxPer: 1,
                options: [
                    { type: "single", user: "Veteran Sergeant", name: "[Close Combat Weapon]", points: 1, wargearEach: ["[Close Combat Weapon]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Power Weapon]", points: 15, wargearEach: ["[Power Weapon]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Power Fist]", points: 25, wargearEach: ["[Power Fist]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Bolter]", points: 2, wargearEach: ["[Bolter]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Plasma Pistol]", points: 15, wargearEach: ["[Plasma Pistol]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Storm Bolter]", points: 5, wargearEach: ["[Storm Bolter]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Combi-flamer]", points: 10, wargearEach: ["[Combi-flamer]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Combi-melta]", points: 15, wargearEach: ["[Combi-melta]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Combi-plasma]", points: 15, wargearEach: ["[Combi-plasma]"] },
                ],
            },
            {
                type: "grouped",
                name: "Bike Special Weapons",
                maxPer: 2,
                user: "Space Marine Biker",
                options: [
                    { name: "[Flamer]", points: 3, wargearEach: ["[Flamer]"], user: "Space Marine Biker", },
                    { name: "[Meltagun]", points: 10, wargearEach: ["[Meltagun]"], user: "Space Marine Biker", },
                    { name: "[Plasma Gun]", points: 6, wargearEach: ["[Plasma Gun]"], user: "Space Marine Biker", },
                ]
            },

            { type: "single", upgradeText: "The Attack Bike may replace it's [Heavy Bolter] with a", name: "[Multimelta]", points: 20, user: "Attack Bike", wargearEach: ["[Multimelta]"], removes: ["[Heavy Bolter]"] },

        ],
    },

    {
        name: "Land Speeder Squadron",
        category: "Fast Attack",
        modelType: "[Vehicle], [Fast], [Skimmer]",
        isVehicle: true,
        unitComp: [
            {
                type: "corePool",
                compText: "Between 1 and 3 Land Speeders.",
                minTotal: 1,
                maxTotal: 3,
                entries: [
                    {
                        name: "Land Speeder",
                        basePoints: 50,
                        min: 1,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Heavy Bolter]"],
                    },
                ],
            },
        ],
        statline: [
            {
                name: "Land Speeder",
                armourFront: 10,
                armourSide: 10,
                armourRear: 10,
                BS: 4,
            },
        ],
        upgrades: [
            { type: "limited", name: "[Multimelta]", points: 15, wargearEach: ["[Multimelta]"], removes: ["[Heavy Bolter]"] },
        ],
    },

    {
        name: "Land Speeder Tornado",
        category: "Fast Attack",
        modelType: "[Vehicle], [Fast], [Skimmer]",
        isVehicle: true,
        unitComp: [
            {
                type: "corePool",
                compText: "1 Land Speeder Tornado.",
                minTotal: 1,
                maxTotal: 1,
                entries: [
                    {
                        name: "Land Speeder",
                        basePoints: 75,
                        min: 1,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Heavy Bolter]", "[Multimelta]"],
                    },
                ],
            },
        ],
        statline: [
            {
                name: "Land Speeder",
                armourFront: 10,
                armourSide: 10,
                armourRear: 10,
                BS: 4,
            },
        ],
        upgrades: [
            { type: "single", upgradeText: "The [Heavy Bolter] may be replaced with a", user: "Land Speeder", name: "[Heavy Flamer]", points: 0, wargearEach: ["[Heavy Flamer]"], removes: ["[Heavy Bolter]"] },
            { type: "single", upgradeText: "The [Multimelta] may be replaced with a", user: "Land Speeder", name: "[Assault Cannon]", points: 0, wargearEach: ["[Assault Cannon]"], removes: ["[Multimelta]"] },
        ],
    },

    {
        name: "Attack Bike Squadron",
        category: "Fast Attack",
        modelType: "[Bike]",
        unitComp: [
            {
                type: "corePool",
                compText: "Between 1 and 3 Attack Bikes.",
                minTotal: 1,
                maxTotal: 3,
                entries: [
                    {
                        name: "Attack Bike",
                        basePoints: 50,
                        min: 1,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Twin-Linked] [Bolter]", "[Heavy Bolter]", "[Bolt Pistol]"],
                    },
                ],
            },
        ],
        statline: [
            {
                name: "Attack Bike",
                WS: 4,
                BS: 4,
                S: 4,
                T: 5,
                W: 1,
                I: 4,
                A: 2,
                Ld: 8,
                Sv: "2+",
            }
        ],
        upgrades: [
            { type: "limited", user: "Attack Bike", upgradeText: "Any Attack Bike may replace it's [Heavy Bolter] with a", name: "[Multimelta]", points: 15, wargearEach: ["[Multimelta]"], removes: ["[Heavy Bolter]"] },
        ],
    },

    {
        name: "Devestator Squad",
        category: "Heavy Support",
        modelType: "Infantry",
        unitComp: [
            {
                type: "corePool",
                compText: "One Sergeant and between 4 and 9 Space Marines. The sergeant may be upgraded to a Veteran Sergeant for +15 points.",
                minTotal: 5,
                maxTotal: 10,
                entries: [
                    {
                        name: "Space Marine",
                        basePoints: 15,
                        min: 4,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Bolter]"],
                    },
                    {
                        name: "Veteran Sergeant",
                        basePoints: 30,
                        min: 0,          // each entry can have its own min/max
                        max: 1,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Bolter]"],
                    },

                ],

            },
        ],
        statline: [
            {
                name: "Space Marine",
                WS: 4,
                BS: 4,
                S: 4,
                T: 4,
                W: 1,
                I: 4,
                A: 1,
                Ld: 8,
                Sv: "3+",
            },
            {
                name: "Veteran Sergeant",
                WS: 4,
                BS: 4,
                S: 4,
                T: 4,
                W: 1,
                I: 4,
                A: 2,
                Ld: 9,
                Sv: "3+",
            }
        ],
        upgrades: [
            { type: "single", upgradeText: "The Sergeant may take", name: "[Bolt Pistol] and [Close Combat Weapon] (Sergeant)", user: "Space Marine", points: 0, wargearEach: ["[Bolt Pistol]", "[Close Combat Weapon]"], removes: ["[Bolter]"] },
            { type: "single", upgradeText: "The Veteran Sergeant may take", name: "[Bolt Pistol] and [Close Combat Weapon]", user: "Veteran Sergeant", points: 0, wargearEach: ["[Bolt Pistol]", "[Close Combat Weapon]"], removes: ["[Bolter]"] },
            {
                type: "grouped",
                name: "dev vet Upgrades",
                user: "Veteran Sergeant",
                upgradeText: "The Veteran Sergeant may take one of:",
                maxPer: 1,
                options: [
                    { type: "single", user: "Veteran Sergeant", name: "[Close Combat Weapon]", points: 1, wargearEach: ["[Close Combat Weapon]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Power Weapon]", points: 15, wargearEach: ["[Power Weapon]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Power Fist]", points: 25, wargearEach: ["[Power Fist]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Bolter]", points: 2, wargearEach: ["[Bolter]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Plasma Pistol]", points: 15, wargearEach: ["[Plasma Pistol]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Storm Bolter]", points: 5, wargearEach: ["[Storm Bolter]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Combi-flamer]", points: 10, wargearEach: ["[Combi-flamer]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Combi-melta]", points: 15, wargearEach: ["[Combi-melta]"] },
                    { type: "single", user: "Veteran Sergeant", name: "[Combi-plasma]", points: 15, wargearEach: ["[Combi-plasma]"] },
                ],
            },
            {
                type: "grouped",
                name: "Dev Special Weapons",
                user: "Space Marine",
                maxPer: 4,
                options: [
                    { name: "[Heavy Bolter]", user: "Space Marine", points: 15, wargearEach: ["[Heavy Bolter]"], removes: ["[Bolter]"] },
                    { name: "[Missile Launcher]", user: "Space Marine", points: 20, wargearEach: ["[Missile Launcher]"], removes: ["[Bolter]"] },
                    { name: "[Lascannon]", user: "Space Marine", points: 35, wargearEach: ["[Lascannon]"], removes: ["[Bolter]"] },
                    { name: "[Multimelta]", user: "Space Marine", points: 35, wargearEach: ["[Multimelta]"], removes: ["[Bolter]"] },
                    { name: "[Plasma Cannon]", user: "Space Marine", points: 35, wargearEach: ["[Plasma Cannon]"], removes: ["[Bolter]"] },

                ]
            },
            { type: "single", name: "[Rhino Transport]", points: 0, wargearMain: ["Rhino [Dedicated Transport]"] },
            { type: "single", name: "[Razorback Transport]", points: 0, wargearMain: ["Razorback [Dedicated Transport]"] },
        ]
    },

    {
        name: "Whirlwind",
        category: "Heavy Support",
        modelType: "[Vehicle], [Tank]",
        isVehicle: true,
        unitComp: [
            {
                type: "corePool",
                compText: "1 Whirlwind.",
                minTotal: 1,
                maxTotal: 1,
                entries: [
                    {
                        name: "Whirlwind",
                        basePoints: 75,
                        min: 1,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Turret-Mounted] [Multiple Missile Launcher]"],
                    },
                ],
            },
        ],
        statline: [
            {
                name: "Whirlwind",
                armourFront: 11,
                armourSide: 11,
                armourRear: 10,
                BS: 4,
            },
        ],
        upgrades: [
            { type: "single", name: "[Smoke Launchers]", points: 3, wargearMain: ["[Smoke Launchers]"], }
        ],
    },

    {
        name: "Predator Annihilator",
        category: "Heavy Support",
        modelType: "[Vehicle], [Tank]",
        isVehicle: true,
        unitComp: [
            {
                type: "corePool",
                compText: "1 Predator.",
                minTotal: 1,
                maxTotal: 1,
                entries: [
                    {
                        name: "Predator",
                        basePoints: 120,
                        min: 1,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Turret-Mounted] [Twin-Linked] [Lascannon]"],
                    },
                ],
            },
        ],
        statline: [
            {
                name: "Predator",
                armourFront: 13,
                armourSide: 11,
                armourRear: 10,
                BS: 4,
            },
        ],
        upgrades: [
            {
                type: "grouped",
                name: "pred anihil sponson Weapons",
                user: "Predator",
                upgradeText: "The model may take [Side Sponsons] each armed with the following:",
                maxPer: 1,
                options: [
                    { name: "[Heavy Bolter]", user: "Predator", points: 10, wargearEach: ["[Heavy Bolter] [Side Sponsons]"] },
                    { name: "[Lascannon]", user: "Predator", points: 25, wargearEach: ["[Lascannon] [Side Sponsons]"] },
                ]
            },
            { type: "single", name: "[Smoke Launchers]", points: 3, wargearMain: ["[Smoke Launchers]"], }
        ],
    },

    {
        name: "Predator Destructor",
        category: "Heavy Support",
        modelType: "[Vehicle], [Tank]",
        isVehicle: true,
        unitComp: [
            {
                type: "corePool",
                compText: "1 Predator.",
                minTotal: 1,
                maxTotal: 1,
                entries: [
                    {
                        name: "Destructor",
                        basePoints: 100,
                        min: 1,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Turret-Mounted] [Autocannon]"],
                    },
                ],
            },
        ],
        statline: [
            {
                name: "Destructor",
                armourFront: 13,
                armourSide: 11,
                armourRear: 10,
                BS: 4,
            },
        ],
        upgrades: [
            {
                type: "grouped",
                name: "Pred destruc Weapons",
                maxPer: 1,
                user: "Destructor",
                upgradeText: "The model may take [Side Sponsons] each armed with the following:",
                options: [
                    { name: "[Heavy Bolter]", user: "Destructor", points: 10, wargearEach: ["[Heavy Bolter] [Side Sponsons]"] },
                    { name: "[Lascannon]", user: "Destructor", points: 25, wargearEach: ["[Lascannon] [Side Sponsons]"] },
                ]
            },
            { type: "single", name: "[Smoke Launchers]", points: 3, wargearMain: ["[Smoke Launchers]"], }
        ],
    },

    {
        name: "Land Raider",
        category: "Heavy Support",
        modelType: "[Vehicle], [Tank]",
        isVehicle: true,
        unitComp: [
            {
                type: "corePool",
                compText: "1 Predator.",
                minTotal: 1,
                maxTotal: 1,
                entries: [
                    {
                        name: "Land Raider",
                        basePoints: 120,
                        min: 1,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Twin-Linked] [Lascannon] [Side Sponsons]", "[Hull-Mounted] [Twin-Linked] [Heavy Bolter]"],
                    },
                ],
            },
        ],
        statline: [
            {
                name: "Land Raider",
                armourFront: 14,
                armourSide: 14,
                armourRear: 14,
                BS: 4,
            },
        ],
        rules: ['[Transport] (10 Space Marines or 5 Terminators)'],
        upgrades: [
            { type: "single", name: "[Smoke Launchers]", points: 3, wargearMain: ["[Smoke Launchers]"], }
        ],
    },

    {
        name: "Dreadnought",
        category: "Heavy Support",
        modelType: "[Vehicle], [Walker]",
        isDreadnought: true,
        unitComp: [
            {
                type: "corePool",
                compText: "1 Predator.",
                minTotal: 1,
                maxTotal: 1,
                entries: [
                    {
                        name: "Dreadnought",
                        basePoints: 75,
                        min: 1,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Dreadnought Close Combat Weapon]", "[Storm Bolter]"],
                    },
                ],
            },
        ],
        statline: [
            {
                name: "Dreadnought",
                WS: 4,
                BS: 4,
                S: 10,
                armourFront: 12,
                armourSide: 12,
                armourRear: 10,
                I: 4,
                A: 2,
            },
        ],
        upgrades: [
            {
                type: "grouped",
                name: "dread options",
                maxPer: 1,
                user: "Dreadnought",
                options: [
                    { name: "[Assault Cannon]", points: 30, user: "Dreadnought", wargearEach: ["[Assault Cannon]"]  },
                    { name: "[Twin-Linked Lascannon]", points: 50, user: "Dreadnought", wargearEach: ["[Twin-Linked Lascannon]"] },
                    { name: "[Twin-Linked Heavy Bolter]", points: 30, user: "Dreadnought", wargearEach: ["[Twin-Linked Heavy Bolter]"] },
                    { name: "[Multimelta]", points: 40, user: "Dreadnought", wargearEach: ["[Multimelta]"] },
                    { name: "[Plasma Cannon]", points: 40, user: "Dreadnought", wargearEach: ["[Plasma Cannon]"] },
                    { name: "[Twin-Linked Autocanon]", points: 35, user: "Dreadnought", wargearEach: ["[Twin-Linked Autocannon]"] },
                ]

            },
            { type: "single", user: "Dreadnought", upgradeText: "The [Storm Bolter] may be upgraded to a", name: "[Heavy Flamer]", points: 10, wargearEach: ["[Heavy flamer]"], removes: ["[Storm Bolter]"] },
            { type: "single", user: "Dreadnought", upgradeText: "The [Dreadnought Close Combat Weapon] may be upgraded to a", name: "[Missile Launcher]", points: 10, statlineModifiers: { S: 6 }, wargearEach: ["[Missile Launcher]"], removes: ["[Dreadnought Close Combat Weapon]", "[Storm Bolter]"] },
            { type: "single", name: "[Smoke Launchers]", points: 3, wargearMain: ["[Smoke Launchers]"], }
        ],
    },

    {
        name: "Vindicator",
        category: "Heavy Support",
        modelType: "[Vehicle], [Tank]",
        isVehicle: true,
        unitComp: [
            {
                type: "corePool",
                compText: "1 Predator.",
                minTotal: 1,
                maxTotal: 1,
                entries: [
                    {
                        name: "Vindicator",
                        basePoints: 120,
                        min: 1,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Storm Bolter]", "[Hull-Mounted] [Demolisher Cannon]"],
                    },
                ],
            },
        ],
        statline: [
            {
                name: "Destructor",
                armourFront: 13,
                armourSide: 11,
                armourRear: 10,
                BS: 4,
            },
        ],
        upgrades: [
            { type: "single", name: "[Smoke Launchers]", points: 3, wargearMain: ["[Smoke Launchers]"], }
        ],
    },



];
