/*
 * Arquivo: server.js
 * Autor: Paulo Alves
 * Descrição: arquivo responsável por inicializar o servidor gulp-webserver
 * Data: 21/11/2019
*/

const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('watch', () => {
    watch('app/**/*.html', () => gulp.start('app.html'))
    watch('app/**/*.css', () => gulp.start('app.css'))
    watch('app/**/*.js', () => gulp.start('app.js'))
    watch('assets/**/*.*', () => gulp.start('app.assets'))
})

gulp.task('server', ['watch'], () => {
    return gulp.src('public').pipe(webserver({
        livereload: true,
        port: 4000,
        open: true
    }))
})