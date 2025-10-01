import ReactMarkdown from "react-markdown";

export const units = [
    {
        name: "Hive Tyrant",
        category: "HQ",
        modelType: "[Monstrous Creature]",
        unitComp: [
            {
                type: "singleVariant",
                compText: "One Hive Tyrant.",
                entries: [
                    {
                        name: "Hive Tyrant",
                        basePoints: 80,
                        wargearEach: ["[Bone Sword]"]
                    },
                ]
            },
        ],
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
        upgrades: [
            {
                type: "grouped",
                name: "Hive tyr Weapons",
                maxPer: 1,
                user: "Hive Tyrant",
                options: [
                    { user: "Hive Tyrant", name: "[Venom Cannon]", points: 25, wargearEach: ["[Venom Cannon]"] },
                    { user: "Hive Tyrant", name: "[Barbed Strangler]", points: 20, wargearEach: ["[Barbed Strangler]"] },
                ]
            },
            { type: "single", name: "[Flesh Hooks]", points: 1, wargearMain: ["[Flesh Hooks]"] },

        ],
    },
    {
        name: "Lictors",
        category: "Elites",
        modelType: "[Infantry]",
        unitLimit: 1,
        unitComp: [
            {
                type: "corePool",
                compText: "May take between 1 and 3 Lictors which take up a single Elites choice.",
                minTotal: 1,
                maxTotal: 3,
                entries: [
                    {
                        name: "Lictor",
                        basePoints: 65,
                        min: 0,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Claws]"]
                    },
                ]
            },
        ],
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
        upgrades: [
        ],
    },

    {
        name: "Tyranid Warrior Brood",
        category: "Elites",
        modelType: "[Infantry]",
        unitComp: [
            {
                type: "corePool",
                compText: "The brood consists of between 3 and 6 Tyranid Warriors.",
                minTotal: 3,
                maxTotal: 6,
                entries: [
                    {
                        name: "Tyranid",
                        basePoints: 32,
                        min: 0,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["2x [Close Combat Weapon]"]
                    },
                ]
            },
        ],
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
        upgrades: [
            {
                type: "grouped",
                name: "Warrior basic",
                upgadeText: "Any model may replace 2x Close Combat Weapons with:",
                user: "Tyranid",
                options: [
                    { user: "Tyranid", name: "[Deathspitter]", points: 8, wargearEach: ["[Deathspitter]"], removes: ["2x [Close Combat Weapon]"] },
                    { user: "Tyranid", name: "[Devourer]", points: 3, wargearEach: ["[Devourer]"], removes: ["2x [Close Combat Weapon]"] },
                ]
            },
            {
                type: "grouped",
                name: "Warrior special weapons",
                maxPer: 1,
                user: "Tyranid",
                options: [
                    { user: "Tyranid", name: "[Venom Cannon]", points: 20, wargearEach: ["[Venom Cannon]"] },
                    { user: "Tyranid", name: "[Barbed Strangler]", points: 15, wargearEach: ["[Barbed Strangler]"] },
                ]
            },
            { type: "perModel", name: "[Flesh Hooks]", points: 1, wargearMain: ["[Flesh Hooks]"] },
        ],
    },

    {
        name: "Genestealer Brood",
        category: "Troops",
        modelType: "[Infantry]",
        unitComp: [
            {
                type: "corePool",
                compText: "The brood consists of between 5 and 10 Genestealers.",
                minTotal: 5,
                maxTotal: 10,
                entries: [
                    {
                        name: "Genestealer",
                        basePoints: 22,
                        min: 0,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Razor-Sharp Claws]"]
                    },
                ]
            },
        ],
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
        unitComp: [
            {
                type: "corePool",
                compText: "The brood consists of between 10 and 30 Termagants.",
                minTotal: 10,
                maxTotal: 30,
                entries: [
                    {
                        name: "Termagants",
                        basePoints: 7,
                        min: 0,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Fleshborer]"]
                    },
                ]
            },
        ],
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
    },

    {
        name: "Ripper Swarms",
        category: "Troops",
         unitComp: [
            {
                type: "corePool",
                compText: "A Ripper Swarm consists of between 1 and 5 Ripper bases.",
                minTotal: 1,
                maxTotal: 5,
                entries: [
                    {
                        name: "Ripper Base",
                        basePoints: 12,
                        min: 0,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Jaws]"]
                    },
                ]
            },
        ],
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
    },

    {
        name: "Spore Mines",
        category: "Troops",
        basePoints: 5,
        minModels: 1,
        maxModels: 10,
        unitLimit: 1,
         unitComp: [
            {
                type: "corePool",
                compText: "You may include between 1 and 10 Spore Mines as a single Troops Choice.",
                minTotal: 1,
                maxTotal: 10,
                entries: [
                    {
                        name: "Spore Mine",
                        basePoints: 5,
                        min: 0,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                       
                    },
                ]
            },
        ],
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
        unitComp: [
            {
                type: "corePool",
                compText: "The brood consists of between 10 and 20 Hormagaunts.",
                minTotal: 10,
                maxTotal: 20,
                entries: [
                    {
                        name: "Hormagaunt",
                        basePoints: 6,
                        min: 0,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["Claws"]
                    },
                ]
            },
        ],
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
        rules: ["[Bounding Leap]"],

    },
    {
        name: "Gargoyle Brood",
        category: "Fast Attack",
        unitComp: [
            {
                type: "corePool",
                compText: "The brood consists of between 5 and 10 Gargoyles.",
                minTotal: 5,
                maxTotal: 10,
                entries: [
                    {
                        name: "Gargoyle",
                        basePoints: 10,
                        min: 0,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["[Fleshborer]"]
                    },
                ]
            },
        ],
        statline: [
            {
                name: "Gargoyle",
                WS: 3,
                BS: 3,
                S: 3,
                T: 3,
                W: 1,
                I: 4,
                A: 1,
                Ld: 10,
                Sv: "6+",
            },
        ],
        rules: ["[Wings]", "[Deep Strike]"],

    },
    {
        name: "Carnifex",
        category: "Heavy Support",
        modelType: "[Monstrous Creature]",
         unitComp: [
            {
                type: "singleVariant",
                compText: "One Carnifex.",
                entries: [
                    {
                        name: "Carnifex",
                        basePoints: 90,
                        wargearEach: ["Claws"]
                    },
                ]
            },
        ],
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
        upgrades: [
            { user: "Carnifex", type: "single", name: "[Bio-Plasma]", points: 15, wargearEach: ["[Bio-Plasma]"] },

        ],
    },

    {
        name: "Zoanthropes",
        category: "Heavy Support",
        unitLimit: 1,
         unitComp: [
            {
                type: "corePool",
                compText: "You may include between 1 and 3 Zoanthropes as a single Heavy Support choice. Each is an Independent Character.",
                minTotal: 1,
                maxTotal: 3,
                entries: [
                    {
                        name: "Zoanthrope",
                        basePoints: 40,
                        min: 0,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["Claws", "[Warp Blast]"]
                    },
                ]
            },
        ],
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
        upgrades: [
            { upgradeText: "Any Zoanthrope may take", user: "Zoanthrope", type: "limited", name: "[Flesh Hooks]", points: 1, wargearEach: ["[Flesh Hooks]"] },

        ],
    },

    {
        name: "Biovores",
        category: "Heavy Support",
        unitLimit: 1,
        unitComp: [
            {
                type: "corePool",
                compText: "You may include between 1 and 3 Biovores as a single Heavy Support choice. Each is an Independent Character.",
                minTotal: 1,
                maxTotal: 3,
                entries: [
                    {
                        name: "Biovore",
                        basePoints: 50,
                        min: 0,          // each entry can have its own min/max
                        max: null,       // null means “no explicit cap except the pool”
                        wargearEach: ["Jaws", "[Fire Spore Mine]"]
                    },
                ]
            },
        ],
        statline: [
            {
                name: "Biovore",
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
        upgrades: [
        ],
    },

];
