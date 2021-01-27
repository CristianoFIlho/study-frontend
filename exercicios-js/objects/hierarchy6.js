function Aula(name, videoID) {

    this.name = name
    this.videoID = videoID
}

const class1 = new Class('Welcame!', 123)
const class2 = new Class('SeeYoulater')
console.log(class1, class2)


//simulator new 

function new1(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const class3 = new1(Class, 'Welcome!', 123)
const class4 = new1(Class, 'see you later!', 456)
console.log(class3, class4)
