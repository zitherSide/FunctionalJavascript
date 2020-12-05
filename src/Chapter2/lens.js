var R = require('ramda')
var Person = require('../person.js')
var Address = require('../Address.js')
var ZipCode = require('../ZipCode.js')

var person = new Person('Alonzo', 'Church', '444-44-4444')
const lastnameLens = R.lensProp('lastname')
console.log(R.view(lastnameLens, person))
var newPerson = R.set(lastnameLens, 'Mourning', person)
console.log(newPerson.lastname)
console.log(person.lastname)

person.address = new Address('US', 'NJ', 'Princeton', new ZipCode(08544, 1234), 'Alexander St.')