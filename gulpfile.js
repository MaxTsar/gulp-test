const   gulp    = require('gulp'),
        less    = require('gulp-less'),
        babel   = require('gulp-babel');

gulp.task('js', function() {
    gulp.src('./src/js/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./build/js'));
});

gulp.task('less', function() {
    gulp.src('./src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./build/css'))
});

