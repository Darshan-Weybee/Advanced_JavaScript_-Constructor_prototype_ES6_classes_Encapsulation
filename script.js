'use strict';

const Person = function(firstName, birthYear){
    // instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
}

// 1. New {} is created
// 2. function is called , this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const jonas = new Person("jonas", 1991);
console.log(jonas);

const matilda = new Person("Matilda", 1995);
const jack = new Person("jack", 1999);

console.log(matilda, jack);

const jay = "jay";
console.log(jack instanceof Person);
console.log(jay instanceof Person);

Person.prototype.calcAge =  function(){
    console.log(2037 - this.birthYear);
}
jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ == Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sepiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

const arr = [3,6,6,6,5,9,9];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

Array.prototype.unique = function(){
    return [...new Set(this)];
}
console.log(arr.unique());
const h1  = document.querySelector('h1');
console.dir(h1);
console.dir(x => x+1);

//ES6 Classes

// expression method
// const PersonCl = class{}

//declaration method
class PersonCl {
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge(){
        console.log(2037-this.birthYear);
    }

    greet(){
        console.log(`Hey ${this.firstName}`);
    }

    static hey(){
        console.log("hey there");
        console.log(this);
    }
}


const jessica = new PersonCl("jessica", 1999);

jessica.calcAge();
jessica.greet();

// classes are not hoisted
// classes are first-class citizens (pass or return in function)
// classes are executed in strict mode

// getter and setter

const account = {
    owner: "jonas",
    movements: [100,200,300,400],

    get latest(){
        console.log(this.movements.slice(-1).pop());
    },

    set latest(mov){
        this.movements.push(mov);
    }
}
account.latest;
account.latest = 50;

// class PersonCl {
//     constructor(fullname, birthYear){
//         this.fullname = fullname;
//         this.birthYear = birthYear;
//     }

//     calcAge(){
//         console.log(2037-this.birthYear);
//     }

//     greet(){
//         console.log(`Hey ${this.firstName}`);
//     }

//     set fullname(name){
//         if(name.includes(" ")) this._fullname = name;
//         else alert("not valid");
//     }

//     get fullname(){
//         console.log(this._fullname);
//     }
// }
// const walter = new PersonCl("walter", 1998);


// static method

// Array.from();
// Number.parseFloat(12);
// Number.parseInt();

Person.hey = function(){
 console.log("Hey There");
 console.log(this);
}
Person.hey();
PersonCl.hey();


// Object.create
const PersonProto = {
    calcAge(){
        console.log(2037-this.birthYear);
    }, 
    init(name, birthYear){
        this.name = name;
        this.birthYear = birthYear;
    }
}

const steven  = Object.create(PersonProto);
steven.init("steven", 1999);
steven.calcAge();


// inheritance betweeen two construction function
const Person1 = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person1.prototype.calcAge = function(){
    console.log(2037-this.birthYear);
}

const Student = function(firstName, birthYear, course){
    Person1.call(this, firstName, birthYear);
    this.course = course;
}

Student.prototype = Object.create(Person1.prototype);

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and i study ${this.course}`);
}

const mike = new Student("mike", 2010, "computer Eng.");
mike.introduce();
mike.calcAge();

console.log(mike instanceof Student);
console.log(mike instanceof Person1);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// inheritance betweeen two classes

class StudentCl extends PersonCl{
    constructor(firstName, birthYear, course){
        // always super() come first in constructor
        super(firstName, birthYear);
        this.course = course;
    }

    introduce(){
        console.log(`My name is ${this.firstName} and i study ${this.course}`);
    }

    calcAge(){
        console.log(`I'm ${2037-this.birthYear} years old, but as a student I feel more like ${2037-this.birthYear + 10}`);
    }
}
 
const Martha = new StudentCl("Martha", 2012, "Computer Eng.");
console.log(Martha);
Martha.introduce();
Martha.calcAge();


// inheritance betweeen two using Object.create

const PersonProto1 = {
    calcAge(){
        console.log(2037-this.birthYear);
    }, 
    init(name, birthYear){
        this.name = name;
        this.birthYear = birthYear;
    }
}
const StudentProto = Object.create(PersonProto1);
StudentProto.init = function(firstName, birthYear, course){
    PersonProto1.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function(){
    console.log(`My name is ${this.name} and i study ${this.course}`);
}

const juice = Object.create(StudentProto);
juice.init("juice", 2012, "computer Eng.");
juice.calcAge();
juice.introduce();


class Account1{
    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        this._pin = pin;
        this._movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }
    getMovements(){
        console.log(this._movements);
    }
    deposit(val){
        this._movements.push(val);
    }
    withdraw(val){
        this.deposit(-val);
    }
    _approveLoan(val){
        return true;
    }
    requestLoan(val){
        if(this._approveLoan(val)){
            this.deposit(val);
            console.log("Loan approved");
        }
    }
}

const acc1  =  new Account1("jonas", "EUR", 1111);
acc1.deposit(1000);
acc1.deposit(2000);
acc1.withdraw(100);
acc1.requestLoan(5000);
acc1.getMovements();
console.log(acc1);


// ENCAPSULATION 

class Account2{
    // public fields(instance)
    locale = navigator.language;

    //private fields(instance)
    #movements = [];
    #pin;

    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // public methods
    getMovements(){
        console.log(this.#movements);
    }
    deposit(val){
        this.#movements.push(val);
        return this;
    }
    withdraw(val){
        this.deposit(-val);
        return this;
    }
    // private methods
    #approveLoan(val){
        return true;
    }
    //
    requestLoan(val){
        if(this.#approveLoan(val)){
            this.deposit(val);
            console.log("Loan approved");
            return this;
        }
    }

    static helper(){
        console.log("helper method");
    }
}

const acc2  =  new Account2("jonas", "EUR", 1111);
acc2.requestLoan(200);
acc2.getMovements();
console.log(acc2);
// console.log(acc2.#movements);
// console.log(acc2.#pin);
// console.log(#approveLoan);


// chaining 

// return whole object so we can chaining th methods

acc2.deposit(300).deposit(500).withdraw(25).requestLoan(25000).withdraw(4000);
acc2.getMovements();
Account2.helper();
// deposit(val){
//     this.#movements.push(val);
//     return this;
// }
// withdraw(val){
//     this.deposit(-val);
//     return this;
// }
// requestLoan(val){
//     if(this.#approveLoan(val)){
//         this.deposit(val);
//         console.log("Loan approved");
//         return this;
//     }
// }


  