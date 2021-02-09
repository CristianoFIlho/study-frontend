class Launch {
    constructor(name = 'Generic', value = 0) {
        this.name = name
        this.value = value
    }
}

class CycleFinancial {
    constructor(mouth, year) {
        this.mouth = mouth
        this.year = year
        this.launchs = []
    }

    addLaunchs(...launchs) {
        launchs.forEach(l => this.launchs.push(l))
    }

    sumary() {
        let valueConsolidated = 0
        this.launchs.forEach(l => {
            valueConsolidated += l.value
        })
        return valueConsolidated
    }
}

const salary = new Launch('Salary', 45000)
const lightContact = new Launch('Light', --220)

const acconts = new CycleFinancial(6, 2018)
acconts.addLaunchs(salary, lightContact)
console.log(acconts.summary())