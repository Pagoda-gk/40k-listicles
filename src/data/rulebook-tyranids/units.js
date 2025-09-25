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
                type: "perModelGrouped",
                name: "Warrior basic",
                maxPer: 1,
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


];
