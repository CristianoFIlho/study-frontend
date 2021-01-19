// 

function sum1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}

console.log(sum1(), sum1(3), sum1(1, 2, 3), sum1(0, 0, 0))


// estrategia 2, 3 e  4 para gerar valor padrão

function sum2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(sum2(), sum2(3), sum2(1, 2, 3), sum2(0, 0, 0))

