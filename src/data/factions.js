// data/factions.js
import * as darkEldar from "./dark-eldar";

const factions = {
  "dark-eldar": {
    name: "Dark Eldar",
    system: "Warhammer 40k, 3rd Edition",
    ...darkEldar,
   },
};

export default factions;
