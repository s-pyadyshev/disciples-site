'use strict';

import * as townBuilder from './modules/town-builder';
import * as imageSaver from './image-saver';

townBuilder.buildTown('.empire', '.build--empire');
townBuilder.buildTown('.undead', '.build--undead');
townBuilder.buildTown('.clans', '.build--clans');
townBuilder.buildTown('.legions', '.build--legions');

imageSaver.saveImage('.empire', '.btn--save-empire');
imageSaver.saveImage('.undead', '.btn--save-undead');
imageSaver.saveImage('.clans', '.btn--save-clans');
imageSaver.saveImage('.legions', '.btn--save-legions');
