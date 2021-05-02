require("ninelines-ua-parser");
import "lazysizes";
import "file-saver";

import tabs from "./modules/tabs";

import buildTown from "./modules/town-builder";
import saveImage from "./modules/image-saver";

buildTown(".empire", ".build--empire");
buildTown(".undead", ".build--undead");
buildTown(".clans", ".build--clans");
buildTown(".legions", ".build--legions");
buildTown(".elves", ".build--elves");

saveImage(".empire", ".btn--save-empire");
saveImage(".undead", ".btn--save-undead");
saveImage(".clans", ".btn--save-clans");
saveImage(".legions", ".btn--save-legions");
saveImage(".elves", ".btn--save-elves");

tabs();
