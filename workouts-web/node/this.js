console.log(this === global)

console.log(this === module)

console.log(this === module.exports)

console.log(this === exports)

function logThis() {

    console.log('Into the an function')
    console.log(this === exports.module)
    console.log(this === module.exports)
    console.log(this === global)

    //this.danger = '.... '
}

logThis()