export const rules = [
  {
    // <-- this is the special one that lists the others
    name: "Faction Rules",
    description: "[And they Shall Know No Fear]",
  },
  {
    name: "And they Shall Know No Fear",
    description: `Space marines automatically [Regroup] as they fall back, even if reduced below 50% starting size.
    This means if a [Sweeping Advance] catches them, they are not destroyed and instead it counts as a new combat next turn.`,
  },
  {
    name: "Terminator Armour",
    description: `This model may move and fire with [Heavy Weapons], however the model may only [Consolidate] after winning combat.
    As long as all models in the unit are wearing Terminator Armour the squad may set up using [Deep Strike], as long as the game allows it.
    NOTE a Hero may only take this if the army list has a Terminator unit.`,
  },
  {
    name: "Combi-Weapon",
    description: `This is essentially two weapons in one, and the weilder may choose which profile to use.  `,
  },

  {
    name: "Apothecary",
    description: `Ignore the first failed [Armour Save] in the Command Squad each turn.`,
  },

    {
    name: "Techmarine",
    description: `Allows you to re-roll one missed [To Hit] roll for shooting by the Command Squad each turn.`,
  },
      {
    name: "Standard",
    description: `Any Space Marine unit with a model within 6" of the Standard Bearer may add +1 to their Assault result score in an assault.
    In multiple combats you may only add +1 to the score no matter how many different units are involved.`,
  },
  {
    name: "Servo Arm",
    description: `Counts as [Power Fist]. The User may double the Strength characteristic up to a maximum of 10 when rolling to [Wound]
    This weapon always ignores [Armour Saves]
    This weapon always strikes last`,
  },
    {
    name: "Power Fist",
    description: `The User may double the Strength characteristic up to a maximum of 10 when rolling to [Wound]
    This weapon always ignores [Armour Saves]
    This weapon always strikes last`,
  },
];
