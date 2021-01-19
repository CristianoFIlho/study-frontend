const notes = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//without callback


let notesDown1 = []
for (let i in notes) {
    if (notes[i] < 7) {
        notesDown1.push(notes[i])
    }
}

console.log(notesDown1)

//with callback 

notesDown2 = notes.filter(function (note) {
    return note < 7
})
notesSmallerThan7 = note => note < 7
    console.log(notesDown2)

const notesDown3 = notes.filter(notesSmallerThan7)
console.log(notesDown3)