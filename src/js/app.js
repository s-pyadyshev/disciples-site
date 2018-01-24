'use strict';

import { default as nameOfDefault } from './modules/town-builder';
import * as imageSaver from './modules/image-saver';

nameOfDefault('.empire', '.build--empire');
nameOfDefault('.undead', '.build--undead');
nameOfDefault('.clans', '.build--clans');
nameOfDefault('.legions', '.build--legions');

imageSaver.saveImage('.empire', '.btn--save-empire');
imageSaver.saveImage('.undead', '.btn--save-undead');
imageSaver.saveImage('.clans', '.btn--save-clans');
imageSaver.saveImage('.legions', '.btn--save-legions');