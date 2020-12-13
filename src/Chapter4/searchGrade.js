var R = require('ramda')

const students = ['Rosser', 'Turing', 'Kleene', 'Church']
const grades = [80, 100, 90, 99]

const smartestStudent = R.compose(
    R.head,
    R.pluck(0),
    R.reverse,
    R.sortBy(R.prop(1)),
    R.zip
)

console.log(smartestStudent(students, grades))

//alias
const first = R.head
const getName = R.pluck(0)
const reverse = R.reverse
const sortByGrade = R.sortBy(R.prop(1))
const combine = R.zip
console.log(R.compose(first, getName, reverse, sortByGrade, combine)(students, grades))