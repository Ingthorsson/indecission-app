
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age
    }
    getGreeting() {
        return `${this.name} is ${this.age} years old`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name,age,major)
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getGreeting() {
        let description = super.getGreeting();

        if (this.hasMajor()){
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

const me = new Student('Stefan Ingthorsson', 45, 'Comp Sci');
console.log(me)
console.log(me.hasMajor())
console.log(me.getGreeting())


const other = new Person();
console.log(other.getGreeting())