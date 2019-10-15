const autoprefixer = require('autoprefixer'),
    config = require('../config'),
    concat = require('gulp-concat'),
    comments = require('postcss-discard-comments'),
    cssnano = require('cssnano'),
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
                        cssnano(), 
                        comments(config.styles.postcss)
                    ]
                )
            )
            .pipe(concat(config.styles.concat))
            .pipe(sourcemaps.write(config.styles.mapsPath))
            .pipe(gulp.dest(config.styles.dest))

        return stream
    }
}