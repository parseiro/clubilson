const gulp = require("gulp");

const postcss = require("gulp-postcss");

gulp.task("css", () => {
  const sourcemaps = require("gulp-sourcemaps");

  return gulp
    .src("src/**/*.css")
    .pipe(sourcemaps.init())
    .pipe(
      postcss([
        require("tailwindcss"),
        require("autoprefixer")({
          cascade: false,
        }),
        require("postcss-nested"),
      ])
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("build/"));
});

function watch() {
  gulp.watch("src/*.css", gulp.series("css"));
}

gulp.task("watch", watch);

gulp.task("default", gulp.series("css", "watch"));
