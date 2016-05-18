var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');

gulp.task('js', function () {
    return gulp.src('app/js/**/*.js')
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('css', function () {
    return gulp.src('app/css/**/*.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('popup', function () {
    return gulp.src('app/popup.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('img', function () {
    return gulp.src('app/img/**/*')
        .pipe(gulp.dest('dist/img/'))
});

gulp.task('manifest', function () {
    return gulp.src('app/manifest.json')
        .pipe(gulp.dest('dist'))
});


gulp.task('watch', function () {
    gulp.watch('app/css/**/*.css', ['css']);
    gulp.watch('app/js/**/*.js', ['js']);
    gulp.watch('app/popup.html', ['popup']);
    gulp.watch('app/manifest.json', ['manifest']);
    gulp.watch('app/img/**/*', ['img']);
});

gulp.task('default', ['watch','img', 'js', 'css', 'popup', 'manifest']);