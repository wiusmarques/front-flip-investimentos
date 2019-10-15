const browserSync = require('browser-sync').create(),
    config = require('../config.js')

module.exports = function(gulp, plugins) {
    return function () {
        var stream = 
            
            browserSync.init(config.browsersync.server)
            browserSync.watch(config.styles.src.all, gulp.series('styles'))
            browserSync.watch(config.scripts.src.custom, gulp.series('scripts'))
            browserSync.watch(config.templates.src.all, gulp.series('templates'))
            browserSync.watch(config.browsersync.watch).on('change', browserSync.reload)

        return stream
    }
}