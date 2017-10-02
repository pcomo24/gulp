var gulp = require('gulp');
var uglify = require('gulp-uglify');

//Styles
gulp.task('styles', function() {
  console.log('starting styles task');
});
//scripts
gulp.task('scripts', function() {
  console.log('starting scripts task');
  //define source folder
  return gulp.src('public/scripts/*.js')
    //pipe links actions, perform uglify function
    .pipe(uglify())
    //define destination folder
    .pipe(gulp.dest('public/dist'));
})
//Images
gulp.task('images', function() {
  console.log('starting images task');
})

//default task -- runs whenever you run gulp in terminal
gulp.task('default', function() {
  console.log('Starting default task');
})
