var R = require('ramda')

class Wrapper{
    constructor(value){
        this._value = value
    }

    map(f){
        return f(this._value)
    }

    toString(){
        return `Wrapper(${this._value})`
    }
}

const wrap = val => new Wrapper(val)

Wrapper.prototype.fmap = function(f){
    return wrap(f(this._value))
}

const wrappedValue = wrap('Get Functional')
console.log(wrappedValue.map(R.identity))

wrappedValue.map(console.log)
wrappedValue.map(R.pipe(R.toUpper, R.tap(console.log)))

const plus = R.curry( (a, b) => a + b)
const plus3 = plus(3)
const two = wrap(2)
const five = two.fmap(plus3)
console.log(five.map(R.identity))

const plus10 = plus(10)
two.fmap(plus3).fmap(plus10).fmap(R.tap(console.log))

class Empty{
    map(f){
        return this
    }

    fmap(_){
        return new Empty()
    } 

    toString(){
        return 'Empty ()'
    }
}
const empty = () => new Empty()

const isEven = n => Number.isFinite(n) && (n % 2 == 0)
const half = val => isEven(val) ? wrap(val/2) : empty()
  
console.log("monad")
half(4).fmap(plus3).fmap(console.log)
console.log(half(3).fmap(plus3).toString())