var _ = require('lodash')

// function partial() {
//     let fn = this, boundArgs = Array.prototype.slice.call(arguments)
//     let placeholder = <<partialPlaceholderObj>>

//     let bound = function(){
//         let position = 0, length = boundArgs.length
//         let args = Array(length)
//         for(let i = 0; i < length; ++i){
//             args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i]
//         }

//         while(position < arguments.length){
//             args.push(arguments[position++])
//         }

//         return fn.apply(this, args)
//     }

//     return bound
// }

if(!String.prototype.first){
    String.prototype.first = _.partial(String.prototype.substring, 0, _)
}
console.log('Functionnal Programming'.first(3))

if(!String.prototype.asName){
    String.prototype.asName = _.partial(String.prototype.replace, /(\w+)\s(\w+)/, '$2, $1')
}
console.log('Alonzo Church'.asName())

if(!String.prototype.explode){
    String.prototype.explode = _.partial(String.prototype.match, /[\w]/gi)
}
console.log('ABC'.explode())

if(!String.prototype.parseUrl){
    String.prototype.parseUrl = _.partial(String.prototype.match, /(http[s]?|ftp):\/\/([^:\/\s]+)\.([^:\/\s]{2,5})/)
}
console.log('http://exmaple.com'.parseUrl())

const Scheduler = (function(){
    const delayedFn = _.bind(setTimeout, undefined, _, _)
    return{
        delay5: _.partial(delayedFn, _, 5000),
        delay10: _.partial(delayedFn, _, 10000),
        delay: _.partial(delayedFn, _, _)
    }
})()

Scheduler.delay5(function() {
    console.log('Excecuting After 5 seconds!')
})