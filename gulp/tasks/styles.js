const autoprefixer = require('autoprefixer'),
    config = require('../config'),
    comments = require('postcss-discard-comments'),
    plumber = require('gulp-plumber'),
    postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps')

module.exports = function(gulp, plugins){
    return function () {
        var stream = 

        gulp
            .src(config.styles.src.custom)
            .pipe(sourcemaps.init())
            .pipe(plumber())
            .pipe(sass().on('error', sass.logError))
            .pipe(sass(config.styles.sass))
            .pipe(postcss(
                    [
                        autoprefixer(config.autoprefixer.opts.browsers), 
                        comments(config.styles.postcss)
                    ]
                )
            )
            .pipe(sourcemaps.write(config.mapsPath))
            .pipe(gulp.dest(config.styles.dest))

        return stream
    }
}