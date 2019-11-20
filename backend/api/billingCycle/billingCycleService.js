/*
 * Arquivo: billingCycleService.js
 * Autor: Paulo Alves
 * Descrição: responsável por fornecer serviços via API REST
 * Data: 20/11/2019
*/

const billingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])

module.exports = BillingCycle