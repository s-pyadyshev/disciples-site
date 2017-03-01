var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    config = require('../../config');

gulp.task('svg', function () {
    var svgs = gulp
        .src(config.svg.src)
        .pipe($.svgmin())
        .pipe($.svgstore({ inlineSvg: true }));

    function fileContents (filePath, file) {
        return file.contents.toString();
    }

    return gulp
        .src(config.svgSprite.src)
        .pipe($.inject(svgs, { transform: fileContents }))
        .pipe(gulp.dest(config.svgSprite.dest));
});
