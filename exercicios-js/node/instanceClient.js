const instanceNew = require("./instanceNew");

const cauntA = require('./instanceOnly')
const cauntB = require('./instanceOnly')

const cauntC = require('./instanceNew')()
const countD = require('./instanceNew')()


cauntA.inc()
cauntA.inc()

console.log(cauntB.value, cauntA.value)

cauntC.inc()
cauntC.inc()

console.log(cauntC.value, cauntD.value)