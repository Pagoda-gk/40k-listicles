// data/factions.js
import * as darkEldar from "./dark-eldar";
import * as rulebookSpaceMarines from "./rulebook-space-marines";

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
};

export default factions;
