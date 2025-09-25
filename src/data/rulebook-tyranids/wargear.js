// src/data/wargear.js
export const wargear = [

  //Hand to Hand weapons

  {
    name: "Bone Sword",
    description: "Counts as a [Close Combat Weapon].",
  },
  {
    name: "Lash Whip",
    description: "Counts as a [Close Combat Weapon].",
  },
  {
    name: "Spine Fist",
    description: "Counts as a [Close Combat Weapon].",
  },
  {
    name: "Flesh Hooks",
    description: "When the user charges a model in cover, the target does not count as being in cover for the purpose of the charge.",
    cost: 5,
  },

  //Ranged weapons

  {
    name: "Venom Cannon",
    description: "36\" Str8, AP 4, Assault 2.",
  },
  {
    name: "Bio-Plasma",
    description: "Template Str 5, AP 4, Assault 1.",
  },
  {
    name: "Barbed Strangler",
    description: "24\" Str 4, AP 5, Assault 1, 5\" [Blast].",
  },
  {
    name: "Deathspitter",
    description: "18\" Str 6, AP 5, Assault 1, [Blast].",
    cost: 10,
  },
  {
    name: "Devourer",
    description: "12\" Str 4, AP 5, Assault 4.",
    cost: 10,
  },
  {
    name: "Fleshborer",
    description: "12\" Str 4, AP -, Heavy 1, Assault 1.",
    cost: 10,
  },
  {
    name: "Warp Blast",
    description: "24\" Str 6, AP 2, Assault 1, [Blast].",
    cost: 10,
  },

  //Wargear


  // unit specific

  {
    name: "Razor Sharp Claws",
    description: "Counts as a [Power Weapon]"
  },
  {
    name: "Fire Spore Mine",
    description: `The Biovore fires a deadly living bomb towards the enemy. Place a Spore Mine model anywhere within 48" of the Biovore. Roll the Scatter dice and 2D6 and reposition the Spore Mine accordingly. If a hit is rolled then the Spore Mine is bang on target and doesn't scatter.

    Follow the rules for [Spore Mine].

    Weapon Profile:
Range Guess 48", Str5, AP4, Heavy 1`
  },


];
