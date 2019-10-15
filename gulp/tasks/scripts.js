const config = require('../config'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify-es').default,
    sourcemaps = require('gulp-sourcemaps')

    module.exports = function(gulp, plugins){
        return function (){
            var stream = 
                gulp
                    .src(config.scripts.src.all)
                    .pipe(sourcemaps.init())
                    .pipe(uglify())
                    .pipe(concat(config.scripts.concat))
                    .pipe(sourcemaps.write(config.styles.mapsPath))
                    .pipe(gulp.dest(config.scripts.dest))

            return stream
        }
    }