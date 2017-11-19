const   gulp    = require('gulp'),
        babel   = require('gulp-babel');

gulp.task('js', function() {
    gulp.src('./src/js/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./build/js'));
});

gulp.task('js-wtch', function() {
    gulp.watch('./src/js/*.js', ['js']);
});