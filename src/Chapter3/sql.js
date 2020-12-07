const { map } = require('lodash')
var _ = require('lodash')
var Person = require('../person')
var Address = require('../Address')

_.mixin(
    {
        'select': _.map,
        'from': _.chain,
        'where': _.filter,
        'sortBy': _.sortByOrder
    })

const curry = new Person('Haskell', 'Curry', '111-11-1111')
curry.address = new Address('US', '-', 'NY')
curry.birthYear = 1900

const turing = new Person('Alan', 'Turing', '222-22-2222')
turing.address = new Address('England', '-', 'Greenwitch')
turing.birthYear = 1901

const church = new Person('Alonzo', 'Church', '333-33-3333')
church.address = new Address('US', '-', 'LA')
church.birthYear = 1899

const kleene = new Person('Stephan', 'Kleene', '444-44-4444')
kleene.address = new Address('US', '-', 'NY')
kleene.birthYear = 1920

const persons = [curry, turing, church, kleene]
const sql = _.from(persons)
    .where( p => p.birthYear > 1900 && p.address.country !== 'US')
    .sortBy(['firstname'])
    .select(p => p.firstname)
    
console.log(JSON.stringify(sql.value()))