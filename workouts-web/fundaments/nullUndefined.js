let value // unassigned
console.log(value)


value = null //absence of value
console.log(value)
//console.log(value.toString()) //Error! 

const product = {}
console.log(product.value)
console.log(product)


product.value = 3.50
console.log(product)

product.value = undefined
console.log(!!product.value)
delete
console.log(!!product.value)

product.value = null //without price
console.log(!!product.value)
console.log(product)
