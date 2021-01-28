class Grandfhater {
    constructor(lastname) {
        this.last = lastname
    }
}

class Father extends Grandfhater {

    constructor(lastname, profession = 'Teacher') {
        super(lastname)
        this.profession = profession
    }
}

class Son extends Father {
    constructor() {
        super('Silva')
    }
}

const son = new Son
console.log(son)

