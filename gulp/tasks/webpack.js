var gulp = require('gulp');
var webpack = require('webpack');
var gutil = require('gulp-util');
var webpackStream = require('webpack-stream');
var config = require('../../webpack.config.js');
var browserSync = require('browser-sync');

function task() {
  return gulp.src('./src/js/vatrates.js')
    .pipe(webpackStream(config, webpack))
    .on('error', gutil.log)
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
}

gulp.task('webpack', task);
module.exports = task;
