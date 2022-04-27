const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task("style",function(){
    return gulp.src("projectReal2/src/sass/**/*.+(scss|sass)")
            .pipe( sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(rename({
                prefix: "",
                suffix: ".min",
              }))
              .pipe(autoprefixer({
                cascade: false
               }))
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(gulp.dest("projectReal2/src/css"))
            .pipe(browserSync.stream())
})

    gulp.task('watch',function(){
    gulp.watch("projectReal2/src/sass/**/*.+(scss|sass)", gulp.parallel("style"));
    gulp.watch('projectReal2/src/*.html').on("change", browserSync.reload);
});

gulp.task("default",gulp.parallel('watch','server','style'));