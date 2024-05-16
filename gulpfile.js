const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

function minifyCSS() {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
}

exports.minifyCSS = minifyCSS;