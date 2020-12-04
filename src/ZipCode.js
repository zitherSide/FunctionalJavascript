module.exports = function ZipCode(code, location){
    let _code = code
    let _location = location

    return {
        code: function(){
            return _code
        },
        location: function(){
            return _location
        }
    }
}