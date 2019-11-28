/*
 * Arquivo: consts.js
 * Autor: Paulo Alves
 * Descrição: arquivo responsável pela chamada da API de autenticação do backend
 * Data: 27/11/2019
*/

angular.module('primeiraApp').constant('consts', {
    appName: 'MEAN - Primeira Aplicação',
    version: '1.0',
    owner: 'Paulo Alves',
    year: '2019',
    site: 'https://github.com/PauloAlves8039',
    apiUrl: 'http://localhost:3003/api',
    oapiUrl: 'http://localhost:3003/oapi',
    userKey: '_primeira_app_user'
}).run(['$rootScope', 'consts', function ($rootScope, consts) {
    $rootScope.consts = consts
}])