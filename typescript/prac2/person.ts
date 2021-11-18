// Assignement
// Create a class Person which will field first name, last name, dob and method getFullName, getAge(return number in year).
// create a person object and pass first name, last name, dob.
// call the function fullName, age.

class Person{
    firstName: string;
    lastName: string;
    dob: Date;

    constructor(firstName:string, lastName:string, dob:Date){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }

     getFullName():string {
        // console.log(`${this.firstName} ${this.lastName}`); 
        return `${this.firstName} ${this.lastName}`; 
        return this.firstName+ " " + this.lastName;

    }

     getAge():number{
        var diff = Date.now() - this.dob.getTime();
        var age_diff = new Date(diff);
        // console.log( Math.abs(age_diff.getUTCFullYear() - 1970));
       return Math.abs(age_diff.getUTCFullYear() - 1970);
    }
}

var person = new Person("Keval","Parikh",new Date(1999, 4, 22));
person.getFullName();
person.getAge();
