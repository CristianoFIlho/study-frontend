// colection dinamic 
const product = new Object
product.name = 'chair'
product['product brand'] = 'Generic'
product.price = 220

console.log(product)
delete product.price
delete product['product brand']
console.log(product)

const car = {
    model: 'A4',
    value: 421412,
    proprietary: {
        name: 'Raul',
        age: 56,
        anddrass: {
            public: 'Street ABC',
            number: 123
        }
    },
    conductors: [{
        name: 'Junior',
        age: 19
    }, {

        name: 'Ana',
        age: 42

    }, {


        name: 'Gustavo',
        age: 30
    }],

    calculatorValue: function () {

    }
}

car.proprietary.anddrass.number = 1000
car['proprietary']['anddrass']['public'] = 'Av Big'
console.log(car)

delete car.proprietary.anddrass
delete car.calculatorValue
console.log(car)
console.log(car.conductors)
console.log(car.conductors.length)

