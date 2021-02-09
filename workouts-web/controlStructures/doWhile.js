function getIntergerBeetweenRandom(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = -1

do {
    option = getIntergerBeetweenRandom(-1, 10)
    console.log(`Select option ${option}.`)

} while (option != -1)

console.log('To the next!')