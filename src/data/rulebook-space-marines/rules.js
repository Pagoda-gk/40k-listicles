export const rules = [
  {
    // <-- this is the special one that lists the others
    name: "Faction Rules",
    description: "[And they Shall Know No Fear], [Piratical Raiders]",
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
    name: "Retinue",
    description: `The Dark Eldar Lord may be joined by a **Retinue**.`,
  },
  {
    name: "Dodge",
    description: `4+ **Invulnerable save** in assault.`,
  },
  {
    name: "Combat Drugs",
    description: `Each unit rolls a D6 at the start of the battle:  

1. Make a 12" assault move and 3d6" pursuit or fall back  
2. +1 WS  
3. +1 S  
4. Always strikes first  
5. Reroll misses in close combat  
6. +1 Attack`,
  },
];
