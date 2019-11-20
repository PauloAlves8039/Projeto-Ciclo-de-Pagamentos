/*
 * Arquivo: database.js
 * Autor: Paulo Alves
 * Descrição: responsável pela conexão com o banco de dados MongoDB
 * Data: 20/11/2019
*/

const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost:27017/db_finance', { useNewUrlParser:true, useUnifiedTopology: true})