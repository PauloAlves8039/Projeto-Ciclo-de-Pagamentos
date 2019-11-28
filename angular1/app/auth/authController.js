
/*
 * Arquivo: authController.js
 * Autor: Paulo Alves
 * Descrição: controlador responsável pela autenticação do usuário
 * Data: 27/11/2019
*/

(function(){
    angular.module('primeiraApp').controller('AuthCtrl', [
        '$location',
        'msgs',
        AuthController
    ])
    function AuthController($location, msgs) {
        const vm = this
        vm.getUser = () => ({ name: 'Usuário MOCK', email: 'mock@cod3r.com.br' })
        vm.logout = () => {
            console.log('Logout...')
        }
    }
})()