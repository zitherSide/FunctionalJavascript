var R = require('ramda')
var _ = require('lodash')

const str = 'We can only set a short distance ahead but we can see plenty there that needs to be done'
const explode = (str) => str.split(/\s+/)
const count = (arr) => arr.length

const countWords = R.compose(count, explode)
console.log(countWords(str))

const trim = str => str.replace(/^\s*|\s*$/g, '')
const normalize = str => str.replace(/\-/g, '')
const validLength = (param, str) => str.length === param
const checkLengthSsn = _.partial(validLength, 9)

const cleanInput = R.compose(normalize, trim)
const isValidSsn = R.compose(checkLengthSsn, cleanInput)

console.log(cleanInput('  444-44-4444 '))
console.log(isValidSsn(' 444-44-4444 '))

//using prototype
if(!Function.prototype.compose){
    Function.prototype.compose = R.compose
}

const cleanInput2 = checkLengthSsn.compose(normalize).compose(trim)
console.log(cleanInput2('444-44-4444 '))

//sample compose
function compose(/* fns */){
    let args = arguments
    let start = args.length - 1
    return function(/* args */){
        let i = start
        let result = args[i].apply(this, arguments)
        while(i--){
            result = args[i].call(this, result)
        }
        return result
    }
}