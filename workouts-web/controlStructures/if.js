function GoodNews(note) {
    if (note > 7) {
        console.log('Approved' + note)

    } else {


    }

}
GoodNews(8.1)
GoodNews(6.1)

function ISpeakIsTrue(value) {
    if (value) {
        console.log('It is true' + value)
    }
}

ISpeakIsTrue()
ISpeakIsTrue(null)
ISpeakIsTrue(undefined)
ISpeakIsTrue(NaN)
ISpeakIsTrue('')
ISpeakIsTrue(0)
ISpeakIsTrue(-1)
ISpeakIsTrue(' ')
ISpeakIsTrue('?')
ISpeakIsTrue([])
ISpeakIsTrue([1, 2])
ISpeakIsTrue({})

