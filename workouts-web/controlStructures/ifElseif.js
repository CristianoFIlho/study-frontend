Number.prototype.beetween = function (start, end) {
    return this >= start && this <= end
}

const printResult = function (note) {
    if (note.beetween(9, 10)) {
        console.log('Honor board')
    } else if (note.beetween(7, 8.99)) {
        console.log('approved')
    } else if (note.beetween(4, 6.99)) {
        console.log('recovery')
    } else if (note.beetween(0, 3.99)) {
        console.log('disapproved')
    } else {
        console.log('invalid note!')
    }
    console.log('end')
}



printResult(10)
printResult(3.99)
printResult(4)
printResult(2.3)
printResult(-1)
printResult(11)