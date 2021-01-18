const notes = [6.7, 7.4, 9.8, 8.1, 7.7]

for (i in notes) {
    console.log(i, notes[i])
}

const peaple = {
    name: 'Ana',
    lastName: 'Silva',
    age: 30,
    weight: 64
}

for (let attributes in peaple) {
    console.log(`${attributes}= ${peaple[attributes]}`)
}

console.log(attributes)