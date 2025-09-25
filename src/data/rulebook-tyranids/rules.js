export const rules = [
  {
    // <-- this is the special one that lists the others
    name: "Faction Rules",
    description: "[None]",
  },
  {
    name: "Synapse Creature",
    description: `Any Tyranid unit with a model within 12\" of this creature automatically passes every [Morale Check] and tests to regroup, regardless of restrictions.`,
  },
  {
    name: "The Horror",
    description: `Any enemy that wishes to [Assault] this unit must take a standard [morale check]. If the check is failed, the unit will [Fall Back] as normal.`,
  },
  {
    name: "Chameleonic Scales",
    description: `This unit is always assumed to be in [Cover]. This provides them with a 5+ [Invulnerable Save] and allows the unit to strike first when assauled, unless the charging unit has [Frag Grenades].`,
  },
  {
    name: "Spore Mine",
    description: `This model moves 2D6" in a random direction in its player's movement phase. Spore Mines cannot make [Assault Moves]. If a Spore Mine moves within 1" of a non-Tyranid model then it explodes.

Place the [Large Blast Marker] over the spot where the Spore Mine explodes. Any model wholly under the Blast Marker is hit automatically; any model partially covered is hit on a 4+. Models that are hit take a S5 AP4 hit.

If a Spore Mine is reduced to 0 wounds or otherwise killed, it will explode as above. Spore Mines can't be used to capture territory but do not lose VP if destroyed.`,
  },
  {
    name: "Bounding Leap",
    description: `Hormagaunts move 6" like other troops, however in the assault phase they may assault up to 12" (double the distance of the dice roll if they move through difficult terrain).

Hormagaunts advance and fall back 3D6".`
  },
  {
    name: "Wings",
    description: `The user counts as being equipped with a [Jump Pack]`
  },


];
