const manufacturers = ["Mercedes", "Audi", "BMW"]

function print(name, indice) {
    console.log(`${indice + 1}. ${name}`)

}

manufacturers.forEach(print)
manufacturers.forEach(manufacturer => console.log(manufacturer))
