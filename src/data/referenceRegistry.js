// src/data/referenceRegistry.js
import { gameRules } from "./gameRules";

export function buildReferenceRegistry({ rules, wargear, units}) {
  const normalize = (items, type) =>
    (items || []).map((item) => ({ ...item, _type: type }));

  const allItems = [
    ...normalize(gameRules, "gameRule"),
    ...normalize(rules || [], "rule"),
    ...normalize(wargear || [], "wargear"),
    ...normalize(units || [], "unit"),
  ];

  // Convert array to lookup object
  return allItems.reduce((acc, item) => {
    acc[item.name] = item;
    return acc;
  }, {});
}