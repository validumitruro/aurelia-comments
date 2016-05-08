var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// Compile our SASS files
gulp.task('sass', function () {
  return gulp.src('./styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styles'));
});

// Add a watch command
gulp.task('sass:watch', function () {
  gulp.watch('./styles/**/*.scss', ['sass']);
});

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', function(done) {
  browserSync.init({
    open: true,
    port: 9000,
    server: {
      baseDir: ['.'],
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);

  gulp.watch('src/**/*.html').on('change', reload);
  gulp.watch('src/**/*.js').on('change', reload);
  gulp.watch('styles/**/*.css').on('change', reload);
});

gulp.task('default', ['sass:watch', 'serve']);
