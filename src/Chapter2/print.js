var Person = require('../person')
var Address = require('../Address')
var R = require('ramda')

function PrintPeople(people, selector, printer){
    people.forEach( function (person) {
        if(selector(person)){
            printer(person)
        }
    })
}

var inUS = person => person.address.country === 'US'

const curry = new Person('Haskell', 'Curry', '111-11-1111')
curry.address = new Address('US')

const turing = new Person('Alan', 'Turing', '222-22-2222')
turing.address = new Address('England')

const church = new Person('Alonzo', 'Church', '333-33-3333')
church.address = new Address('US')

const kleene = new Person('Stephan', 'Kleene', '444-44-4444')
kleene.address = new Address('US')

const people = [curry, turing, church, kleene] 
PrintPeople(people, inUS, console.log)

var countryPath = ['address', 'country']
var countryL = R.lens(R.path(countryPath), R.assocPath(countryPath))
var inCountry = R.curry((country, person) => R.equals(R.view(countryL, person), country))

people.filter(inCountry('US')).map(console.log)