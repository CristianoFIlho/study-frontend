function myObjetct() {}

console.log(myObjetct.prototype)


const obj1 = new myObjetct
const obj2 = new myObjetct


console.log(obj1.__proto__ == obj2.__proto__)

console.log(myObjetct.prototype === obj1.__proto__)

myObjetct.prototype.name = 'Anonymous'
myObjetct.prototype.speek = function () {
    console.log(`Good moorning! My name is ${this.name}!`)

}

obj1.speek()


obj2.name = 'Rafael'
obj2.speek()

const obj3 = {}
obj3.__proto__ = myObjetct.prototype
obj3.speek()

console.log((new Object).__proto__ === myObjetct.prototype)

console.log(myObjetct.__proto__ === Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
