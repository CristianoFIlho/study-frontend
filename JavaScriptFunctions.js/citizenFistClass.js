// Function in Js Fist function

//create 
function fun1() {

}

// store in a variable

const fun2 = function () {

}

const array = [function (a, b) {
    return a + b
}, fun1, fun2]

console.log(array[0](2, 3))

// store in an attribute

const obj = {}
obj.speak = function () {
    return 'Hay!'
}

console.log(obj.speak())

// pass function as parameter

function run(fun) {
    fun()
}

run(function () {
    console.log('Execute...')
})

// function ask for return
function sum(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

sum(2, 3)(4)

const fivePlus = sum(2, 3)

fivePlus(4)