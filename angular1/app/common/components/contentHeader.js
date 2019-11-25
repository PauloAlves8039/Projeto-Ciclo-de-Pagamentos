/*
 * Arquivo: contentHeader.js
 * Autor: Paulo Alves
 * Descrição: arquivo responsável pela criação de componente do cabeçalho no dashboard
 * Data: 24/11/2019
*/

angular.module('primeiraApp').component('contentHeader', {
    bindings: {
        name: '@',
        small: '@',
    },
    template: `
    <section class="content-header">
        <h1>{{ $ctrl.name }} <small>{{ $ctrl.small }}</small></h1>
    </section>
    `
})