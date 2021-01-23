const peaple = {
    name: 'Juan'
}

peaple.name = 'Pedro'
console.log(peaple)

//peaple -> 456 -> {...}

//peaple = {
//   name: 'Ana'
//}

Object.freeze(peaple)

peaple.end = 'Street  ABC'
peaple.name = 'Maria'
delete peaple.name

console.log(peaple.name)
console.log(peaple)

const peapleeConstant = Object.freeze({
    name: 'Joan'
})

console.log(peapleeConstant)

