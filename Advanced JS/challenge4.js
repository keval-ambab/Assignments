// CHALLENGE 3: (Perform this challenge in parts)

// Create a `users` empty array (which will have Person class objects).
users = [];

// Create a `Person` class with data fields firstName, lastName, mobileNumber.
// with function
class Person {
  constructor(firstName, lastName, mobileNumber) {
    // constructor -> to set object field values
    this.firstName = firstName;
    this.lastName = lastName;
    this.mobileNumber = mobileNumber;
  }
  
  // fullName function - which will return a combination of firstName, lastName.
  fullName(firstName, lastName) {
    return `${firstName} ${lastName}`; 
  }
}

// Create a `createPerson` function will accept parameters firstName, lastName, mobileNumber.
// The function should return Promise.
// Promise will have the functionality to add the `Person` object to the `users` array.

let createPerson = (firstName, lastName, mobileNumber) => {
  return new Promise((resolve, reject) => {
    // The Promise should fail if a mobile number already exists in the `users` array to another person object.
    if (users.some(user => user.mobileNumber === mobileNumber)) {
      reject("The mobile number is already exist");
    }
    // The Promise should return Person fullName for success.
    else {
      obj = new Person(firstName, lastName, mobileNumber);
      users.push(obj);
      resolve(obj.fullName(firstName, lastName));
    }
  });
}

// Create a `main` function.
let main = () => {
  // Inside the main function
  // Call the `CreatePerson` function 10 times with different parameters (firstName, lastName, mobileNumber) and display fullName or Error.
  createPerson("keval", "Parikh", 1234567890)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
  
  createPerson("Akash", "Sahani", 7894561230)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
  
  createPerson("Lovelesh", "Pandey", 1234567089)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
  
  createPerson("Siddhesh", "More", 5652424210)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
  
  createPerson("Akshay", "pawar", 7896541230)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
  
  createPerson("sandesh", "chavan", 4567891230)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
  
  createPerson("Harshada", "kadam", 7895462130)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
  
  createPerson("Ashwin", "Gupta", 7893214560)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
  
  createPerson("kevin", "parikh", 1234567890)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
  
  createPerson("Sonu", "Prusty", 1234567890)
  .then((result) => console.log(result))
  .catch((err) => console.log(err)); 
}

// Execute the main function.
main();