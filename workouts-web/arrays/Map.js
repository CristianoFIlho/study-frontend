const nums = [1, 2, 3, 4, 5]

// for map

let result = nums.map(function (e) {

    return e * 20
})

console.log(result)

const sum10 = e => e + 10
const forMoney = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
const triple = e => e * 3

result = nums.map(sum10).map(triple).map(forMoney)

console.log(result)