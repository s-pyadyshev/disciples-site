var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    config = require('../../config');

gulp.task('scss', ['style-modules'], config.wrapPipe(function(success, error) {

    return gulp.src(config.scss.src)
        // .pipe(sourcemaps.init())
        .pipe($.sass({outputStyle: 'expanded'}).on('error', $.sass.logError))
        // .pipe(sourcemaps.write())
        .pipe($.postcss([ 
            // https://github.com/yisibl/postcss-unprefix - remove all prefixes
            require('postcss-unprefix'),
            // https://github.com/10up/flexibility - begin with -js-display: flex - fallback for unterbrowsers
            require('postcss-flexibility'), 
            // https://github.com/bfred-it/object-fit-images - add object-fit - fallback for unterbrowsers
            require('postcss-object-fit-images'),
            // https://www.npmjs.com/package/postcss-csssimple
            require('postcss-csssimple'),
            ])
        )
        .pipe($.autoprefixer())
        .pipe(gulp.dest(config.scss.dest))
}));

gulp.task('style-modules', function() {

    return gulp.src(config.styleModules.src)
        .pipe($.concat('_modules.scss'))
        .pipe(gulp.dest(config.styleModules.dest))
});
