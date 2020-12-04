var Person = require('./person')

module.exports =class Student extends Person{
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

