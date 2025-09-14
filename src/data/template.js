/*
    
BASIC UNIT

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
                A: 2,  
                Ld: 9,  
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
            { type: "single", name: "Extra Wargear 2", points: 5, wargear: ["Something (Succubus)"]  },
        ],
    },


    HQs with profile and wargear options
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
                name: "Terminator Armor",
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
    */