const gulp = require('gulp')
const sass = require('gulp-sass')
const babel = require('gulp-babel')
const browserify = require('gulp-browserify')
const uglify = require('gulp-uglify')
const pug = require('gulp-pug')

const conf = {
	clientDevDir: './publicDev/',
	clientProdDir: './public/'
};


gulp.task('pug', () => {
    return gulp.src(conf.clientDevDir + '**/*.pug')
	.pipe(pug())
    .pipe(gulp.dest(conf.clientProdDir))
        .on('error', function (err) {console.log(err);this.emit('end')})
})

gulp.task('js', function(){
    return gulp.src(conf.clientDevDir + '**/*.js', {debug: true})
		.pipe(browserify(/*{
			shim: { //make modules non-compatible witf browserify requireable
				jQuery: {
					path: ''
				}
			}
		}*/))
		.pipe(babel({ presets: ['es2015'] }))
		.pipe(gulp.dest(conf.clientProdDir))
})

gulp.task('sass', function () {
  return gulp.src( conf.clientDevDir + 'sass/**/*.scss')
    .pipe(sass(
		{includePaths: ['node_modules/bootstrap-sass/assets/stylesheets']}
		).on('error', sass.logError))
    .pipe(gulp.dest(conf.clientProdDir + 'css/'))
        .on('error', function (err) {console.log(err);this.emit('end')})
})

gulp.task('watchCSS', () => gulp.watch(conf.clientDevDir + '**/*.scss', ['sass']))

gulp.task('watchJS', () => gulp.watch(conf.clientDevDir + '**/*.js', ['js']))

gulp.task('watchPUG', () => gulp.watch(conf.clientDevDir + '**/*.pug', ['pug']))

gulp.task('default', () => gulp.start(['js', 'pug', 'sass','watchPUG', 'watchCSS', 'watchJS']));