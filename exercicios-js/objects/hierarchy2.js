Object.prototype.atrr0 = '0'
const grandfather = {
    atrr1: 'A'
}

const father = {
    __proto__: grandfather,
    atttr2: 'B',
    attr3: '3'
}

const son = {
    __proto__: father,
    attr3: 'C'
}
console.log(son.attr0, son.atrr1, son.attr2, son.attr3)

const car = {
    valCurrent: 0,
    valMaximum: 200,
    SpeedUp(delta) {
        if (this.valCurrent + delta <= this.valMaximum) {
            this.valCurrent += delta
        } else {
            this.valAtual = this.valMaximum
        }
    },
    status() {
        return `${this.valCurrent}Km/h of ${this.valMaximum}Km/h`
    }
}
const ferrari = {
    model: 'F40',
    valMaximum: 340, //shadowing


}
const volvo = {
    model: 'V40',
    status() {
        return `${this.model}: ${super.status()}`

    }
}

Object.setPrototypeOf(ferrari, car)
Object.setPrototypeOf(volvo, car)

console.log(ferrari)
console.log(volvo)


volvo.SpeedUp(100)
console.log(volvo.status())

ferrari.SpeedUp(300)
console.log(ferrari.status())