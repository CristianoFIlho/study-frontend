const name = 'Rebeca'
const concatenation = 'Hello ' + name + '!'
const templete = `
    Olá
    ${name}!`


//expresions...
console.log(`1 + 1= ${1 + 1}`) // ele ignora o primero e soma somente o que está na sentença. 

console.log(concatenation, templete)


const up  = text  => text.toUpperCase()
console.log(`Ei... ${up('watch out')}!`)
