class Person{
    constructor(name = 'mr.jack', age = 0) {
        this.name = name
        this.age = age
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old`
    }

    getGreeting(){
        return `Hi my name is ${this.name}`
    }
}

const me = new Person('joao',14)
const other = new Person()
//console.log(me.getDescription());
//console.log(other);


class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasmajor(){
        return !!this.major
    }

    getDescription(){
        let description = super.getDescription();
        if (this.hasmajor()) {
            description+=`, their major is ${this.major} `
        }
        return description;
    }
}
const student1 = new Student('marcos', 17, 'Computer Science');
//console.log(student1.getDescription());

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    setHomeLocation(homeLocation){
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting+=` and i'm from ${this.homeLocation}`
        }
        return greeting
    }
}
    const traveler = new Traveler('flavio', 24, 'paris')

    console.log(traveler.getGreeting());
    