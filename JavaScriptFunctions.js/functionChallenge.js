function Peaple(name) {

    this.name = name

    this.speak = function () {
        console.log(`My name is ${this.name}`)
    }
}


const p1 = new Peaple('Cris')
p1.speak()