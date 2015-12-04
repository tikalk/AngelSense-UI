var gulp = require('gulp');
var runSequence = require('run-sequence');
global.project_dir = __dirname;

gulp.task('serve', function (callback) {
  runSequence(
    'bower',
    'html2js',
    'concat',
    'style',
    'webserver',
    'watch'
  );
});

gulp.task('default', ['serve']);

require('./gulp');
