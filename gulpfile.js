const gulp = require('gulp'),
      plugins		= require('gulp-load-plugins')(),
      config = require('./gulp/config')

function getTask(task){
  return require('./gulp/tasks/' + task)(gulp, plugins);
}

gulp.task('sync', getTask('browserSync'))
gulp.task('clean', getTask('clean'))
gulp.task('styles', getTask('styles'))
gulp.task('scripts', getTask('scripts'))
gulp.task('templates', getTask('templates'))
gulp.task('images', getTask('images'))
gulp.task('fonts', getTask('fonts'))
gulp.task('deployCode', getTask('deployCode'))
gulp.task('deployImages', getTask('deployImages'))
gulp.task('deployFonts', getTask('deployFonts'))

 
gulp.task('default', gulp.series(
  gulp.parallel(['styles','scripts','templates','images','fonts']), 'sync'
))

gulp.task('build', gulp.series(
  'clean', gulp.parallel(['deployCode', 'deployImages', 'deployFonts'])
))






