// var gulp = require('gulp'),
//   concat = require('gulp-concat'),
//   babel = require('gulp-babel'),
//   config = require('../config');

// gulp.task('scripts', function () {
//   return gulp.src(config.files.js.base)
//     .pipe(babel({
//       presets: ['es2015', 'stage-2', 'react']
//     })).on('error', log)
//     .pipe(concat(config.files.js.name)).on('error', log)
//     .pipe(gulp.dest(config.files.js.buildFolder)).on('error', log);
// });

// function log(error) {
//   console.log([
//     '',
//     "----------ERROR MESSAGE START----------",
//     ("[" + error.name + " in " + error.plugin + "]"),
//     error.message,
//     "----------ERROR MESSAGE END----------",
//     ''
//   ].join('\n'));
//   this.end();
// }