Array.prototype.map2 = function (callback) {

    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))

    }
    return newArray
}

const car = [
    '{"name": "eraser", "price": 3.45}',
    '{"name": "pencil", "price": 3.22}',
    '{"name": "pen", "price": 4.25}'

]

const forObject = json => JSON.parse(json)

const onlyPrice = product => product.price

const result = car.map2(forObject).map2(onlyPrice)

console.log(result)