/*


------------------------------UNIT BASICS-------------------------------------------
{
        name: "xxx",
        category: "HQ Troops Elites Fast Attack Heavy Support",
        modelType: "Vehicle",
        basePoints: 1,
        minModels: 1,
        maxModels: 1,
        unitLimit: 1,
        ignoreSlot: true,---------------<--DELETE THIS AS NECESSARY----------

-------------------VEHICLE STATS-------------------

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


        ---------------------------------BASIC STATLINE SET ------------------------------------

        statline: [
            {
                name: "",
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
                name: "",
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
            
            
            
            
            
            
        -------------------------------VARIANT STATLINE SET-------------------------------------

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





---------------------------------BASE PROFILE STUFF--------------------------

        rules: ['[XXX]', '[XXX]'],
        wargear: ["[XXX]", "[XXX]"],



        upgrades: [



        ------------------------------NESTED UPGRADES----------------------------------------
            {
                type: "single", name: "[Succubus]", points: 8,
                children: [
                    { type: "single", name: "[XXX]", points: 5, wargear: ["[XXX]"]  },
                    { type: "single", name: "[XXX]", points: 5, wargear: ["[XXX]"]  },
                ],
            },



            ------------------------BASIC UPGRADES-------------------------------------------

            { upgradeText: "XXX", type: "limited", name: "[XXX]", points: 15, maxPer: 2(delete for any model in the unit), wargear: ["[XXX]]"] },
            { upgradeText: "XXX", type: "perModel", name: "[XXX]", points: 4, wargear: ["[]"] },
            { upgradeText: "XXX", type: "single", name: "[XXX]", points: 5, wargear: ["[XXX]"], removes: ["[Bolt Pistol]"]},

            --------------------------FORCED------------------------------------
            { type: "single", name: "[XXX]", points: 5, wargear: ["[XXX]"], forced: true },

           -------------------GROUP LIMITED------------------------------------
            {
                type: "grouped",
                name: "Term Special Weapons",
                maxPer: 2 (delete for unit max),
                options: [
                    { name: "[Assault Cannon]", points: 20, wargear: ["[Assault Cannon]"] },
                    { name: "[Heavy Flamer]", points: 10, wargear: ["[Heavy Flamer]"] },
                    { name: "[Cyclone Missile Launcher]", points: 20, wargear: ["[Cyclone Missile Launcher]"] },
                ]
            },




            -----------------------STATLINE/WARGEAR AFFECTING UPGRADES--------------------------------------------
            upgrades: [
            {
                name: "Terminator Armor",
                type: "single",
                statlineModifiers: {S: 2, T: 5, Sv: "2+" },
                wargear: ["[Terminator Armor]", "[Storm Bolter]", "[Power Fist]"],
                removes: ["[Bolt Pistol]"],
                pointsByVariant: {
                    Leader: 15,
                    Commander: 20,
                    "Force Commander": 30
                },
            },
            { type: "single", name: "[Close Combat Weapon]", points: 1, wargear: ["[Close Combat Weapon]"] },
       
       
       -----------------------------------------------
        ],
}



    */