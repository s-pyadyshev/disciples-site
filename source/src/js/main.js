// require("ninelines-ua-parser");
import "lazysizes";
import "file-saver";

import tabs from "./modules/tabs";
import toggleByDataAttr from "./modules/toggleByDataAttr";
import saveImage from "./modules/image-saver";

const townNode = document.querySelector(".town");
const savePictureButton = document.querySelector(".btn--save");
const townData = [
  {
    town: ".empire",
    saveImage: ".btn--save-empire",
  },
  {
    town: ".undead",
    saveImage: ".btn--save-undead",
  },
  {
    town: ".clans",
    saveImage: ".btn--save-clans",
  },
  {
    town: ".legions",
    saveImage: ".btn--save-legions",
  },
  {
    town: ".elves",
    saveImage: ".btn--save-elves",
  },
];

window.addEventListener(
  "load",
  () => {
    tabs();
    toggleByDataAttr();

    if (townNode && savePictureButton) {
      townData.forEach((item) => saveImage(item.town, item.saveImage));
    }
  },
  false,
);
