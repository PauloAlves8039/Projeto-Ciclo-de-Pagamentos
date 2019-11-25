/*
 * Arquivo: billingCycleController.js
 * Autor: Paulo Alves
 * Descrição: controlador responsável pela regra de negócio do ciclo de pagamento
 * Data: 25/11/2019
*/

(function(){
    angular.module('primeiraApp').controller('BillingCycleCtrl', [
        '$http',
        BillingCycleController
    ])
    function BillingCycleController($http){
        const vm = this
        vm.create = function(){
            const url = 'http://localhost:3003/api/billingCycles'
            $http.post(url, vm.billingCycle).then(function(response){
                vm.billingCycle = {}
                console.log('Sucesso!')
            })
        }
    }
})()