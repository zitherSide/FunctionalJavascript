var R = require('ramda')
var _ = require('lodash')

const find = function(db, ssn){
    let trans = db.transaction(['students'], 'readonly')
    const store = strans.objectStore('students')
    return new Promise(function(resolve, reject){
        let request = store.get(ssn)
        request.onerror = function(){
            if(reject){
                reject(new Error('Student not found!'))
            }
        }
        request.onsuccess = function(){
            resolve(request.result)
        }
    })
}

const fetchStudentDBAsync = R.curry((db, ssn) => find(db, ssn))
const findStudentAsync = fetchStudentDBAsync(db)
const then = R.curry((f, thenable) => thenable.then(f))
const catchP = R.curry((f, promise) => promise.catch(f))
const errorLog = _.partial(logger, 'console', 'basic', 'show StudentAsync', 'Error')

const showStudentAsync = R.compose(
    catchP(errorLog),
    then(append('"student-info')),
    then(csv),
    then(R.props['ssn', 'firstname', 'lastname']),
    chain(findStudentAsync),
    map(checkLengthSSn),
    lift(cleanInput)
)
