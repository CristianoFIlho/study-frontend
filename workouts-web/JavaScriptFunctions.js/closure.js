const x = 'Global'


function out() {
    const x = 'Locale'

    function In() {
        return x
    }
    return In
}

const myFunction = out()
console.log(myFunction())