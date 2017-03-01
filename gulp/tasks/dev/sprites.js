var gulp        = require('gulp'),
    $ = require('gulp-load-plugins')(),
    config      = require('../../config');

gulp.task('sprites', function() {

  var spriteData = gulp.src(config.sprites.src)
    .pipe($.spritesmith({
      retinaSrcFilter: config.sprites2x.src,
      imgName: 'sprite.png',
      imgPath: '../img/sprite.png',
      retinaImgName: 'sprite-2x.png',
      retinaImgPath: '../img/sprite-2x.png',
      cssName: '_sprites.scss',
      cssTemplate: 'gulp/templates/_sprite-template.scss',
      algorithm: 'top-down',
      padding: 10,
      engine: 'pngsmith'
    }));
  spriteData.img.pipe(gulp.dest(config.sprites.dest.img));
  spriteData.css.pipe(gulp.dest(config.sprites.dest.css));
});
