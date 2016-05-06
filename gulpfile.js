"use strick";

var   gulp = require('gulp'),
	  connect = require('gulp-connect'),
	  notify = require("gulp-notify"),
	  minifyCSS = require('gulp-minify-css'),
	  jsmin = require('gulp-jsmin'),
	  rename = require('gulp-rename'),
	  less = require('gulp-less'),
      path = require('path'),
	  LessPluginAutoPrefix = require('less-plugin-autoprefix'),
	  autoprefix= new LessPluginAutoPrefix({ browsers: ["last 15 versions"] }),
	  minifyCSS = require('gulp-minify-css'),
	  clean = require('gulp-clean');
 
gulp.task('connect', function() {
  connect.server({
    root: 'app/',
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src('app/company_admin_create.html')
  .pipe(notify("html finished"))
  .pipe(connect.reload());
}); 

//less
gulp.task('less', function () {
  return gulp.src('app/css/**.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'css', 'includes') ]
    }))
    .pipe(less({
      plugins:  [autoprefix]
    }))
    .pipe(gulp.dest('app/css'));
});
 
//css
gulp.task('css', function () {
  gulp.src('app/css/style.css')
  .pipe(notify("css finished"))
    .pipe(connect.reload());
});

// css minify
gulp.task('minify-css', function() {
  gulp.src('app/css/chosen.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./'))
});
gulp.task('js-reload',function(){
  gulp.src('app/js/**').pipe(connect.reload());
 });
// js minify
gulp.task('js-minify', function () {
    gulp.src('app/js/**')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/js/'));
});
gulp.task('clean-css', function(){
	gulp.src(['app/css/_base/**.css','app/css/_blocks/**/*.css']).pipe(clean({force: true}));
});
//clean build
gulp.task('clean-build',function(){
		 gulp.src('build/css/*.css').pipe(clean({force: true}));
		 gulp.src('build/*.html').pipe(clean({force: true}));
     gulp.src('build/js/**/*.js').pipe(clean({force: true}));
		 gulp.src('build/img/**/*').pipe(clean({force: true}));
//
});
// зборка
 gulp.task('build',function(){
	 gulp.src(['app/css/_base/**.css','app/css/_blocks/**/*.css']).pipe(clean({force: true}));
//	 перенос
	 gulp.src('app/css/*.css').pipe(gulp.dest('build/css'));
	 gulp.src('app/img/**/*').pipe(gulp.dest('build/img'));
	 gulp.src('app/js/**/*').pipe(gulp.dest('build/js'));
	 gulp.src('app/**.html').pipe(gulp.dest('build/'));
//	 minifyCSS
	 gulp.src(['build/css/style.css','build/css/reset.css']).pipe(minifyCSS({keepBreaks:true})).pipe(gulp.dest('build/css'))
	 
 });


gulp.task('watch', function () {
  gulp.watch(['app/*.html'], ['html']);
  gulp.watch(['app/js/**'], ['html']);
  gulp.watch(['app/css/style.css'], ['css']);
  gulp.watch(['app/css/**/**/*.less'], ['less']);
});
 
gulp.task('default', ['connect','less', 'watch', 'css' , 'html']);