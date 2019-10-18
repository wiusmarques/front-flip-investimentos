const config = require('../config'),
    nunjucks = require('gulp-nunjucks-html'),
    sourcemaps = require('gulp-sourcemaps')

module.exports = function(gulp, plugins){
    return function(){
        var stream = 
            gulp
                .src(config.templates.src.pages)
                .pipe(sourcemaps.init())
                .pipe(nunjucks(config.templates.nunjunks))
                .pipe(sourcemaps.write(config.mapsPath))
                .pipe(gulp.dest(config.templates.dest))
                
        return stream
    }
}