var Person = require('../person')
var Address = require('../Address')
var _ = require('lodash')
var R = require('ramda')

const curry = new Person('Haskell', 'Curry', '111-11-1111')
curry.address = new Address('US', '-', 'NY')

const turing = new Person('Alan', 'Turing', '222-22-2222')
turing.address = new Address('England', '-', 'Greenwitch')

const church = new Person('Alonzo', 'Church', '333-33-3333')
church.address = new Address('US', '-', 'LA')

const kleene = new Person('Stephan', 'Kleene', '444-44-4444')
kleene.address = new Address('US', '-', 'NY')

var persons = [curry, turing, church, kleene]
_.map(persons, 
    p => (p !== null && p !== undefined ) ? p.fullname : ""
).forEach( p => console.log(p) )

_(persons).reverse().map(
    p => (p !== null && p !== undefined) ? p.fullname : ''
).forEach( p => console.log(p))

var stat = _(persons).reduce( (stat, person) => {
    const c = person.address.country
    stat[c] = _.isUndefined(stat[c]) ? 1 : stat[c] + 1
    return stat
}, {})

console.log(JSON.stringify(stat))

const getCountry = p => p.address.country
const gatherStat = (stat, criteria) => {
    stat[criteria] = _.isUndefined(stat[criteria]) ? 1 : stat[criteria] + 1
    return stat
}

stat = _(persons).map(getCountry).reduce(gatherStat, {})
console.log(JSON.stringify(stat))

const gatherState = (stat, state) => {
    stat[state] = _.isUndefined(stat[state]) ? 1 : stat[state] + 1
    return stat
}
const cityPath = ['address', 'city']
const cityLens = R.lens(R.path(cityPath), R.assocPath(cityPath))
console.log(JSON.stringify(_(persons).map(R.view(cityLens)).reduce(gatherState, {})))

console.log(JSON.stringify( _.groupBy(persons, R.view(cityLens))))

console.log(_([0, 1, 2, 3, 4, 5]).reduce(_.add))
console.log(_([1, 2, 3, 4, 5]).reduce(_.divide))
console.log(_([1, 2, 3, 4, 5]).reduceRight(_.divide))

const isNotValid = val => _.isUndefined(val) || _.isNull(val)
const notAllValid = args => _(args).some(isNotValid)

console.log( notAllValid(['string', 0, null, undefined]))
console.log( notAllValid(['string', 0]))

const isValid = val => !_.isUndefined(val) && !_.isNull(val)
const allValid = args => _(args).every(isValid)

console.log( allValid(['string', 0, null]))
console.log( allValid(['string', 0, {}]))

const liveInNY = person => person.address.city === 'NY'
const fullnameLens = R.lens(R.path(['fullname']), R.assocPath(['fullname']))
console.log( _(persons).filter(liveInNY).map(R.view(fullnameLens)).join(' and '))
