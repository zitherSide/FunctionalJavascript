var R = require('ramda')

const debug = R.tap(console.log)
const trim = str => str.replace(/^\s*|\s*$/g, '')
const normalize = str => str.replace(/\-/g, '')
const cleanInput = R.pipe(trim, debug, normalize, debug)

cleanInput(' 444-44-4444 ')

const alt = R.curry((func1, func2, val) => func1(val) || func2(val))
const seq = function(/*functions*/){
    const funcs = Array.prototype.slice.call(arguments)
    return function(val){
        funcs.forEach(function(fn){
            fn(val)
        })
    }
}
const fork = function(join, func1, func2){
    return function(val){
        return join(func1(val), func2(val))
    }
}

const getLetterGrade = (val) => {
    if(val >= 90){
        return 'A'
    }else if(val >= 80){
        return 'B'
    }else{
        return 'C'
    }
}

const computeAverageGrade = R.compose(debug, getLetterGrade, fork(R.divide, R.sum, R.length))
computeAverageGrade([99, 80, 89])

const eqMedianAverage = R.pipe(fork(R.equals, R.median, R.mean), debug)
eqMedianAverage([80, 90, 100])
eqMedianAverage([81, 90, 100])