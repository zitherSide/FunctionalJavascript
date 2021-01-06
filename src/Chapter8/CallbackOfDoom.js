var _selector = document.querySelector
_selector(`#search-button`).addEventListener('click',
    function(event){
        event.preventDefault()

        let ssn = _selector('#student-ssn').value
        if(!ssn){
            console.log('WARN: Valid SSN needed')
            return
        }else{
            getJSON(`/students/${ssn}`,
                function(info){
                    _selector('#studnet-info').innerHTML = info
                    _selector('#student-info').addEventListener('mouseover',
                        function(){
                            getJSON(`/students/${info.ssn}/grades`,
                                function(grades){
                                    //some operations...
                                }
                            )
                        }
                    )
                }
            ).fail(function(){
                console.log('Error occurred!')
            })
        }
    }
)