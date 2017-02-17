var browserSync       = require('browser-sync'),
    gulp              = require('gulp'),
    php               = require('gulp-connect-php');

var task = function() {
  // spin up a php server
  php.server({
    base:      '.',
    port:      8010,
    keepalive: true
  });

  browserSync.init({
    proxy:  '127.0.0.1:8010/example/',
    port:   8080,
    open:   true,
    notify: false
  });
};

gulp.task('browserSync', task);
module.exports = task;
