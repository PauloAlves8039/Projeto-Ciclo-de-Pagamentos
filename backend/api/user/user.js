/*
 * Arquivo: user.js
 * Autor: Paulo Alves
 * Descrição: responsável por mapear o objeto user para o documento que será armazenamento no MongoDB
 * Data: 27/11/2019
*/

const restful = require('node-restful')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, min: 6, max: 12, required: true }
})

module.exports = restful.model('User', userSchema)
