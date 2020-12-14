var Either = require('../Either')
var _ = require('lodash')

if(!String.prototype.parseUrl){
    String.prototype.parseUrl = _.partial(String.prototype.match, /(http[s]?|ftp):\/\/([^:\/\s]+)\.([^:\/\s]{2,5})/)
}

const parse = url => url.parseUrl()

function decode(url){
    try{
        const result = decodeURIComponent(url)
        return Either.of(result)
    }catch(uriError){
        return Either.left(uriError)
    }
}

decode('%').map(parse).map(console.log)
decode('http://example.com').map(parse).map(console.log)