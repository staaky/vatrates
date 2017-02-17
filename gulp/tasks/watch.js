var gulp        = require('gulp'),
    watch       = require('gulp-watch'),
    browserSync = require('browser-sync');

var task = function() {
  var watchThese = [
    { glob: "./example/**/*.{js|css|php}", task: browserSync.reload },
    { glob: "./src/**/*.{js|json|php}", task: 'webpack' }
  ];

  watchThese.forEach(function(combination) {
    watch(combination.glob, function() {
      if (typeof combination.task == 'string') {
        require('./' + combination.task)();
      } else {
        combination.task();
      }
    });
  });
};

gulp.task('watch', ['browserSync'], task);
module.exports = task;
