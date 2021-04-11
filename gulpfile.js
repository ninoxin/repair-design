const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

// Static server
 function bs() {
     serveSass();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.html").on('change', browserSync.reload);
    watch("./sass/**/*.sass", serveSass);
    watch("./sass/**/*.scss", serveSass);
    watch("./js/*.js").on('change', browserSync.reload);
};

 function serveSass() {
     return src("./sass/**/*.sass", "./sass/**/*.scss")
        .pipe(sass())
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};


exports.serve = bs;

function minifyCSS() {
    return (
        src("./css/.css")
            .pipe(cleanCSS())
            .pipe(dest("minified"))
    );
}

task("minify-css", minifyCSS);

task("watch", () => {
    watch("./css/.css", minifyCSS);
});

task('default', series('minify-css', 'watch'));

exports.mincss = minifyCSS;

