function buys(job1, job2) {
    const buyIceCream = job1 || job2

    const buyTV50 = job1 && job2

    //  const buyTV32 = !!(job1 ^ job2)

    const buyTV32 = job1 != job2

    const KeepHealthy = !buyIceCream

    return {
        buyIceCream,
        buyTV50,
        buyTV32,

        KeepHealthy
    }
}
console.log(buys(true, true))
console.log(buys(true, false))
console.log(buys(false, true))
console.log(buys(false, false))