/*
 * Arquivo: gulpfile.js
 * Autor: Paulo Alves
 * Descrição: responsável por automatizar e agilizar tarefas do projeto
 * Data: 21/11/2019
*/

const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/server')

gulp.task('default', () => {
    if(util.env.production){
        sequence('deps','app')
    }else {
        sequence('deps', 'app', 'server')
    }
})