let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)


isActive = 1
console.log(!isActive)
console.log(!true)
console.log(!false)

//true sentences
console.log('the truthful')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive = true))


//false sentences
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))

console.log('To end')
console.log(!!('' || null || 0 || ' '))

let name = 'Lucas'

console.log(name || 'unknown')