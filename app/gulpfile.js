var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');
var minifycss = require('gulp-minify-css');
var less = require('gulp-less');

gulp.task('images', function(){
  gulp.src('static/img/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('public/img/'));
});

gulp.task('styles', function(){
  gulp.src(['static/less/theme.less'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(less())
    .pipe(gulp.dest('static/css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('public/css/'))
});

gulp.task('scripts', function(){
  return gulp.src('static/js/**/*.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('public/js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('public/js/'))
});

gulp.task('default', function(){
  gulp.watch("static/less/**/*.less", ['styles']);
  gulp.watch("static/js/**/*.js", ['scripts']);
});