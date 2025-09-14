import ReactMarkdown from "react-markdown";

export const units = [
    {
        name: "Lord - Archon",
        category: "HQ",
        basePoints: 60,
        minModels: 1,
        maxModels: 1,
        statline: [
            {
                name: "Archon",
                WS: 6,
                BS: 6,
                S: 3,
                T: 3,
                W: 3,
                I: 7,
                A: 3,
                Ld: 9,
                Sv: "5+",

            }
        ],
        rules: ["[Independent Character]", "[Retinue]"],
        wargear: ["[Splinter Pistol]"],
        upgrades: [
            { type: "single", name: "[Agoniser]", points: 20, wargear: ["[Agoniser]"] },
            { type: "single", name: "[Close Combat Weapon]", points: 1, wargear: ["[Close Combat Weapon]"] },
            { type: "single", name: "[Power Weapon]", points: 10, wargear: ["[Power Weapon]"] },
            { type: "single", name: "[Poisoned Blades]", points: 5, wargear: ["[Poisoned Blades]"] },

        ],

    },
    {
        name: "Lord - Dracon",
        category: "HQ",
        basePoints: 35,
        minModels: 1,
        maxModels: 1,
        statline: [
            {
                name: "Dracon",
                WS: 5,
                BS: 5,
                S: 3,
                T: 3,
                W: 2,
                I: 6,
                A: 2,
                Ld: 9,
                Sv: "5+",

            }
        ],
        rules: ["[Independent Character]", "[Retinue]"],
        wargear: ["[Splinter Pistol]"],
        upgrades: [
            { type: "single", name: "[Agoniser]", points: 20, wargear: ["[Agoniser]"] },
            { type: "single", name: "[Close Combat Weapon]", points: 1, wargear: ["[Close Combat Weapon]"] },
            { type: "single", name: "[Power Weapon]", points: 10, wargear: ["[Power Weapon]"] },
            { type: "single", name: "[Poisoned Blades]", points: 5, wargear: ["[Poisoned Blades]"] },

        ],

    },
    {
        name: "Wych Lord - Archite",
        category: "HQ",
        basePoints: 70,
        minModels: 1,
        maxModels: 1,
        statline: [
            {
                name: "Archite",
                WS: 6,
                BS: 6,
                S: 3,
                T: 3,
                W: 3,
                I: 8,
                A: 3,
                Ld: 9,
                Sv: "6+",
            }
        ],
        rules: ["[Independent Character]", "[Retinue]", "[Dodge]"],
        wargear: ["[Splinter Pistol]", "[Wych Weapons]"],
        upgrades: [
            { type: "single", name: "[Agoniser]", points: 20, wargear: ["[Agoniser]"] },
            { type: "single", name: "[Close Combat Weapon]", points: 1, wargear: ["[Close Combat Weapon]"] },
            { type: "single", name: "[Power Weapon]", points: 10, wargear: ["[Power Weapon]"] },
            { type: "single", name: "[Poisoned Blades]", points: 5, wargear: ["[Poisoned Blades]"] },

        ],
    },
        {
        name: "Wych Lord - Dracite",
        category: "HQ",
        basePoints: 45,
        minModels: 1,
        maxModels: 1,
        statline: [
            {
                name: "Dracite",
                WS: 6,
                BS: 6,
                S: 3,
                T: 3,
                W: 3,
                I: 8,
                A: 3,
                Ld: 9,
                Sv: "6+",
            }
        ],
        rules: ["[Independent Character]", "[Retinue]", "[Dodge]"],
        wargear: ["[Splinter Pistol]", "[Wych Weapons]"],
        upgrades: [
            { type: "single", name: "[Agoniser]", points: 20, wargear: ["[Agoniser]"] },
            { type: "single", name: "[Close Combat Weapon]", points: 1, wargear: ["[Close Combat Weapon]"] },
            { type: "single", name: "[Power Weapon]", points: 10, wargear: ["[Power Weapon]"] },
            { type: "single", name: "[Poisoned Blades]", points: 5, wargear: ["[Poisoned Blades]"] },

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
                    { type: "single", name: "Extra Wargear 1", points: 5, wargear: ["Blaster (Succubus)"]  },
                    { type: "single", name: "Extra Wargear 2", points: 5, wargear: ["Something (Succubus)"]  },
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
