class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    profile() {
        console.log(`Hello ${this.name}. you are ${this.age} years old.`);
    }
}

module.exports = Student;