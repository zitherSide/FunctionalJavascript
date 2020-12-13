var R = require('ramda')

const trim = str => str.replace(/^\s*|\s*$/g, '')
const normalize = str => str.replace(/\-/g, '')

const findObject = R.curry((db, id) => {
    const obj = find(db, id)
    if(obj === null){
        throw new Error(`Object with ID [${id}] not found`)
    }
    return obj
})

const findStudent = findObject(DB('student'))

const csv = ({ssn, firstname, lastname}) => `${ssn},${firstname},${lastname}`

const append = R.curry((elemetId, info) => {
    document.querySelector(elementId).innerHTML = info
    return info
})

const showStudent = R.compose(
    append('#student-info'),
    csv,
    findStudent,
    normalize, 
    trim
)

const showStudentPipe = R.pipe(
    trim,
    normalize, 
    findStudent,
    csv,
    append('#student-info')
)