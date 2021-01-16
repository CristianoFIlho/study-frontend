const values = [9, 1, 3, 4, 5]
console.log(values[0], values[3], values[2])
console.log(values[5])

values[4] = 10
console.log(values)
console.log(values.length)

values.push({
    id: 3
}, false, null, 'test')
console.log(values)

console.log(values.pop())
delete values[0]

console.log(values)

console.log(typeof values)

