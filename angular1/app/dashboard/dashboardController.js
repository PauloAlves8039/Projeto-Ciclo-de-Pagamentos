/*
 * Arquivo: dashboardController.js
 * Autor: Paulo Alves
 * Descrição: controlador responsável pela exibição de registros no Dashboard
 * Data: 25/11/2019
*/

(function () {
    angular.module('primeiraApp').controller('DashboardCtrl', [
        '$http',
        DashboardController
    ])

    function DashboardController($http) {
        const vm = this

        vm.getSummary = function () {
            const url = 'http://localhost:3003/api/billingSummary'
            $http.get(url).then(function (response) {
                const { credit = 0, debt = 0 } = response.data
                vm.credit = credit
                vm.debt = debt
                vm.total = credit - debt
            })
        }

        vm.getSummary()
    }
})()


