var fileinclude = require('gulp-file-include');
var clean = require('gulp-clean');
var gulp = require('gulp');

gulp.task('clean-pages', function () {
    return gulp.src('./pages', {read: false})
      .pipe(clean());
});

gulp.task('copy-resources', ['clean-pages'], function() {
    gulp.src(['./style/**' ])
      .pipe(gulp.dest('./pages/style'));
});

gulp.task('default', ['copy-resources'], function() {
    gulp.src(['./**/*.xhtml', '!./fragments/**', '!./node_modules/**' ])
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('./pages'));
});
