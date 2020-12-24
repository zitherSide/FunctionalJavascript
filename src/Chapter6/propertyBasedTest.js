var R = require('ramda')
var JSC = require('jscheck')

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

const computeAverageGrade = R.compose(getLetterGrade, fork(R.divide, R.sum, R.length))
computeAverageGrade([99, 80, 89])

JSC.clear()
JSC.on_report( str => console.log(str) )

JSC.test('Compute AverageGrade', 
    function(verdict, grades, grade){
        return verdict(computeAverageGrade(grades) === grade)
    },
    [
        JSC.array(JSC.integer(20), JSC.number(90, 100)), 'A'
    ],
    function(grades, grade){
        return 'Testting for an ' + grade + ' on grades: ' + grades
    }
)