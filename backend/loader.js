/*
 * Arquivo: loader.js
 * Autor: Paulo Alves
 * Descrição: responsável pelo entry point (ponto de entrada) da aplicação
 * Data: 20/11/2019
*/

const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)