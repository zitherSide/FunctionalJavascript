class Person{
    constructor(firstname, lastname, ssn){
        this._firstname = firstname
        this._lastname = lastname
        this._ssn = ssn
        this._address = null
        this._birthYear = null
    }

    get ssn(){
        return this._ssn
    }

    get firstname(){
        return this._firstname
    }

    get lastname(){
        return this._lastname
    }

    get address(){
        return this._address
    }

    get birthYear(){
        return this._birthYear
    }

    set birthYear(year){
        this._birthYear = year
    }

    set address(addr){
        this._address = addr
    }

    toString(){
        return `Person(${this._firstname}, ${this._lastname})`
    }

    peopleInSameCountry(friends){
        let result = []
        for(let idx in friends){
            let friend = friends[idx]
            if(this.address.country === friend.address.country){
                result.push(friend)
            }
        }
        return result
    }
}

class Student extends Person{
    constructor(firstname, lastname, ssn, school){
        super(firstname, lastname, ssn)
        this._school = school
    }

    get school(){
        return this._school
    }

    studentsInSameCountryAndSchool(friends){
        const closeFriends = super.peopleInSameCountry(friends)
        let result = []
        for(let idx in closeFriends){
            let friend = closeFriends[idx]
            if(friend.school === this.school){
                result.push(friend)
            }
        }
        return result
    }
}

class Address{
    constructor(country){
        this._country = country
    }
    get country(){
        return this._country
    }
}

const curry = new Student('Haskell', 'Curry', '111-11-1111', 'Penn State')
curry.address = new Address('US')

const turing = new Student('Alan', 'Turing', '222-22-2222', 'Princeton')
turing.address = new Address('England')

const church = new Student('Alonzo', 'Church', '333-33-3333', 'Princeton')
church.address = new Address('US')

const kleene = new Student('Stephan', 'Kleene', '444-44-4444', 'Princeton')
kleene.address = new Address('US')

console.log(church.studentsInSameCountryAndSchool([curry, turing, church, kleene]))

function selector(country, school){
    return function(student){
        return student.address.country === country && student.school === school
    }
}

let findStudentsBy = function(friends, selector){
    return friends.filter(selector)
}

console.log(findStudentsBy([curry, turing, church, kleene], selector('US', 'Princeton')))