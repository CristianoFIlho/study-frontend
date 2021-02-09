class Peaple {
    constructor(name) {
        this.name = name

    }
    speak() {
        console.log(`My name is ${this.name}`)
    }
}

const p1 = new Peaple('Cris')
p1.speak()


const createPeaple = name => {
    return {
        speak: () => console.log(`My name is ${name}`)
    }
}

const p2 = createPeaple('Ricardo')
p2.speak()