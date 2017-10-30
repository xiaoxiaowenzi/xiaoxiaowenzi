 var gulp = require('gulp');
 //var uglifey = require('gulp-uglifey');
 var concat = require('gulp-concat');
 var cssnano = require('gulp-cssnano');
 var htmlmin = require('gulp-htmlmin');

 gulp.task('style',function(){
 	gulp.src(['./*.css'])
 	 .pipe(concat('index.css'))
 	.pipe(cssnano())
 	.pipe(gulp.dest('./dist'))
 })

 gulp.task('index',function(){
 	gulp.src(['./*html'])
 	.pipe(htmlmin())
 	.pipe(gulp.dest('./dist'))
 })