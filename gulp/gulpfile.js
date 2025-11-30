const { src, dest, series, watch } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));


function defaultTask(cb) {
  cb();
}

function cssTask() {
    return src('./scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({style: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./css'));
}

exports.watch = function () {
  watch('./scss/*.scss', cssTask);
};

exports.default = series(cssTask);