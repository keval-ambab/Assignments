// CHALLENGE 2:
// Create a function `sum` that will sum all arguments passed to it.
// The quantity of the arguments is unknown.
// print `sum` result.

//perspective 1
const sum = (...num) => {
    return num.reduce((back, forth) => {
        return back + forth;
    });
}
console.log(sum(15, 151, 20, 18, 78));


//perspective 2
const sum = (...arg) => {
    total = 0
    for (const a of arg) {
        total += a;
    }
   return total;
}
console.log(sum(15, 151, 20, 18, 98, 78));
