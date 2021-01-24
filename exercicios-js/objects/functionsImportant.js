const peaple = {
    name: 'Rebeca',
    age: 2,
    weight: 13

}

console.log(Object.keys(peaple))
console.log(Object.keys(peaple))
console.log(Object.entries(peaple))

Object.entries(peaple).forEach(([key, value]) => {
    console.log(`${key}: ${value}`)
})

Object.defineProperty(peaple, 'dateBirth', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

peaple.dateBirth = '01/01/2017'
console.log(peaple.dateBirth)
console.log(Object.keys(peaple))

// Object.assign (ECMAScript 2015)
const dest = {
    a: 1
}
const o1 = {
    b: 2
}
const o2 = {
    c: 3,
    a: 4
}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)