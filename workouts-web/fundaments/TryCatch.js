function ErrorException(erro) {
    // throw new Error('Error 404 return the modulo home page in browser')
    throw {
        name: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function printObject(obj) {

    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        ErrorException(e)
    }
}

const obj = {
    name: 'crisitano'
}
printObject(obj)