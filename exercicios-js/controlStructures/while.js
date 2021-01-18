function getIntergerBeetweenRandom(min, max) {

    const value = Math.random() * (max - min) + min
    return Math.floor(value)

}

let option = 0

while (option != -1) {
    option = getIntergerBeetweenRandom(-1, 10)
    console.log(`Select option ${option}.`)

}

console.log('To the next!')