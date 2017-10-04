var gulp = require('gulp');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');

//file paths
var SCRIPTS_PATH = 'public/scripts/**/*.js';

//Styles
gulp.task('styles', function() {
  console.log('starting styles task');
});
//scripts
gulp.task('scripts', function() {
  console.log('starting scripts task');
  //define source folder
  return gulp.src(SCRIPTS_PATH)
    //pipe links actions, perform uglify function
    .pipe(uglify())
    //define destination folder
    .pipe(gulp.dest('public/dist'))
    .pipe(livereload());
})
//Images
gulp.task('images', function() {
  console.log('starting images task');
})
//watch
gulp.task('watch', function() {
  console.log('starting watch task');
  require('./server.js');
  livereload.listen();
  //first arg. is source path, second arg is array of tasks to run on change
  gulp.watch(SCRIPTS_PATH, ['scripts'])
})

//default task -- runs whenever you run gulp in terminal
gulp.task('default', function() {
  console.log('Starting default task');
})
