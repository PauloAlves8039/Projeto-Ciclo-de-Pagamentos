/*
 * Arquivo: routes.js
 * Autor: Paulo Alves
 * Descrição: arquivo responsável pelas configurações das rotas no frontend da aplicação
 * Data: 23/11/2019
*/

angular.module('primeiraApp').config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $stateProvider.state('dashboard', {
            url: "/dashboard",
            templateUrl: "dashboard/dashboard.html"
        }).state('billingCycle', {
            url: "/billingCycle",
            templateUrl: "billingCycle/tabs.html"
        })
        $urlRouterProvider.otherwise('dashboard')
    }
])