// Perform the above CHALLENGE 3 witch change as

// Inside the main function
// use await function for call `CreatePerson` functions.
users = [];

class Person {
  constructor(firstName, lastName, mobileNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.mobileNumber = mobileNumber;
  }

  fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
}

let createPerson = (firstName, lastName, mobileNumber) => {
  return new Promise((resolve, reject) => {
    if (users.some((user) => user.mobileNumber === mobileNumber)) {
      reject("The mobile number is already exist");
    } else {
      obj = new Person(firstName, lastName, mobileNumber);
      users.push(obj);
      resolve(console.log(obj.fullName(firstName, lastName)));
    }
  });
}

 const main = async() => {
  try {
    await createPerson("keval", "Parikh", 1234567890);
  }
  catch (err) {
    console.log(err);
  }

  try {
    await createPerson("Akash", "Sahani", 7894561230);
  } catch (err) {
    console.log(err);
  }

  try {
    await createPerson("Lovelesh", "Pandey", 1234567890);
  } catch (err) {
    console.log(err);
  }

  try {
    await createPerson("Sonu", "Prusty", 1234567890);
  } catch (err) {
    console.log(err);
  }

  try {
    await createPerson("Siddhesh", "More", 5652424210)
  } catch (err) {
    console.log(err);
  }

  try {
    await createPerson("Akshay", "pawar", 7896541230)
  } catch (err) {
    console.log(err);
  }

  try {
    await createPerson("sandesh", "chavan", 4567891230)
  } catch (err) {
    console.log(err);
  }

  try {
    await createPerson("Harshada", "kadam", 7895462130)
  } catch (err) {
    console.log(err);
  }

  try {
    await createPerson("Ashwin", "Gupta", 7893214560)
  } catch (err) {
    console.log(err);
  }

  try {
    await createPerson("kevin", "parikh", 1234567890)
  } catch (err) {
    console.log(err);
  }

}

main();
