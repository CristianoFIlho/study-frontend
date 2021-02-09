const car = [
    '{"name": "eraser", "price": 3.45}',
    '{"name": "pencil", "price": 3.22}',
    '{"name": "pen", "price": 4.25}'

]

const forObject = json => JSON.parse(json)

const onlyPrice = product => product.price

const result = car.map(forObject).map(onlyPrice)

console.log(result)

