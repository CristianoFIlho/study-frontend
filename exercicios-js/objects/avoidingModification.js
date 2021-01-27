// Object.preventExtensions 

const product = Object.preventExtensions({

    name: 'Any',
    price: 1.99,
    tag: 'promotion'
})

console.log('Extension', Object.isExtensible(product))

product.name = 'rubber'
product.description = 'Rubber school white'
delete product.tag
console.log(product)

// Object.seal 

const peaple = {
    name: 'Juliana',
    age: 35
}

Object.seal(peaple)
console.log('Selado:', Object.isSealed(peaple))

peaple.lestname = 'Silva'
delete peaple.name
peaple.age = 29
console.log(peaple)


// Object.freeze

