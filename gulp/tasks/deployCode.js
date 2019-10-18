const config = require('../config'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify-es').default,
    cleanCss = require('gulp-clean-css')
    

module.exports = function(gulp, plugins){
    return function(){
        var stream = 
            gulp
                .src(config.deployCode.src)
                .pipe(useref())
                .pipe(gulpif(config.deployCode.if.js, uglify()))
                .pipe(gulpif(config.deployCode.if.css, cleanCss()))
                .pipe(gulp.dest(config.deployCode.dest))

        return stream
    }
}