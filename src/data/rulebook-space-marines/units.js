import ReactMarkdown from "react-markdown";

export const units = [
    {
        name: "Space Marine Hero",
        category: "HQ",
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
        wargear: ["[Bolter]", "[Close Combat Weapon]"],
        upgrades: [
            { type: "single", name: "[Sergeant]", points: 15, forced: true },
            { type: "single", name: "Sergeant [Bolt Pistol] and [Close Combat Weapon]", points: 0, wargear: ["[Bolt Pistol] and [Close Combat Weapon]"], },
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
                    { type: "single", name: "[Frag Grenades]", points: 3, wargear: ["[Frag Grenades]"] },
                    { type: "single", name: "[Krak Grenades]", points: 3, wargear: ["[Krak Grenades]"] },

                ]
            },
            {
                type: "grouped",
                name: "Special Weapons",
                maxPer: 2,
                options: [
                    { name: "Missile Launcher", points: 20 },
                    { name: "Heavy Bolter", points: 15 },
                    { name: "Lascannon", points: 35 },
                    { name: "Flamer", points: 3 },
                    { name: "Plasma Gun", points: 6 },
                    { name: "Meltagun", points: 10 }
                ]
            },
            { type: "perModel", name: "[Frag Grenades]", points: 1, wargear: ["Frag Grenades"] },
            { type: "perModel", name: "[Krak Grenades]", points: 2, wargear: ["Krak Grenades"] },
            { type: "single", name: "[Rhino Transport]", points: 50, wargear: ["[Rhino]"] },
            { type: "single", name: "[Razorback Transport]", points: 70, wargear: ["[Razorback]"] },
        ],
    },

    {
        name: "Terminator Squad",
        category: "Elites",
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
                name: "Special Weapons",
                maxPer: 2,
                options: [
                    { name: "Assault Cannon", points: 20 },
                    { name: "Heavy Flamer", points: 10 },
                    { name: "Cyclone Missile Launcher", points: 20 },
                ]
            },

        ],

    },
    {
        name: "Terminator Assault Squad",
        category: "Elites",
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
                name: "Melee upgrades",
                maxPer: 2,
                options: [
                    { name: "Lightning Claws (Count as Power fists)", points: 0 },
                    { name: "Thunder Hammer (Power Fist) and [Storm Shield]", points: 0 },
                ]
            },

        ],

    },

];
