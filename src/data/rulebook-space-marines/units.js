import ReactMarkdown from "react-markdown";

export const units = [
    {
        name: "Space Marine Hero - Leader",
        category: "HQ",
        basePoints: 30,
        minModels: 1,
        maxModels: 1,
        statline: [
            {
                name: "Leader",
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
                name: "Leader (Terminator Armour)",
                WS: 4,
                BS: 4,
                S: 4,
                T: 4,
                W: 1,
                I: 4,
                A: 2,
                Ld: 9,
                Sv: "2+",

            }
        ],
        rules: ["[Independent Character]", "[Command Squad]"],
        wargear: ["[Bolt Pistol] (basic), [Storm Bolter] and [Power Fist] (Terminator upgrade)"],
        upgrades: [
            { type: "single", name: "[Terminator Armour]", points: 15, wargear: ["[Terminator Armour]"] },
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
            { type: "perModel", name: "[Frag Grenades]", points: 1, wargear: ["Frag Grenades"] },
            { type: "perModel", name: "[Krak Grenades]", points: 2, wargear: ["Krak Grenades"] },

        ],

    },
    {
        name: "Space Marine Hero - Commander",
        category: "HQ",
        basePoints: 45,
        minModels: 1,
        maxModels: 1,
        statline: [
            {
                name: "Commander",
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
                name: "Commander (Terminator Armour)",
                WS: 5,
                BS: 5,
                S: 4,
                T: 4,
                W: 2,
                I: 4,
                A: 3,
                Ld: 9,
                Sv: "2+",

            }
        ],
        rules: ["[Independent Character]", "[Command Squad]"],
        wargear: ["[Bolt Pistol] (basic), [Storm Bolter] and [Power Fist] (Terminator upgrade)"],
        upgrades: [
            { type: "single", name: "[Terminator Armour]", points: 20, wargear: ["[Terminator Armour]"] },
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
        name: "Space Marine Hero - Force Commander",
        category: "HQ",
        basePoints: 60,
        minModels: 1,
        maxModels: 1,
        statline: [
            {
                name: "Force Commander",
                WS: 5,
                BS: 5,
                S: 4,
                T: 4,
                W: 3,
                I: 5,
                A: 3,
                Ld: 10,
                Sv: "3+",

            },
            {
                name: "Force Commander (Terminator Armour)",
                WS: 5,
                BS: 5,
                S: 4,
                T: 4,
                W: 3,
                I: 4,
                A: 3,
                Ld: 10,
                Sv: "2+",

            }
        ],
        rules: ["[Independent Character]", "[Command Squad]"],
        wargear: ["[Bolt Pistol] (basic), [Storm Bolter] and [Power Fist] (Terminator upgrade)"],
        upgrades: [
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
            {
                name: "Force Commander (Terminator Armour)",
                WS: 5,
                BS: 5,
                S: 4,
                T: 4,
                W: 2,
                I: 5,
                A: 3,
                Ld: 9,
                Sv: "2+",

            }
        ],
        rules: ["[Independent Character]", "[Command Squad]", "[Psychic Power - Smite]", "[Psychic Power - Storm of Destruction]"],
        wargear: ["[Bolt Pistol], Force Weapon (counts as [Power Weapon]) (basic), [Storm Bolter] and Force Weapon (counts as [Power Weapon]) (Terminator upgrade)"],
        upgrades: [
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
            {
                name: "Chaplain (Space Marine Bike)",
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
            {
                name: "Chaplain (Terminator Armour)",
                WS: 5,
                BS: 5,
                S: 4,
                T: 4,
                W: 2,
                I: 5,
                A: 3,
                Ld: 9,
                Sv: "2+/4++",

            }
        ],
        rules: ["[Independent Character]", "[Command Squad]"],
        wargear: ["[Rosarius] and: [Bolt Pistol] and [Crozius Arcanum] (basic), [Twin-Linked] [Bolter] and [Crozius Arcanum] (Space Marine Bike upgrade)"],
        upgrades: [
            { type: "single", name: "[Space Marine Bike]", points: 25, wargear: ["[Space Marine Bike]"] },
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
        name: "Command Squad",
        category: "HQ",
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
