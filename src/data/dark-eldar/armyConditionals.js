// src/data/armyConditionals.js

export const armyConditionals = [
  {
    _type: "conditional",
    name: "Wych Lord conditionals", // for registry lookup
    triggerUnit: "Wych Lord", // if this unit is in the army
    effects: [
      {
        target: "Wyches",
        changes: { category: "Troops" }, // Wyches count as Troops instead of Elites
      },
      {
        target: "Warriors",
        changes: { category: "Elites" }, // Warriors shift from Troops → Elites
      },
      {
        target: "Archon",
        changes: { disabled: true }, // Archon not allowed in this army
      },
    ],
  },
];
