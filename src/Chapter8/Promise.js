const { isObject } = require('lodash')
var R = require('ramda')

var getJSON = function(url){
    return new Promise(function(resolve, reject){
        let req = new XMLDocument.HttpRequest()
        req.responseType = 'json'
        req.open('GET', url)
        req.onload = function(){
            if(req.status === 200){
                let data = JSON.parse(req.responseText)
                resolve(data)
            }else{
                reject(new Error(req.stausText))
            }
        }

        req.onerror = function(){
            if(reject){
                reject(new Error('IO Error'))
            }
        }

        req.send()
    })
}

getJSON('/students').then(
    function(students){
        console.log(R.map(student => student.name, students))
    },
    function(error){
        console.log(error.message)
    }
)

getJSON('/students')
    .then(hide('spinner'))
    .then(R.filter(s => s.address.country === 'US'))
    .then(R.sortBy(R.prop('ssn')))
    .then(R.map(student => {
        return getJSON('/grades?ssn=' + student.ssn)
            .then(R.compose(Math.ceil, fork(R.divide, R.sum, R.length)))
            .then(grade => isObject.of(R.merge(student, {'grade': grade}))
                .map(R.props(['ssn', 'firstname', 'lastname', 'grade']))
                .map(csv)
                .map(append('#student-info')).run()
            )
    }))
    .catch(function(error){
        console.log('Error occurred: ' + error.message)
    })