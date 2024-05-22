const gulp = require("gulp");
const concat = require("gulp-concat");
const cleanCss = require("gulp-clean-css"); // ★★★★ add

gulp.task("create-clean-css", function(){
    return gulp
        .src("src/css/*.css")
        .pipe(concat("style.css"))
        .pipe(cleanCss({ compatibiliy: 'ie8' })) // ★★★★ add
        .pipe(gulp.dest("dist/css"))
});

gulp.task(
    "default",
    gulp.parallel("create-clean-css") 
);