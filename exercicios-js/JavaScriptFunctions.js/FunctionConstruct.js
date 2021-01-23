function Car(maximumSpeed = 200, delta = 5) {

    // attributts private 

    let speedCurrent = 0
    //method public

    this.speed = function () {
        if (speedCurrent + delta <= maximumSpeed) {
            speedCurrent += delta
        } else {
            speedCurrent = maximumSpeed
        }
    }
    //method public 
    this.getSpeedCurrent = function () {
        return speedCurrent
    }
}

const uno = new Car
uno.speed()
console.log(uno.getSpeedCurrent())
const ferrari = new Car(350, 20)

ferrari.speed()
ferrari.speed()
ferrari.speed()

console.log(ferrari.getSpeedCurrent())
console.log(typeof Carro)
console.log(typeof ferrari)