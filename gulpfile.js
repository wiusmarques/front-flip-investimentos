var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
var nunjucks = require('gulp-nunjucks-html');
var image = require('gulp-image');
console.log('xupa meu pinto')
//Register pages to copy files CSS and JS to HTML page

gulp.task('connect', function () {
    connect.server({
        root: 'dist',
        livereload: true
    });
});

// Task to copy HTML files [src -> dist]
gulp.task('nunjucks', function () {
    return gulp.src('src/*.html')
        .pipe(nunjucks({
            searchPaths: ['src']
        }))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());

});

gulp.task('copy-css', function () {
    return gulp.src('src/assets/css/*.css')
        .pipe(nunjucks({
            searchPaths: ['src/assets/css']
        }))
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(connect.reload());

});

gulp.task('copy-fonts', function () {
    return gulp.src('src/assets/fonts/*.woff2')
        .pipe(gulp.dest('dist/assets/fonts'))
        .pipe(connect.reload());

});

gulp.task('sass', function () {
    return gulp.src("src/assets/scss/*.scss")
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(gulp.dest("dist/assets/css"))
        .pipe(connect.reload());
});

gulp.task('sass-common', function () {
    return gulp.src("src/assets/scss/common/*.scss")
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(concat('common.min.css'))
        .pipe(gulp.dest("dist/assets/css/common/"))
        .pipe(connect.reload());
});


 
gulp.task('compress', function() {
  return gulp.src(['src/assets/js/*.js'])
    .pipe(minify())
    .pipe(gulp.dest('dist/assets/js'));
});

gulp.task('image', function () {
    return gulp.src('src/assets/img/**/*')
        .pipe(image())
        .pipe(gulp.dest('dist/assets/img'));
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.html', gulp.series(['nunjucks']));
    gulp.watch('src/assets/**/*.scss', gulp.series(['sass', 'sass-common']));
    gulp.watch('src/assets/**/*.js', gulp.series(['compress']));
});

gulp.task('server', gulp.parallel(['watch', 'connect']));

//Task primary
gulp.task('default', gulp.series(['nunjucks', 'sass','copy-css','copy-fonts', 'sass-common', 'compress', 'image','server']));