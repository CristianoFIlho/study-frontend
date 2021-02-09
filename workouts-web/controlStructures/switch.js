const printResult = function (note) {
    switch (Math.floor(note)) {
        case 10:
        case 9:
            console.log('honor board')
            break
        case 8:
        case 7:
            console.log('approved')
            break
        case 6:
        case 5:
        case 4:
            console.log('recovery')
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('disapproved')
            break
        default:
            console.log('invalid note')
    }

    console.log('end!')
}

printResult(10)
//printResult(8.9)
//printResult(6.55)
//printResult(2.3)
//printResult(-1)
//printResult(11)