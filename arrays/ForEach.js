const approved = ['Ana', 'Cristiano', 'Thiago', 'Ricardo']

approved.forEach(function (name, index, array) {
    console.log(`${index + 1}) ${name}`)
    //console.log(array)
})

approved.forEach(name => console.log(name))

const displaysApproved = approved => console.log(approved)
approved.forEach(displaysApproved)