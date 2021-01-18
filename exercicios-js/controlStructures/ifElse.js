const printResult = function (note) {
    if (note >= 7) {
        console.log('approved')
    } else {
        console.log('disapproved')

    }
}

printResult(10)
printResult(4)
printResult('Stop!') //danger

