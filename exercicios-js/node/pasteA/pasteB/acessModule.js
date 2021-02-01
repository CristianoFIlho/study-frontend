const moduleA = require('../../modulea')
console.log(moduleA.hello)

const solute = require('solute')
console.log(solute.hello)

const c = require('../pasteC/index')
console.log(c.hello2)

//const http = require('http')
//http.createServer((req, res) => {
// res.write('Good Morning!')
//  res.end()
//
//}).listen(8080)