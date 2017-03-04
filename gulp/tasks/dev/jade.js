var gulp = require('gulp'),
    changed = require('gulp-changed'),
    jade = require('gulp-jade'),
    jadeInheritance = require('gulp-jade-inheritance'),
    changed = require('gulp-changed'),
    cached = require('gulp-cached'),
    gulpif = require('gulp-if'),
    filter = require('gulp-filter'),
    browsersync = require('browser-sync'),
    config = require('../../config'),
    prettify = require('gulp-html-prettify');

gulp.task('jade', config.wrapPipe(function(success, error) {

    return gulp.src('src/**/*.jade')
        /*only pass unchanged *main* files and *all* the partials*/
        .pipe(changed('./', {
            extension: '.html'
        }))
        /*filter out unchanged partials, but it only works when watching*/
        .pipe(gulpif(global.isWatching, cached('jade')))
        /*find files that depend on the files that have changed*/
        .pipe(jadeInheritance({basedir: 'src'}))
        /*filter out partials (folders and files starting with "_" )*/
        .pipe(filter(function (file) {
            return !/\/_/.test(file.path) && !/^_/.test(file.relative);
        }))
        .pipe(jade())
        .pipe(prettify(config.htmlPrettify))
        .pipe(gulp.dest('./'))
}));
