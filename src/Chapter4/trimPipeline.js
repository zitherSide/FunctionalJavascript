const { first } = require('lodash')
var _ = require('lodash')
var Tuple = require('../Tuple')

//trim :: string -> string
const trim = s => s.replace(/^\s*|\s*$/g, '')

//normalize :: string -> string
const normalize = s => s.replace(/-/g, '')

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
//[first, last] = name
console.log(name)
//const fullname = new StringPair('J', 'Barkley', 'Rosser') //error