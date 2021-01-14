const weight = 1.0
const weight2 = Number('2.0')

console.log(weight, weight2)
console.log(Number.isInteger(weight))
console.log(Number.isInteger(weight2))

const evaluation1 = 9.871
const evaluation2 = 6.872


const total = evaluation1 * weight + evaluation2 * weight2

const media = total / (weight + weight2)

console.log(media.toFixed(2))
console.log(media.toString(2)) // in binary
console.log(typeof media)
console.log(typeof Number)