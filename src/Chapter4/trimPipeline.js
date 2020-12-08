const { first } = require('lodash')
var _ = require('lodash')
//var Tuple = require('../Tuple')

//trim :: string -> string
const trim = s => s.replace(/^\s*|\s*$/g, '')

//normalize :: string -> string
const normalize = s => s.replace(/-/g, '')

const Tuple = function( /* types */){
    const typeInfo = Array.prototype.slice.call(arguments, 0)
    const _T = function(/* values */){
        const values = Array.prototype.slice.call(arguments, 0)
        if(values.some( val => val === null || val === undefined)){
            throw new ReferenceError("Tuple may not have any null values")
        }
        if(values.length !== typeInfo.length){
            throw new TypeError("Tuple arity does not match its prototype")
        }
        values.map( (val, index) => {
            this[`_${index + 1}`] = checkType(typeInfo[index])(val)
        }, this)
        Object.freeze(this)
    }
    _T.prototype.values = () =>{
        return Object.keys(this).map(k => this[k], this)
    }
    return _T
}
const Status = Tuple(Boolean, String)
const isValid = function(str){
    if(str.length === 0){
        return new Status(false, 'Invalid input. Expected non-empty value!')
    }else{
        return new Status(true, 'Success')
    }
}

console.log(isValid(normalize(trim('444-44-444'))))

const StringPair = Tuple(String, String)
const name = new StringPair('Barkley', 'Rosser')
[first, last] = name.values()
const fullname = new StringPair('J', 'Barkley', 'Rosser') //error