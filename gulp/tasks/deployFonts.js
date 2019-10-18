const config = require('../config')

module.exports = function(gulp, plugins){
    return function(){
        var stream = 
            gulp
                .src(config.deployFonts.src)
                .pipe(gulp.dest(config.deployFonts.dest))

        return stream
    }
}