const peaple = {
    name: 'Ana',
    age: 5,
    address: {
        PublicPlace: 'Street ABC',
        number: 1000

    }
}

const {
    name,
    age
} = peaple
console.log(name, age)

const {
    name: n,
    age: i
} = peaple

console.log(n, i)

const {
    lastName,
    goodHumored = true
} = peaple

console.log(lastName, goodHumored)

const {
    address: {
        PublicPlace,
        number,
        CEP
    }
} = peaple

console.log(PublicPlace, number, CEP)