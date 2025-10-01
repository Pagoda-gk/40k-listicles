// src/data/wargear.js
export const wargear = [

  //Assault

  {
    name: "Chainfist",
    description: 'The user may double it\'s Strength characteristic up to a maximum of 10 when rolling to wound. This weapon ignores all [Armour Saves]. The user always strikes last.',
    cost: 25,
  },
  {
    name: "Crozius Arcanum",
    description: 'Counts as a [Power Weapon] and ignores all [Armour Saves].',
    cost: 25,
  },
  {
    name: "Servo Arm",
    description: `Counts as [Power Fist]. The User may double the Strength characteristic up to a maximum of 10 when rolling to [Wound]
    This weapon always ignores [Armour Saves]
    This weapon always strikes last`,
  },
  {
    name: "Power Sword",
    description: `Uses users strength to wound and ignores [Armour Saves].`,
  },




  //Ranged
  {
    name: "Bolt Pistol",
    description: `12" Str 4, AP 5, [Pistol]`,
  },
  {
    name: "Bolter",
    description: "24\" Str 4, AP 5, Rapid Fire.",
    cost: 2,
  },
  {
    name: "Boltgun",
    description: "24\" Str 4, AP 5, Rapid Fire.",
  },
  {
    name: "Storm Bolter",
    description: "24\" Str 4, AP 5, [Assault] 2.",
  },
  {
    name: "Heavy Bolter",
    description: "36\" Str 5, AP 4, [Heavy] 3.",
  },
  {
    name: "Shotgun",
    description: "12\" Str 3, AP -, [Assault] 2.",
  },
  {
    name: "Assault Cannon",
    description: "24\" Str 6, AP 4, [Heavy] 3, [Jam].",
  },
  {
    name: "Autocannon",
    description: "48\" Str 7, AP 4, [Heavy] 2.",
  },
  {
    name: "Lascannon",
    description: "48\" Str 9, AP 2, [Heavy] 1.",
  },
  {
    name: "Flamer",
    description: `Template Str 4, AP 5, [Assault] 1`,
  },
  {
    name: "Heavy Flamer",
    description: `Template Str 5, AP 4, [Assault] 1`,
  },
  {
    name: "Meltagun",
    description: `12" Str 8, AP 1, [Assault] 1`,
  },
  {
    name: "Multimelta",
    description: `24" Str 8, AP 1, [Heavy] 1, [Melta]`,
  },
  {
    name: "Sniper Rifle",
    description: `36" Str X, AP 6, [Heavy] 1, [Sniper]`,
  },
  {
    name: "Missile Launcher",
    description: `This weapon has two firing modes, chose when firing.
    
    Krak: 48" Str 8, AP 3, [Heavy] 1
    
    Frag: 48" Str 4, AP 6 [Heavy] 1, [Blast]`,
  },
  {
    name: "Plasma Pistol",
    description: "12\" Str 4, AP 5, [Assault] 2, [Get Hot!].",
  },
  {
    name: "Plasma Gun",
    description: "24\" Str 7, AP 2, [Rapid Fire], [Get Hot!].",
  },
  {
    name: "Plasma Cannon",
    description: "36\" Str 7, AP 2, [Heavy] 1, [Blast], [Get Hot!].",
  },

  {
    name: "Combi-Flamer",
    description: `This weapon has two firing modes, chose when firing.
    
    Boltgun: 24" Str 4, AP 5, Rapid Fire.

    Flamer: Template Str 4, AP 5, [Assault] 1`,
  },
  {
    name: "Combi-Melta",
    description: `This weapon has two firing modes, chose when firing.

    Boltgun: 24" Str 4, AP 5, Rapid Fire.
    
    Meltagun: 12" Str 8, AP 1, [Assault] 1
    `,
  },
  {
    name: "Combi-Plasma",
    description: `This weapon has two firing modes, chose when firing.

    Boltgun: 24" Str 4, AP 5, Rapid Fire.
    
    Plasma Gun: 24\" Str 7, AP 2, [Rapid Fire], [Get Hot!]`,
  },








  //Wargear

  {
    name: "Rosarius",
    description: "The wearer gets a 4+ [Invulnerable Save].",
  },

  {
    name: "Storm Shield",
    description: " The user gains a 4+ [Invulnerable Save]."
  },

  {
    name: "Terminator Armour",
    description: `Provides a 2+ save and the model may move and fire with [Heavy Weapons], however the model may only [Consolidate] after winning combat.
    
    As long as all models in the unit are wearing Terminator Armour the squad may set up using [Deep Strike], as long as the game allows it.`,
  },
];
