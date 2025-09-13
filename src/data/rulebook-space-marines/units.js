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
            { type: "single", name: "[Krak Grenades]", points: 3, wargear: ["[Krak Grenades]"] }
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
            {
                type: "single", name: "[Succubus]", points: 8,
                children: [
                    { type: "single", name: "Extra Wargear 1", points: 5, wargear: ["Blaster (Succubus)"] },
                    { type: "single", name: "Extra Wargear 2", points: 5, wargear: ["Something (Succubus)"] },
                ],
            },
            { type: "limited", name: "[Blaster]", points: 15, maxPer: 2, wargear: ["Blaster"] },
            { type: "perModel", name: "[Haywire Grenades]", points: 4, wargear: ["Haywire Grenades"] },
            { type: "perModel", name: "[Plasma Grenades]", points: 1, wargear: ["Plasma Grenades"] },
            { type: "perModel", name: "[Wych Weapons]", points: 1, wargear: ["Wych Weapons"] },
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
