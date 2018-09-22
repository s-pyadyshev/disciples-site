'use strict';

import buildTown from './modules/town-builder';
import * as imageSaver from './modules/image-saver';

buildTown('.empire', '.build--empire');
buildTown('.undead', '.build--undead');
buildTown('.clans', '.build--clans');
buildTown('.legions', '.build--legions');

imageSaver.saveImage('.empire', '.btn--save-empire');
imageSaver.saveImage('.undead', '.btn--save-undead');
imageSaver.saveImage('.clans', '.btn--save-clans');
imageSaver.saveImage('.legions', '.btn--save-legions');