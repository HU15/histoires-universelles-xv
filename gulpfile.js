var fileinclude = require('gulp-file-include');
var clean = require('gulp-clean');
var gulp = require('gulp');

gulp.task('clean-docs', function () {
    return gulp.src('./docs', {read: false})
      .pipe(clean());
});

gulp.task('copy-resources', ['clean-docs'], function() {
    gulp.src(['./style/**' ])
      .pipe(gulp.dest('./docs/style'));
});

gulp.task('default', ['copy-resources'], function() {
    gulp.src(['./**/*.xhtml', '!./fragments/**', '!./node_modules/**', '!temp.xhtml', '!templet-general.xhtml' ])
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('./docs'));
});
