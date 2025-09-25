import ReactMarkdown from "react-markdown";

export const units = [
    {
        name: "Hive Tyrant",
        category: "HQ",
        modelType: "[Monstrous Creature]",
        basePoints: 80,
        minModels: 1,
        maxModels: 1,
        statline: [
            {
                name: "Hive Tyrant",
                WS: 6,
                BS: 3,
                S: 6,
                T: 6,
                W: 4,
                I: 5,
                A: 4,
                Ld: 10,
                Sv: "5++",
            },
        ],
        rules: ["[Independent Character]", "[Synapse Creature]", '[The Horror]'],
        wargear: ["[Bone Sword]"],
        upgrades: [
            {
                type: "grouped",
                name: "Term Special Weapons",
                maxPer: 1,
                options: [
                    { name: "[Venom Cannon]", points: 25, wargear: ["[Venom Cannon]"] },
                    { name: "[Barbed Strangler]", points: 20, wargear: ["[Barbed Strangler]"] },
                ]
            },
            { type: "single", name: "[Flesh Hooks]", points: 1, wargear: ["[Flesh Hooks]"] },

        ],
    },
    {
        name: "Lictors",
        category: "Elites",
        modelType: "[Infantry]",
        basePoints: 65,
        minModels: 1,
        maxModels: 3,
        unitLimit: 1,
        statline: [
            {
                name: "Lictor",
                WS: 6,
                BS: 0,
                S: 6,
                T: 4,
                W: 3,
                I: 6,
                A: 3,
                Ld: 10,
                Sv: "5+",
            },
        ],
        rules: ["[Independent Character]", "[Fearless]", '[Chameleonic Scales]', '[Deep Strike]', '[Infiltrators]'],
        wargear: ["[Claws]"],
        upgrades: [
        ],
    },

    {
        name: "Tyranid Warrior Brood",
        category: "Elites",
        modelType: "[Infantry]",
        basePoints: 32,
        minModels: 3,
        maxModels: 6,
        statline: [
            {
                name: "Tyranid",
                WS: 5,
                BS: 3,
                S: 5,
                T: 4,
                W: 2,
                I: 5,
                A: 2,
                Ld: 10,
                Sv: "5+",
            },
        ],
        rules: ["[Synapse Creature]"],
        wargear: ["2x [Close Combat Weapon]"],
        upgrades: [
            {
                type: "grouped",
                name: "Warrior basic",
                options: [
                    { name: "[Deathspitter]", points: 8, wargear: ["[Deathspitter]"] },
                    { name: "[Devourer]", points: 3, wargear: ["[Devourer]"] },
                ]
            },
            {
                type: "grouped",
                name: "Warrior special weapons",
                maxPer: 1,
                options: [
                    { name: "[Venom Cannon]", points: 20, wargear: ["[Venom Cannon]"] },
                    { name: "[Barbed Strangler]", points: 15, wargear: ["[Barbed Strangler]"] },
                ]
            },
            { type: "perModel", name: "[Flesh Hooks]", points: 1, wargear: ["[Flesh Hooks]"] },
        ],
    },

    {
        name: "Genestealer Brood",
        category: "Troops",
        modelType: "[Infantry]",
        basePoints: 22,
        minModels: 5,
        maxModels: 10,
        statline: [
            {
                name: "Genestealer",
                WS: 6,
                BS: 0,
                S: 4,
                T: 4,
                W: 1,
                I: 6,
                A: 2,
                Ld: 10,
                Sv: "6+",
            },
        ],
        wargear: ["[Razor Sharp Claws]"],
    },



    {
        name: "Termagant Brood",
        category: "Troops",
        modelType: "[Infantry]",
        basePoints: 7,
        minModels: 10,
        maxModels: 30,
        statline: [
            {
                name: "Termagants",
                WS: 3,
                BS: 3,
                S: 3,
                T: 3,
                W: 1,
                I: 4,
                A: 1,
                Ld: 5,
                Sv: "6+",
            },
        ],
        wargear: ["[Fleshborer]"],
    },

    {
        name: "Ripper Swarms",
        category: "Troops",
        basePoints: 12,
        minModels: 1,
        maxModels: 5,
        statline: [
            {
                name: "Ripper Base",
                WS: 3,
                BS: 0,
                S: 3,
                T: 3,
                W: 3,
                I: 1,
                A: 3,
                Ld: 10,
                Sv: "6+",
            },
        ],
        rules: ["[Fearless]"],
        wargear: ["Jaws"],
    },

    {
        name: "Spore Mines",
        category: "Troops",
        basePoints: 5,
        minModels: 1,
        maxModels: 10,
        unitLimit: 1,
        statline: [
            {
                name: "Spore Mine",
                WS: 0,
                BS: 0,
                S: 1,
                T: 4,
                W: 1,
                I: 1,
                A: 0,
                Ld: 10,
                Sv: "-",
            },
        ],
        rules: ["[Individual]", "[Fearless]", "[Spore Mine]"],
    },
    {
        name: "Hormagaunt Broods",
        category: "Fast Attack",
        basePoints: 5,
        minModels: 10,
        maxModels: 20,
        statline: [
            {
                name: "Hormagaunt",
                WS: 4,
                BS: 3,
                S: 3,
                T: 3,
                W: 1,
                I: 4,
                A: 1,
                Ld: 5,
                Sv: "6+",
            },
        ],
        wargear: ["Claws"],
        rules: ["[Bounding Leap]"],

    },
    {
        name: "Gargoyle Brood",
        category: "Fast Attack",
        basePoints: 10,
        minModels: 5,
        maxModels: 10,
        statline: [
            {
                name: "Hormagaunt",
                WS: 4,
                BS: 3,
                S: 3,
                T: 3,
                W: 1,
                I: 4,
                A: 1,
                Ld: 5,
                Sv: "6+",
            },
        ],
        wargear: ["[Fleshborer]"],
        rules: ["[Wings]", "[Deep Strike]"],

    },
    {
        name: "Carnifex",
        category: "Heavy Support",
        modelType: "[Monstrous Creature]",
        basePoints: 90,
        minModels: 1,
        maxModels: 1,
        statline: [
            {
                name: "Carnifex",
                WS: 4,
                BS: 3,
                S: 10,
                T: 6,
                W: 4,
                I: 2,
                A: 3,
                Ld: 10,
                Sv: "5++",
            },
        ],
        wargear: ["[Claws]"],
        upgrades: [
            { type: "single", name: "[Bio-Plasma]", points: 15, wargear: ["[Bio-Plasma]"] },

        ],
    },

    {
        name: "Zoanthropes",
        category: "Heavy Support",
        basePoints: 40,
        minModels: 1,
        maxModels: 3,
        unitLimit: 1,
        statline: [
            {
                name: "Zoanthrope",
                WS: 3,
                BS: 3,
                S: 4,
                T: 4,
                W: 2,
                I: 4,
                A: 2,
                Ld: 10,
                Sv: "2+",
            },
        ],
        rules: ["[Individual]", "[Fearless]"],
        wargear: ["[Claws]", "[Warp Blast]"],
        upgrades: [
            { type: "single", name: "[Flesh Hooks]", points: 1, wargear: ["[Flesh Hooks]"] },

        ],
    },

        {
        name: "Biovores",
        category: "Heavy Support",
        basePoints: 50,
        minModels: 1,
        maxModels: 3,
        unitLimit: 1,
        statline: [
            {
                name: "Zoanthrope",
                WS: 3,
                BS: 3,
                S: 3,
                T: 4,
                W: 2,
                I: 1,
                A: 1,
                Ld: 10,
                Sv: "-",
            },
        ],
        rules: ["[Individual]"],
        wargear: ["[Jaws]", "[Fire Spore Mine]"],
        upgrades: [
        ],
    },

];
