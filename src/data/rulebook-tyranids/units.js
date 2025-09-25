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
    }



];
