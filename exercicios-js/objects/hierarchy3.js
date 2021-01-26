const father = {
    name: 'Cristiano',
    colorHair: 'black'
}

const son1 = Object.create(father)
son1.name = 'Ana'
console.log(son1.colorHair)
const son2 = Object.create(father, {
    name: {
        value: 'Bia',
        writable: false,
        enumerable: true
    }
})

console.log(son2.name)
son2.name = 'Carla'
console.log(`${son2.name} have hair ${son2.colorHair}`)

console.log(Object.keys(son1))
console.log(Object.keys(son2))



for (let key in son2) {
    son2.hasOwnProperty(key) ?
        console.log(key) : console.log('by inheritance')
}