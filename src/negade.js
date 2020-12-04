function negate(func){
    return function(){
        return !func.apply(null, arguments)
    }
}

function isNull(val){
    return val === null
}

var isNotNull = negate(isNull)

console.log(isNotNull(null))
console.log(isNotNull({}))