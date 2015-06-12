var gulp = require('gulp'),
    src = gulp.src,
    dest = gulp.dest,
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    debug = require('gulp-debug'),
    modulePath = './scripts/modules/';
    jsModuleHead = [
        modulePath + 'someModule/head.js',
        modulePath + 'someOtherModule/head.js',
        modulePath + 'init/head.js'
    ],
    jsModuleTail = [
        modulePath + 'someModule/tail.js',
        modulePath + 'someOtherModule/tail.js',
        modulePath + 'init/tail.js'
    ],
    helper = {};

gulp.task('default', function(){

});

gulp.task('jsMinify', function(){
    var stream;
    stream = src(jsModuleHead);
    helper.jsCompile(stream, 'head.js');
    stream = src(jsModuleTail);
    helper.jsCompile(stream, 'tail.js');
});

gulp.task('jshint', function(){

});

gulp.task('less', function(){
    watch('./content/less/**.less', function(event){
        console.log(event.path);
        var out = event.path.split('\\').pop();
        helper.lessCompile(out);
    })
});




// helpers
helper.jsCompile = function(stream, out){
    stream
        .pipe(concat(out))
        //.pipe(uglify())
        .pipe(dest('./scripts/minified/'));
};

helper.lessCompile = function (out){
    src('./content/less/' + out)
        .pipe(less())
        .pipe(autoprefixer({
            browsers: [
                'Android >= 4',
                'last 2 Chrome versions',
                'last 2 ff versions',
                'ie >= 8',
                'iOS >= 6',
                'last 2 Opera versions',
                'Safari >= 5',
                'last 2 op_mob versions',
                'last 2 op_mini versions',
                'last 2 and_chr versions',
                'last 2 and_ff versions',
                'last 2 ie_mob versions'
            ]
        }))
        .pipe(dest('./content/less/css/'));
};