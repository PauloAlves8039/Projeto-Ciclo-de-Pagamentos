/*
 * Arquivo: valueBox.js
 * Autor: Paulo Alves
 * Descrição: arquivo responsável pelos compoentes caixas de valores no dashboard
 * Data: 24/11/2019
*/

angular.module('primeiraApp').component('valueBox', {
    bindings: {
        grid: '@',
        colorClass: '@',
        value: '@',
        text: '@',
        iconClass: '@'
    },
    controller: [
        'gridSystem',
        function (gridSystem) {
            const self = this
            this.$onInit = function(){
                self.gridClasses = gridSystem.toCssClasses(self.grid)
            };            
        }
    ],
    template: `
        <div class="{{ $ctrl.gridClasses }}">
            <div class="small-box {{ $ctrl.colorClass }}">
                <div class="inner">
                    <h3>{{ $ctrl.value }}</h3>
                    <p>{{ $ctrl.text }}</p>
                </div>
                <div class="icon">
                    <i class="{{ $ctrl.iconClass }}"></i>
                </div>
            </div>
        </div>
    `
})