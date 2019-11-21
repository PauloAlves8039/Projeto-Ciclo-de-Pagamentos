/*
 * Arquivo: billingCycleService.js
 * Autor: Paulo Alves
 * Descrição: responsável por fornecer serviços via API REST
 * Data: 20/11/2019
*/

const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})

module.exports = BillingCycle