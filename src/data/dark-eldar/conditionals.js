// src/data/conditionals.js

export const conditionals = {
  wychCult: {
    description: "Wych Cult",
    modifyUnitType: (unit) => {
      if (unit.name === "Wych") {
        return { ...unit, type: "Troops" };
      }
      if (unit.name === "Kabalite Warriors") {
        return { ...unit, type: "Elites" };
      }
      return unit;
    },
    disallowSecondHQ: true,
  },
};
