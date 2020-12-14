var Wrapper = require('../Wrapper')
var R = require('ramda')

Wrapper.of('Hello Monads!')
    .map(R.toUpper)
    .map(R.identity)
    .map(console.log)

Wrapper.of(Wrapper.of(Wrapper.of('Get Functional'))).join().map(console.log)

console.log(R.flatten([1, 2, [3, 4], 5, [6 ,[ 7, 8, [9]]]]))
// const findObject = R.curry((db, id) => Wrapper.of(find(db, id)))
// const getAddress = student => Wrapper.of(student.map(R.prop('address')))
// const studentAddress = R.compose(getAddress, findObject(DB('student')))
// studentAddress('444-44-4444').join().get()
