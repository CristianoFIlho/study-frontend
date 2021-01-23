const peaple = {
    salute: 'Good moorning!',

    speak() {
        console.log(this.salute)

    }
}

peaple.speak()

const speak = peaple.speak
speak() //conflict between paradigms: function

const talkAboutPerson = peaple.speak.bind(peaple)
talkAboutPerson()