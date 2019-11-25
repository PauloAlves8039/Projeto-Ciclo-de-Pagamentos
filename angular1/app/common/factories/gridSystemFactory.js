/*
 * Arquivo: gridSystemFactory.js
 * Autor: Paulo Alves
 * Descrição: arquivo responsável pela atribuição de colunas no dashboard
 * Data: 24/11/2019
*/

angular.module('primeiraApp').factory('gridSystem', [function(){
    function toCssClasses(numbers){
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''
        if(cols[0]) classes += `col-xs-${cols[0]}`
        if(cols[1]) classes += ` col-sm-${cols[1]}`
        if(cols[2]) classes += ` col-md-${cols[2]}`
        if(cols[3]) classes += ` col-lg-${cols[3]}`

        return classes
    }

    return { toCssClasses }
}])

