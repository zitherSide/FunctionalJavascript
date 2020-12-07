var _ = require('lodash')

var names = ['alonzo church', 'Haskell curry', 'stephen_kleene', 'John vo Neumann', 'stephen_kleene']

const isValid = val => !_.isUndefined(val) && !_.isNull(val)

const formattedNames = 
    _.chain(names)
    .filter(isValid)
    .map(s => s.replace(/_/, ' '))
    .uniq()
    .map(_.startCase)
    .sort()
    .value()

console.log(JSON.stringify(formattedNames))