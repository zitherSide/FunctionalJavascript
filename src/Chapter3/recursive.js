var _ = require('lodash')

function sum(arr){
    if(_.isEmpty(arr)){
        return 0;
    }
    return _.first(arr) + sum(_.rest(arr))
}

const arr = [0, 1, 2, 3, 4, 4, 5, 6, 7, 8, 9]
console.log(_.rest(arr))

console.log(sum([]))
console.log(sum([0, 1, 2, 3, 4, 4, 5, 6, 7, 8, 9]))