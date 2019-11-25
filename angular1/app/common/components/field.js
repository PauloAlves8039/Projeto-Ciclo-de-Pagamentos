/*
 * Arquivo: field.js
 * Autor: Paulo Alves
 * Descrição: responsável pela atribuição de componentes nas abas de cadastro do ciclo de pagamentos 
 * Data: 25/11/2019
*/

(function () {
    angular.module('primeiraApp').component('field', {
        bindings: {
            id: '@',
            label: '@',
            grid: '@',
            placeholder: '@',
            type: '@',
        },
        controller:[
            'gridSystem',
            function(gridSystem){
                this.gridClasses = gridSystem.toCssClasses(this.grid)
            }
        ],
        template: `
            <div class="{{ $ctrl.gridClasses }}">
                <div class="form-group">
                    <label for="{{ $ctrl.id }}">{{ $ctrl.label }}</label>
                    <input id="{{ $ctrl.id }}" class="form-control" placeholder="{{ $ctrl.placeholder }}" type="{{ $ctrl.type }}">
                </div>
            </div>
        `
    })
})()