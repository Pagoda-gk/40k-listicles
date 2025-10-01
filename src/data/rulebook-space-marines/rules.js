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
    name: "Command Squad Unit",
    description: `This unit may be accompanied by a Command squad. Note that this unit and Command squad count as a single HQ choice and a single unit, meaning the this unit is no longer an Independent Character.`
  },
  {
    name: "Psychic Power - Smite",
    description: `The Librarian may use the Smite power in his own shooting phase. The Smite power counts as a weapon. Roll to hit as normal using the following profile:

  Range 12" Str 4 AP 2 [Assault] 1/[Blast].`
  },
  {
    name: "Psychic Power - Storm of Destruction",
    description: `Storm of Destruction is used in the assault phase and allows the Librarian to re-roll missed attacks for the turn.`
  }

];
