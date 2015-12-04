var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var shell = require('gulp-shell');
var del = require('del');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src([
    'src/client',
    '.tmp'
    ])
    .pipe(webserver({
      livereload: true,
      port: 8080
    }));
});

gulp.task('server:debug', shell.task([
    'node-debug --web-port=8081'
]));

gulp.task( 'server:start', ['copy:dev'], startServerDev);

function startServerDev () {
    startServer('development');
}

function startServer (env) {
    // livereload.listen();
    nodemon({ 
        script: 'src/server/server.js',
        // script: 'src/_server/server.js',
        watch : ['src/server/**/*.js', 'src/server/**/*.json'],
        env: { 'NODE_ENV': env },
        nodeArgs: ['--debug'] 
    }).on('change', function (){
        //Tests?
    })
    .on('restart', function () {
        // livereload.changed();
        //Tests?
    });
}