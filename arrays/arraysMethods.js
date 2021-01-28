const pilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilots.pop()
console.log(pilots)

pilots.push('Verstappen')
console.log(pilots)

pilots.shift() // fisrt element the list

console.log(pilots)


pilots.unshift('Hemilton')
console.log(pilots)


// splices add elements 

//add 

pilots.splice(2, 0, 'Bottas', 'Massa')

//remove 


pilots.splice(3, 1)
console.log(pilots)

const somePilots1 = pilots.splice(2)
console.log(somePilots1)


const somePilots2 = pilots.splice(1, 4)
console.log(somePilots2)