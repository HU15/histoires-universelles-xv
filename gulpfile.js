var fileinclude = require('gulp-file-include');
var clean = require('gulp-clean');
var gulp = require('gulp');

var target = './docs';
var targetStyle = target + '/style';

gulp.task('clean-docs', function () {
    return gulp.src(target, {read: false})
      .pipe(clean());
});

gulp.task('copy-resources', ['clean-docs'], function() {
    gulp.src(['./style/**' ])
      .pipe(gulp.dest(targetStyle));
});

gulp.task('default', ['copy-resources'], function() {
    gulp.src(['./**/*.xhtml', '!./fragments/**', '!./node_modules/**', '!temp.xhtml', '!templet-general.xhtml' ])
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest(target));
});