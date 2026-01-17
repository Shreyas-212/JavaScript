//Prototype
const employee = {
    calcTaax() {
        console.log("Tax rate is 10%");
    },
};

const karanArjun = {
    salary: 50000,
};

karanArjun.__proto__ = employee;

//Classes
class Car {
    constructor() {
        console.log("Car");
    }
    start() {
        console.log("Start");
    }
    stop() {
        console.log("Stop");
    }
    setBrand(brand) {
        this.brand = brand;
    }
}

let fortuner = new Car();
fortuner.setBrand("Toyota");

//Inheritance
class Parent {
    hello() {
        console.log("Hello");
    }
}

class Child extends Parent {}

let obj = new Child();
obj.hello();

//Super keyword
class Person {
    constructor() {
        console.log("Enter parent constructor");
        this.species = "homo sapiens";
    }

    eat() {
        console.log("Eats");
    }
}

class Engineer extends Person {
    constructor(branch) {
        console.log("Enter child constructor");
        super();
        this.branch = branch;
        console.log("Exit child constructor");
    }
    work() {
        console.log("Works");
    }
}

let engObj = new Engineer("Computer Engg");