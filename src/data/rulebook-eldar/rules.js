export const rules = [
    {
    // <-- this is the special one that lists the others
    name: "Faction Rules",
    description: "None",
  },
  {
    name: "Rune Armour",
    description: `This model has an [Invulnerable Save] of 4+.`,
  },
    {
    name: "Witchblade",
    description: `A model with a witchblade always inflicts a wound on a roll of a 2+ in hand-to-hand combat (but only inflicts 1 wound with each hit). Armour saving throws are taken normally.

    Against vehicles, a witchblade allows the bearer to triple their Strength characteristic when working out armour penetration.`,
  },
      {
    name: "Psychic Power - Runesight",
    description: `At the start of every Eldar turn, the Farseer may attempt to use his Runesight to foresee the future.
    
    The Runesight allows a single unit within 6" of the Farseer to re-roll one of the following (declared at the time the Runesight is used): missed shooting to hit rolls or failed armour saves. No dice can be re-rolled more than once.
    
    This lasts until the start of the next Eldar turn.`,
  },
      {
    name: "Warlock",
    description: `Warlocks are characters, but may not move on their own. They must either remain in a unit with the Farseer, or they may be assigned to join Wraithguard or Guardian squads. If assigned to other squads then no more than one Warlock may join each unit.`,
  },
];

