function* range(start = 0, finish = Number.POSITIVE_INFINITY){
    for(let i = start; i < finish; ++i){
        yield i;
    }
}

const num = range(1)
console.log(num.next().value)
console.log(num.next().value)
console.log(num.next().value)

const threshold = 10
for(let n of range(1)){
    console.log(n)
    if(n === threshold){
        break;
    }
}

function take(amount, generator){
    let result = []
    for(let n of generator){
        result.push(n)
        if(n === amount){
            break
        }   
    }
    return result
}

console.log(take(3, range(1, Infinity)))

function* range2(specification, start=0, finish=Number.POSITIVE_INFINITY){
    for(let i=start; i < finish; ++i){
        yield specification(i)
    }
}

for(let n of range2(x => x * x, 1, 4)){
    console.log(n)
}

var ittr = ['S', 't', 'r', 'e', 'a', 'm'][Symbol.iterator]()
console.log(ittr.next().value)
console.log(ittr.next().value)