// data/factions.js
import * as darkEldar from "./dark-eldar";
import * as rulebookSpaceMarines from "./rulebook-space-marines";
import * as rulebookDarkEldar from "./rulebook-dark-eldar";
import * as rulebookTyranids from "./rulebook-tyranids";
import * as rulebookEldar from "./rulebook-eldar";

const factions = {
  "dark-eldar": {
    name: "Dark Eldar",
    system: "Warhammer 40k, 3rd Edition",
    ...darkEldar,
  },
  "rulebook-space-marines": {
    name: "Rulebook Space Marines",
    system: "Warhammer 40k, 3rd Edition",
    ...rulebookSpaceMarines,
  },
  "rulebook-dark-eldar": {
    name: "Rulebook Dark Eldar",
    system: "Warhammer 40k, 3rd Edition",
    ...rulebookDarkEldar,
  },
  "rulebook-tyranids": {
    name: "Rulebook Tyranids",
    system: "Warhammer 40k, 3rd Edition",
    ...rulebookTyranids,
  },
  "rulebook-eldar": {
    name: "Rulebook Eldar",
    system: "Warhammer 40k, 3rd Edition",
    ...rulebookEldar,
  },
};

export default factions;
