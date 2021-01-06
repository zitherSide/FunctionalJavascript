var _selector = document.querySelector

_selector('#search-button').addEventListener('click', handleClickEvent)

var processGrades = function(grades){
    //some operations...
}

var handleMouseMovement = () => getJSON(`/students/${info.ssn}/grades`, processGrades)

var showStudent = function(info){
    _selector('#student-info').innerHTM = info
    _selector('#student-info').addEventListener('mouseover', handleMouseMovement)
}

var handleError = error => console.log('Error occurred' + error.message)

var handleClickEvent = function(event){
    event.preventDefault();

    let ssn = _selector('#student-ssn').value
    if(!ssn){
        console.log('Valid SSN needed')
        return
    }else{
        getJSON(`/students/${ssn}`, showStudent).fail(handleError)
    }
}