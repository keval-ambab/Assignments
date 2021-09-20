// CHALLENGE 3:
//Create a function sumPlusMinus() that takes array and sums separately positive and negative numbers.
// var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];
// It should return an object like this:
// {
//   plus: 74, // sum of all positive numbers
//   minus: -54 // sum of all negative numbers
// }

const sumPlusMinus = (num) => {
  let plus = 0;
  let minus = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] < 0) {
      minus += num[i];
    } else {
      plus += num[i];
    }
  }
  return { plus: plus, minus: minus };
}
console.log(sumPlusMinus([10, -12, 30, -1, -8, 0, 14, -33, 20]));

