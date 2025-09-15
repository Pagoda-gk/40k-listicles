import ReactMarkdown from "react-markdown";

export const units = [
    {
        name: "Space Marine Hero",
        category: "HQ",
        modelType: "[Infantry]",
        basePoints: 30,
        minModels: 1,
        maxModels: 1,
        variants: {
            profile: {
                label: "Hero Type",
                options: [
                    {
                        name: "Leader",
                        statline: { WS: 4, BS: 4, S: 4, T: 4, W: 1, I: 4, A: 2, Ld: 9, Sv: "3+" },
                        extraPoints: 0
                    },
                    {
                        name: "Commander",
                        statline: { WS: 5, BS: 5, S: 4, T: 4, W: 2, I: 5, A: 3, Ld: 9, Sv: "3+" },
                        extraPoints: 15
                    },
                    {
                        name: "Force Commander",
                        statline: { WS: 5, BS: 5, S: 4, T: 4, W: 3, I: 5, A: 3, Ld: 10, Sv: "3+" },
                        extraPoints: 30
                    }
                ]
            },

        },


        rules: ["[Independent Character]", "[Command Squad]"],
        wargear: ["[Bolt Pistol]"],
        upgrades: [
            {
                name: "If the army includes a squad of Terminators, this model may take [Terminator Armor], replacing it's Bolt Pistol with a [Storm Bolter] and [Power Fist]",
                type: "single",
                statlineModifiers: { Sv: "2+" },
                wargear: ["[Terminator Armor]", "[Storm Bolter]", "[Power Fist]"],
                removes: ["[Bolt Pistol]"],
                pointsByVariant: {
                    Leader: 15,
                    Commander: 20,
                    "Force Commander": 30
                },
            },
            { type: "single", name: "[Close Combat Weapon]", points: 1, wargear: ["[Close Combat Weapon]"] },
            { type: "single", name: "[Power Weapon]", points: 15, wargear: ["[Power Weapon]"] },
            { type: "single", name: "[Power Fist]", points: 25, wargear: ["[Power Fist]"] },
            { type: "single", name: "[Bolter]", points: 2, wargear: ["[Bolter]"] },
            { type: "single", name: "[Plasma Pistol]", points: 15, wargear: ["[Plasma Pistol]"] },
            { type: "single", name: "[Storm Bolter]", points: 5, wargear: ["[Storm Bolter]"] },
            { type: "single", name: "[Combi-flamer]", points: 10, wargear: ["[Combi-flamer]"] },
            { type: "single", name: "[Combi-melta]", points: 15, wargear: ["[Combi-melta]"] },
            { type: "single", name: "[Combi-plasma]", points: 15, wargear: ["[Combi-plasma]"] },
            { type: "single", name: "[Frag Grenades]", points: 3, wargear: ["[Frag Grenades]"] },
            { type: "single", name: "[Krak Grenades]", points: 3, wargear: ["[Krak Grenades]"] },

        ],

    },
    {
        name: "Librarian",
        category: "HQ",
        modelType: "[Infantry]",
        basePoints: 70,
        minModels: 1,
        maxModels: 1,
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
        ],
        rules: ["[Independent Character]", "[Command Squad]", "[Psychic Power - Smite]", "[Psychic Power - Storm of Destruction]"],
        wargear: ["[Bolt Pistol]", "Force Weapon (counts as [Power Weapon])"],
        upgrades: [
            {
                name: "If the army includes a squad of Terminators, this model may take [Terminator Armor], replacing it's Bolt Pistol with a [Storm Bolter] and [Power Fist]",
                type: "single",
                statlineModifiers: { Sv: "2+" },
                wargear: ["[Terminator Armor]", "[Storm Bolter]"],
                removes: ["[Bolt Pistol]"],
                points: 30,
            },
            { type: "single", name: "[Terminator Armour]", points: 30, wargear: ["[Terminator Armour]"] },
            { type: "single", name: "[Close Combat Weapon]", points: 1, wargear: ["[Close Combat Weapon]"] },
            { type: "single", name: "[Power Weapon]", points: 15, wargear: ["[Power Weapon]"] },
            { type: "single", name: "[Power Fist]", points: 25, wargear: ["[Power Fist]"] },
            { type: "single", name: "[Bolter]", points: 2, wargear: ["[Bolter]"] },
            { type: "single", name: "[Plasma Pistol]", points: 15, wargear: ["[Plasma Pistol]"] },
            { type: "single", name: "[Storm Bolter]", points: 5, wargear: ["[Storm Bolter]"] },
            { type: "single", name: "[Combi-flamer]", points: 10, wargear: ["[Combi-flamer]"] },
            { type: "single", name: "[Combi-melta]", points: 15, wargear: ["[Combi-melta]"] },
            { type: "single", name: "[Combi-plasma]", points: 15, wargear: ["[Combi-plasma]"] },
            { type: "single", name: "[Frag Grenades]", points: 3, wargear: ["[Frag Grenades]"] },
            { type: "single", name: "[Krak Grenades]", points: 3, wargear: ["[Krak Grenades]"] }
        ],

    },

    {
        name: "Chaplain",
        category: "HQ",
        modelType: "[Infantry]",
        basePoints: 70,
        minModels: 1,
        maxModels: 1,
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



        ],
        rules: ["[Independent Character]", "[Command Squad]"],
        wargear: ["[Bolt Pistol]", "[Rosarius]", "[Crozius Arcanum]"],
        upgrades: [
            {
                name: "If the army includes a squad of Terminators, this model may take [Terminator Armor], replacing it's Bolt Pistol with a [Storm Bolter]",
                type: "single",
                statlineModifiers: { Sv: "2+/4++" },
                wargear: ["[Terminator Armor]", "[Storm Bolter]"],
                removes: ["[Bolt Pistol]"],
                points: 30,
            },
            {
                name: "If the army includes a squad of Space Marine Bikes, this model may be mounted on a [Bike], replacing it's Bolt Pistol with a [Twin-linked] [Bolter].",
                type: "single",
                statlineModifiers: { T: 5 },
                wargear: ["[Terminator Armor]", "[Storm Bolter]"],
                removes: ["[Bolt Pistol]"],
                points: 25,
            },
            { type: "single", name: "[Close Combat Weapon]", points: 1, wargear: ["[Close Combat Weapon]"] },
            { type: "single", name: "[Power Weapon]", points: 15, wargear: ["[Power Weapon]"] },
            { type: "single", name: "[Power Fist]", points: 25, wargear: ["[Power Fist]"] },
            { type: "single", name: "[Bolter]", points: 2, wargear: ["[Bolter]"] },
            { type: "single", name: "[Plasma Pistol]", points: 15, wargear: ["[Plasma Pistol]"] },
            { type: "single", name: "[Storm Bolter]", points: 5, wargear: ["[Storm Bolter]"] },
            { type: "single", name: "[Combi-flamer]", points: 10, wargear: ["[Combi-flamer]"] },
            { type: "single", name: "[Combi-melta]", points: 15, wargear: ["[Combi-melta]"] },
            { type: "single", name: "[Combi-plasma]", points: 15, wargear: ["[Combi-plasma]"] },
            { type: "single", name: "[Frag Grenades]", points: 3, wargear: ["[Frag Grenades]"] },
            { type: "single", name: "[Krak Grenades]", points: 3, wargear: ["[Krak Grenades]"] }
        ],

    },


    {
        name: "Command Squad",
        category: "HQ",
        modelType: "[Infantry]",
        basePoints: 15,
        minModels: 5,
        maxModels: 10,
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
            }

        ],
        rules: [''],
        wargear: ["[Bolter]"],
        upgrades: [
            {
                type: "single", name: "[Sergeant]", points: 15, forced: true,
                children: [
                    { type: "single", name: "Sergeant [Bolt Pistol] and [Close Combat Weapon]", points: 0, wargear: ["[Bolt Pistol]", "[Close Combat Weapon]"], },
                ]
            },

            {
                type: "single", name: "[Apothecary]", points: 20, wargear: ["[Apothecary]"],
                children: [
                    { type: "single", name: "[Bolt Pistol] and [Close Combat Weapon]", points: 0, wargear: ["[Bolt Pistol] and [Close Combat Weapon]"] },
                ],
            },
            {
                type: "single", name: "[Techmarine]", points: 18, wargear: ["[Techmarine]"],
                children: [
                    { type: "single", name: "[Bolt Pistol] and [Close Combat Weapon]", points: 0, wargear: ["[Bolt Pistol] and [Close Combat Weapon]"] },
                    { type: "single", name: "[Servo Arm]", points: 10, wargear: ["[Servo Arm]"] },
                ],

            },
            {
                type: "single", name: "[Standard Bearer]", points: 18, wargear: ["[Standard Bearer]"],
                children: [
                    { type: "single", name: "[Bolt Pistol] and [Close Combat Weapon]", points: 0, wargear: ["[Bolt Pistol] and [Close Combat Weapon]"] },
                    { type: "single", name: "[Standard]", points: 18, wargear: ["[Standard]"] },
                ],
            },
            {
                type: "single", name: "[Veteran Sergeant]", points: 15, wargear: ["[Rhino]"],
                children: [
                    { type: "single", name: "[Close Combat Weapon]", points: 1, wargear: ["[Close Combat Weapon]"] },
                    { type: "single", name: "[Power Weapon]", points: 15, wargear: ["[Power Weapon]"] },
                    { type: "single", name: "[Power Fist]", points: 25, wargear: ["[Power Fist]"] },
                    { type: "single", name: "[Bolter]", points: 2, wargear: ["[Bolter]"] },
                    { type: "single", name: "[Plasma Pistol]", points: 15, wargear: ["[Plasma Pistol]"] },
                    { type: "single", name: "[Storm Bolter]", points: 5, wargear: ["[Storm Bolter]"] },
                    { type: "single", name: "[Combi-flamer]", points: 10, wargear: ["[Combi-flamer]"] },
                    { type: "single", name: "[Combi-melta]", points: 15, wargear: ["[Combi-melta]"] },
                    { type: "single", name: "[Combi-plasma]", points: 15, wargear: ["[Combi-plasma]"] },
                    { type: "single", name: "[Frag Grenades]", points: 1, wargear: ["[Frag Grenades]"] },
                    { type: "single", name: "[Krak Grenades]", points: 2, wargear: ["[Krak Grenades]"] },

                ]
            },
            {
                type: "grouped",
                name: "Command Special Weapons",
                maxPer: 2,
                options: [
                    { name: "Missile Launcher", points: 20, wargear: ["[Missile Launcher"] },
                    { name: "Heavy Bolter", points: 15, wargear: ["[Heavy Bolter]"] },
                    { name: "Lascannon", points: 35, wargear: ["[Lascannon]"] },
                    { name: "Flamer", points: 3, wargear: ["Flamer]"] },
                    { name: "Plasma Gun", points: 6, wargear: ["Plasma Gun]"] },
                    { name: "Meltagun", points: 10, wargear: ["[Meltagun]"] }
                ]
            },
            { type: "perModel", name: "[Frag Grenades]", points: 1, wargear: ["Frag Grenades"] },
            { type: "perModel", name: "[Krak Grenades]", points: 2, wargear: ["Krak Grenades"] },
            { type: "single", name: "[Rhino Transport]", points: 0, wargear: ["[Rhino]"] },
            { type: "single", name: "[Razorback Transport]", points: 0, wargear: ["[Razorback]"] },
        ],
    },

    {
        name: "Terminator Squad",
        category: "Elites",
        modelType: "[Infantry]",
        basePoints: 42,
        minModels: 5,
        maxModels: 10,
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
        wargear: ["[Power Sword] and [Storm Bolter] (Sergeant), [Power Fist] and [Storm Bolter] (Terminator)"],
        upgrades: [
            {
                type: "grouped",
                name: "Term Special Weapons",
                maxPer: 2,
                options: [
                    { name: "[Assault Cannon]", points: 20, wargear: ["[Assault Cannon]"] },
                    { name: "[Heavy Flamer]", points: 10, wargear: ["[Heavy Flamer]"] },
                    { name: "[Cyclone Missile Launcher]", points: 20, wargear: ["[Cyclone Missile Launcher]"] },
                ]
            },

        ],

    },
    {
        name: "Terminator Assault Squad",
        category: "Elites",
        modelType: "[Infantry]",
        basePoints: 42,
        minModels: 5,
        maxModels: 10,
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
        wargear: ["[Power Sword] and [Storm Bolter] (Sergeant), [Power Fist] and [Storm Bolter] (Terminator)"],
        upgrades: [
            {
                type: "grouped",
                name: "Term Melee upgrades",
                maxPer: 2,
                options: [
                    { name: "[Lightning Claws]", points: 0, wargear: ["[Lightning Claws]"] },
                    { name: "[Thunder Hammer] and [Storm Shield]", points: 0, wargear: ["[Thunder Hammer] and [Storm Shield]"] },
                ]
            },

        ],

    },
    {
        name: "Space Marine Veteran Squad",
        category: "Elites",
        modelType: "[Infantry]",
        basePoints: 18,
        minModels: 5,
        maxModels: 10,
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
        wargear: ["[Bolter] or [Bolt Pistol] and [Close Combat Weapon]"],
        upgrades: [
            {
                type: "grouped",
                name: "vet-heavy-upgrades",
                maxPer: 1,
                options: [
                    { name: "[Heavy Bolter]", points: 5, wargear: ["[Heavy Bolter]"] },
                    { name: "[Missile Launcher]", points: 10, wargear: ["[Missile Launcher]"] },
                    { name: "[Lascannon]", points: 15, wargear: ["[Lascannon]"] },
                ]
            },
            {
                type: "grouped",
                name: "Burny Vet Upgrades",
                maxPer: 1,
                options: [
                    { name: "[Flamer]", points: 6, wargear: ["[Flamer]"] },
                    { name: "[Meltagun]", points: 10, wargear: ["[Meltagun]"] },
                    { name: "[Plasma Gun]", points: 8, wargear: ["[Plasma Gun]"] },
                ]
            },
            { type: "single", name: "[Frag Grenades]", points: 1, wargear: ["[Frag Grenades]"] },
            { type: "single", name: "[Krak Grenades]", points: 2, wargear: ["[Krak Grenades]"] },

            {
                type: "single", name: "[Veteran Sergeant]", points: 12,
                children: [
                    { type: "single", name: "[Close Combat Weapon]", points: 1, wargear: ["[Close Combat Weapon]"] },
                    { type: "single", name: "[Power Weapon]", points: 15, wargear: ["[Power Weapon]"] },
                    { type: "single", name: "[Power Fist]", points: 25, wargear: ["[Power Fist]"] },
                    { type: "single", name: "[Bolter]", points: 2, wargear: ["[Bolter]"] },
                    { type: "single", name: "[Plasma Pistol]", points: 15, wargear: ["[Plasma Pistol]"] },
                    { type: "single", name: "[Storm Bolter]", points: 5, wargear: ["[Storm Bolter]"] },
                    { type: "single", name: "[Combi-flamer]", points: 10, wargear: ["[Combi-flamer]"] },
                    { type: "single", name: "[Combi-melta]", points: 15, wargear: ["[Combi-melta]"] },
                    { type: "single", name: "[Combi-plasma]", points: 15, wargear: ["[Combi-plasma]"] },

                ]
            },
            { type: "single", name: "[Rhino Transport]", points: 0, wargear: ["[Rhino]"] },
            { type: "single", name: "[Razorback Transport]", points: 0, wargear: ["[Razorback]"] },
        ],
    },
    {
        name: "Space Marine Tactical Squad",
        category: "Troops",
        modelType: "[Infantry]",
        basePoints: 15,
        minModels: 5,
        maxModels: 10,
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
        rules: [''],
        wargear: ["[Bolter]"],
        upgrades: [
            { type: "single", name: "Sergeant [Bolt Pistol] and [Close Combat Weapon]", points: 0, wargear: ["[Bolt Pistol] and [Close Combat Weapon]"] },
            {
                type: "single", name: "[Veteran Sergeant]", points: 15, wargear: ["[Bolt Pistol] and [Close Combat Weapon]"],
                children: [
                    { type: "single", name: "[Close Combat Weapon]", points: 1, wargear: ["[Close Combat Weapon]"] },
                    { type: "single", name: "[Power Weapon]", points: 15, wargear: ["[Power Weapon]"] },
                    { type: "single", name: "[Power Fist]", points: 25, wargear: ["[Power Fist]"] },
                    { type: "single", name: "[Bolter]", points: 2, wargear: ["[Bolter]"] },
                    { type: "single", name: "[Plasma Pistol]", points: 15, wargear: ["[Plasma Pistol]"] },
                    { type: "single", name: "[Storm Bolter]", points: 5, wargear: ["[Storm Bolter]"] },
                    { type: "single", name: "[Combi-flamer]", points: 10, wargear: ["[Combi-flamer]"] },
                    { type: "single", name: "[Combi-melta]", points: 15, wargear: ["[Combi-melta]"] },
                    { type: "single", name: "[Combi-plasma]", points: 15, wargear: ["[Combi-plasma]"] },
                ]
            },
            {
                type: "grouped",
                name: " Tac Heavy Upgrades",
                maxPer: 1,
                options: [
                    { name: "[Heavy Bolter]", points: 5, wargear: ["[Heavy Bolter]"] },
                    { name: "[Missile Launcher]", points: 10, wargear: ["[Missile Launcher]"] },
                    { name: "[Lascannon]", points: 15, wargear: ["[Lascannon]"] },
                ]
            },
            {
                type: "grouped",
                name: "Tac Burny Upgrades",
                maxPer: 1,
                options: [
                    { name: "[Flamer]", points: 6, wargear: ["[Flamer]"] },
                    { name: "[Meltagun]", points: 10, wargear: ["[Meltagun]"] },
                    { name: "[Plasma Gun]", points: 8, wargear: ["[Plasma Gun]"] },
                ]
            },
            { type: "perModel", name: "[Frag Grenades]", points: 1, wargear: ["[Frag Grenades]"] },
            { type: "perModel", name: "[Krak Grenades]", points: 2, wargear: ["[Krak Grenades]"] },


            { type: "single", name: "[Rhino Transport]", points: 0, wargear: ["[Rhino]"] },
            { type: "single", name: "[Razorback Transport]", points: 0, wargear: ["[Razorback]"] },
        ],
    },



    {
        name: "Scout Squad",
        category: "Troops",
        modelType: "[Infantry]",
        basePoints: 13,
        minModels: 5,
        maxModels: 10,
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
        wargear: ["[Bolt Pistol]", "[Close Combat Weapon]"],
        upgrades: [
            { type: "perModelLimited", name: "[Bolter]", points: 0, wargear: ["[Bolter]"] },
            { type: "perModelLimited", name: "[Sniper Rifle]", points: 5, wargear: ["[Sniper Rifle]"] },
            { type: "perModelLimited", name: "[Combat Shotgun]", points: 0, wargear: ["[Combat Shotgun]"] },
            { type: "limited", name: "[Heavy Bolter]", points: 15, maxPer: 1, wargear: ["[Heavy Bolter]"] },
            { type: "perModel", name: "[Frag Grenades]", points: 1, wargear: ["[Frag Grenades]"] },
            { type: "perModel", name: "[Krak Grenades]", points: 2, wargear: ["[Krak Grenades]"] },
            {
                type: "single", name: "[Veteran Sergeant]", points: 13,
                children: [
                    { type: "single", name: "[Close Combat Weapon]", points: 1, wargear: ["[Close Combat Weapon]"] },
                    { type: "single", name: "[Power Weapon]", points: 15, wargear: ["[Power Weapon]"] },
                    { type: "single", name: "[Power Fist]", points: 25, wargear: ["[Power Fist]"] },
                    { type: "single", name: "[Bolter]", points: 2, wargear: ["[Bolter]"] },
                    { type: "single", name: "[Plasma Pistol]", points: 15, wargear: ["[Plasma Pistol]"] },
                    { type: "single", name: "[Storm Bolter]", points: 5, wargear: ["[Storm Bolter]"] },
                    { type: "single", name: "[Combi-flamer]", points: 10, wargear: ["[Combi-flamer]"] },
                    { type: "single", name: "[Combi-melta]", points: 15, wargear: ["[Combi-melta]"] },
                    { type: "single", name: "[Combi-plasma]", points: 15, wargear: ["[Combi-plasma]"] },
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
        basePoints: 25,
        minModels: 5,
        maxModels: 10,
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

        rules: [''],
        wargear: ["[Bolt Pistol]", "[Close Combat Weapon]", "[Jump Packs]"],
        upgrades: [
            { type: "perModel", name: "[Krak Grenades]", points: 2, wargear: ["[Krak Grenades]"] },
            { type: "perModel", name: "[Melta Bombs]", points: 4, wargear: ["[Melta Bombs]"] },
            { type: "limited", name: "[Plasma Pistol]", points: 5, maxPer: 1, wargear: ["[Plasma Pistol]]"] },
            {
                type: "single", name: "[Veteran Sergeant]", points: 15,
                children: [
                    { type: "single", name: "[Close Combat Weapon]", points: 1, wargear: ["[Close Combat Weapon]"] },
                    { type: "single", name: "[Power Weapon]", points: 15, wargear: ["[Power Weapon]"] },
                    { type: "single", name: "[Power Fist]", points: 25, wargear: ["[Power Fist]"] },
                    { type: "single", name: "[Bolter]", points: 2, wargear: ["[Bolter]"] },
                    { type: "single", name: "[Plasma Pistol]", points: 15, wargear: ["[Plasma Pistol]"] },
                    { type: "single", name: "[Storm Bolter]", points: 5, wargear: ["[Storm Bolter]"] },
                    { type: "single", name: "[Combi-flamer]", points: 10, wargear: ["[Combi-flamer]"] },
                    { type: "single", name: "[Combi-melta]", points: 15, wargear: ["[Combi-melta]"] },
                    { type: "single", name: "[Combi-plasma]", points: 15, wargear: ["[Combi-plasma]"] },
                ],
            },
        ],
    },

    {
        name: "Bike Squadron",
        category: "Fast Attack",
        modelType: "Bike",
        basePoints: 35,
        minModels: 3,
        maxModels: 5,
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
        rules: [''],
        wargear: ["[Twin-Linked Bolters]", "[Bolt Pistol]"],
        upgrades: [
            { type: "single", name: "Sergeant [Close Combat Weapon]", points: 1, wargear: ["Sergeant [Close Combat Weapon]"] },

            {
                type: "single", name: "[Veteran Sergeant]", points: 15,
                children: [
                    { type: "single", name: "[Close Combat Weapon]", points: 1, wargear: ["[Close Combat Weapon]"] },
                    { type: "single", name: "[Power Weapon]", points: 15, wargear: ["[Power Weapon]"] },
                    { type: "single", name: "[Power Fist]", points: 25, wargear: ["[Power Fist]"] },
                    { type: "single", name: "[Bolter]", points: 2, wargear: ["[Bolter]"] },
                    { type: "single", name: "[Plasma Pistol]", points: 15, wargear: ["[Plasma Pistol]"] },
                    { type: "single", name: "[Storm Bolter]", points: 5, wargear: ["[Storm Bolter]"] },
                    { type: "single", name: "[Combi-flamer]", points: 10, wargear: ["[Combi-flamer]"] },
                    { type: "single", name: "[Combi-melta]", points: 15, wargear: ["[Combi-melta]"] },
                    { type: "single", name: "[Combi-plasma]", points: 15, wargear: ["[Combi-plasma]"] },
                ],
            },
            {
                type: "grouped",
                name: "Bike Special Weapons",
                maxPer: 2,
                options: [
                    { name: "[Flamer]", points: 3, wargear: ["[Flamer]"] },
                    { name: "[Meltagun]", points: 10, wargear: ["[Meltagun]"] },
                    { name: "[Plasma Gun]", points: 6, wargear: ["[Plasma Gun]"] },
                ]
            },
            {
                type: "single", name: "[Attack Bike]", points: 50, wargear: ["[Heavy Bolter]"],
                children: [
                    { type: "single", name: "[Multimelta]", points: 20, wargear: ["[Multimelta]"], removes: ["[Heavy Bolter]"] },
                ]
            },
        ],
    },

    {
        name: "Land Speeder Squadron",
        category: "Fast Attack",
        modelType: "[Vehicle], [Fast], [Skimmer]",
        isVehicle: true,
        basePoints: 50,
        minModels: 1,
        maxModels: 3,
        statline: [
            {
                name: "Land Speeder",
                armourFront: 10,
                armourSide: 10,
                armourRear: 10,
                BS: 4,
            },
        ],
        rules: [''],
        wargear: ["[Heavy Bolter]"],
        upgrades: [
            { type: "perModelLimited", name: "[Multimelta]", points: 15, wargear: ["[Multimelta]"] },
        ],
    },

    {
        name: "Land Speeder Tornado",
        category: "Fast Attack",
        modelType: "[Vehicle], [Fast], [Skimmer]",
        isVehicle: true,
        basePoints: 75,
        minModels: 1,
        maxModels: 1,
        statline: [
            {
                name: "Land Speeder",
                armourFront: 10,
                armourSide: 10,
                armourRear: 10,
                BS: 4,
            },
        ],
        rules: [''],
        wargear: ["[Heavy Bolter]", "[Multimelta]"],
        upgrades: [
            { type: "single", name: "[Heavy Flamer]", points: 0, wargear: ["[Heavy Flamer]"], removes: ["[Heavy Bolter]"] },
            { type: "single", name: "[Assault Cannon]", points: 0, wargear: ["[Assault Cannon]"], removes: ["[Multimelta]"] },
        ],
    },

    {
        name: "Attack Bike Squadron",
        category: "Fast Attack",
        modelType: "[Bike]",
        basePoints: 50,
        minModels: 1,
        maxModels: 3,
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
        rules: [''],
        wargear: ["[Twin-Linked Bolters]", "[Heavy Bolter]", "[Bolt Pistol]"],
        upgrades: [
            { type: "perModelLimited", name: "[Multimelta]", points: 15, wargear: ["[Multimelta]"] },
        ],
    },

    {
        name: "Devestator Squad",
        category: "Heavy Support",
        modelType: "Infantry",
        basePoints: 15,
        minModels: 1,
        maxModels: 10,
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
        rules: [''],
        wargear: ["[Bolter]"],
        upgrades: [
            { type: "single", name: "Sergeant [Bolt Pistol] and [Close Combat Weapon]", points: 0, wargear: ["[Bolt Pistol]", "[Close Combat Weapon]"] },
            {
                type: "single", name: "[Veteran Sergeant]", points: 15,
                children: [
                    { type: "single", name: "[Close Combat Weapon]", points: 1, wargear: ["[Close Combat Weapon]"] },
                    { type: "single", name: "[Power Weapon]", points: 15, wargear: ["[Power Weapon]"] },
                    { type: "single", name: "[Power Fist]", points: 25, wargear: ["[Power Fist]"] },
                    { type: "single", name: "[Bolter]", points: 2, wargear: ["[Bolter]"] },
                    { type: "single", name: "[Plasma Pistol]", points: 15, wargear: ["[Plasma Pistol]"] },
                    { type: "single", name: "[Storm Bolter]", points: 5, wargear: ["[Storm Bolter]"] },
                    { type: "single", name: "[Combi-flamer]", points: 10, wargear: ["[Combi-flamer]"] },
                    { type: "single", name: "[Combi-melta]", points: 15, wargear: ["[Combi-melta]"] },
                    { type: "single", name: "[Combi-plasma]", points: 15, wargear: ["[Combi-plasma]"] },
                ],
            },
            {
                type: "grouped",
                name: "Dev Special Weapons",
                maxPer: 4,
                options: [
                    { name: "[Heavy Bolter]", points: 15, wargear: ["[Heavy Bolter]"] },
                    { name: "[Missile Launcher]", points: 20, wargear: ["[Missile Launcher]"] },
                    { name: "[Lascannon]", points: 35, wargear: ["[Lascannon]"] },
                    { name: "[Multimelta]", points: 35, wargear: ["[Multimelta]"] },
                    { name: "[Plasma Cannon]", points: 35, wargear: ["[Plasma Cannon]"] },

                ]
            },
            { type: "single", name: "[Rhino Transport]", points: 0, wargear: ["[Rhino]"] },
            { type: "single", name: "[Razorback Transport]", points: 0, wargear: ["[Razorback]"] },
        ]
    },

    {
        name: "Whirlwind",
        category: "Heavy Support",
        modelType: "[Vehicle], [Tank]",
        basePoints: 75,
        minModels: 1,
        maxModels: 1,
        isVehicle: true,
        statline: [
            {
                name: "Whirlwind",
                armourFront: 11,
                armourSide: 11,
                armourRear: 10,
                BS: 4,
            },
        ],
        rules: [''],
        wargear: ["[Multiple Missile Launcher]"],
        upgrades: [
            { type: "single", name: "[Smoke Launchers]", points: 3, wargear: ["[Terminator Armor]", "[Storm Bolter]", "[Power Fist]"], }
        ],
    },

    {
        name: "Predator Annihilator",
        category: "Heavy Support",
        modelType: "[Vehicle], [Tank]",
        basePoints: 120,
        minModels: 1,
        maxModels: 1,
        isVehicle: true,
        statline: [
            {
                name: "Predator",
                armourFront: 13,
                armourSide: 11,
                armourRear: 10,
                BS: 4,
            },
        ],
        rules: [''],
        wargear: ["[Twin-Linked Lascannons]"],
        upgrades: [
            {
                type: "grouped",
                name: "Dev Special Weapons",
                maxPer: 2,
                options: [
                    { name: "[Heavy Bolter]", points: 10, wargear: ["[Heavy Bolter]"] },
                    { name: "[Lascannon]", points: 25, wargear: ["[Lascannon]"] },
                ]
            },
            { type: "single", name: "[Smoke Launchers]", points: 3, wargear: ["[Smoke Launchers]"], }
        ],
    },

    {
        name: "Predator Destructor",
        category: "Heavy Support",
        modelType: "[Vehicle], [Tank]",
        basePoints: 100,
        minModels: 1,
        maxModels: 1,
        isVehicle: true,
        statline: [
            {
                name: "Destructor",
                armourFront: 13,
                armourSide: 11,
                armourRear: 10,
                BS: 4,
            },
        ],
        rules: [''],
        wargear: ["[Autocannon]"],
        upgrades: [
            {
                type: "grouped",
                name: "Dev Special Weapons",
                maxPer: 1,
                options: [
                    { name: "2x [Heavy Bolter] Side sponsons", points: 10, wargear: ["2x [Heavy Bolter] Side sponsons"] },
                    { name: "2x [Lascannon] side sponsons", points: 25, wargear: ["2x [Lascannon] side sponsons"] },
                ]
            },
            { type: "single", name: "[Smoke Launchers]", points: 3, wargear: ["[Smoke Launchers]"], }
        ],
    },

    {
        name: "Land Raider",
        category: "Heavy Support",
        modelType: "[Vehicle], [Tank]",
        basePoints: 120,
        minModels: 1,
        maxModels: 1,
        isVehicle: true,
        statline: [
            {
                name: "Destructor",
                armourFront: 14,
                armourSide: 14,
                armourRear: 14,
                BS: 4,
            },
        ],
        rules: ['[Transport] (10 Space Marines or 5 Terminators)'],
        wargear: ["[Twin-Linked Lascannon] on each sponson", "[Twin-Linked Heavy Bolters]"],
        upgrades: [
            { type: "single", name: "[Smoke Launchers]", points: 3, wargear: ["[Terminator Armor]", "[Storm Bolter]", "[Power Fist]"], }
        ],
    },

    {
        name: "Dreadnought",
        category: "Heavy Support",
        modelType: "[Vehicle], [Walker]",
        basePoints: 75,
        minModels: 1,
        maxModels: 1,
        isDreadnought: true,
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
        rules: [''],
        wargear: ["[Dreadnought Close Combat Weapon]", "[Storm Bolter]"],
        upgrades: [
            {
                type: "grouped",
                name: "Dev Special Weapons",
                maxPer: 1,
                options: [
                    { name: "[Assault Cannon]", points: 30, wargear: ["[Assault Cannon]"] },
                    { name: "[Twin-Linked Lascannon]", points: 50, wargear: ["[Twin-Linked Lascannon]"] },
                    { name: "[Twin-Linked Heavy Bolter]", points: 30, wargear: ["[Twin-Linked Heavy Bolter]"] },
                    { name: "[Multimelta]", points: 40, wargear: ["[Multimelta]"] },
                    { name: "[Plasma Cannon]", points: 40, wargear: ["[Plasma Cannon]"] },
                    { name: "[Twin-Linked Autocanon]", points: 35, wargear: ["[Twin-Linked Autocannon]"] },
                ]

            },
            { type: "single", name: "[Heavy Flamer]", points: 10, wargear: ["[Heavy flamer]"], removes: ["[Storm Bolter]"] },
            { type: "single", name: "[Missile Launcher]", points: 10, statlineModifiers: { S: 6 }, wargear: ["[Missile Launcher]"], removes: ["[Dreadnought Close Combat Weapon]"] },
            { type: "single", name: "[Smoke Launchers]", points: 3, wargear: ["[Terminator Armor]", "[Storm Bolter]", "[Power Fist]"], }
        ],
    },

    {
        name: "Vindicator",
        category: "Heavy Support",
        modelType: "[Vehicle], [Tank]",
        basePoints: 120,
        minModels: 1,
        maxModels: 1,
        isVehicle: true,
        statline: [
            {
                name: "Destructor",
                armourFront: 13,
                armourSide: 11,
                armourRear: 10,
                BS: 4,
            },
        ],
        rules: [''],
        wargear: ["[Demolishor Cannon]", "[Storm Bolter]"],
        upgrades: [
            { type: "single", name: "[Smoke Launchers]", points: 3, wargear: ["[Terminator Armor]", "[Storm Bolter]", "[Power Fist]"], }
        ],
    },



];
