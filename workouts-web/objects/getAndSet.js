const seq = {
    _value: 1, //convencion
    get value() {
        return this._value++
    },
    set value(value) {
        this._value = value
        if (vlaue > this._value) {
            this._value = value
        }
    }



}

console.log(seq.value, seq.value)