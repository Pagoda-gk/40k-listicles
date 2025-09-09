// src/data/referenceRegistry.js
import { gameRules } from "./gameRules";

export function buildReferenceRegistry({ rules, wargear, units }) {
  // Ensure everything has a type field for clarity
  const normalize = (items, type) =>
    items.map((item) => ({ ...item, _type: type }));

  return [
    ...normalize(gameRules, "gameRule"),
    ...normalize(rules || [], "rule"),
    ...normalize(wargear || [], "wargear"),
    ...normalize(units || [], "unit"),
  ];
}
