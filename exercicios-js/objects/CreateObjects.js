const obj1 = {}

console.log(obj1)

console.log(typeof Object, typeof new Object)

const obj2 = new Object
console.log(obj2)

function Product(name, price, desc) {
    this.name = name
    this.getPriceWithDiscount = () => {
        return price * (1 - desc)

    }
}

const p1 = new Product('Pen', 7.99, 0.15)
const p2 = new Product('Notebook', 29998.99, 0.25)

console.log(p1.getPriceWithDiscount(), p2.getPriceWithDiscount())

//function factory 

function createFuncionary(name, salaryBase, fouls) {
    return {
        name,
        salaryBase,
        fouls,
        getSalary() {
            return (this.salaryBase / 30) * (30 - fouls)
        }
    }
}

const f1 = createFuncionary('João', 7891, 4)
const f2 = createFuncionary('Maria', 7191, 1)
console.log(f1.getSalary(), f2.getSalary())
const son = Object.create(null)
son.name = 'Ana'
console.log(son)

// function famous 

const fromJSON = JSON.parse('{"info": " I am json"}')
console.log(fromJSON.info)