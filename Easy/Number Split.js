function numberSplit(n) {
let a = Math.floor(n/2);
let b = n-a;
let c = [];
// return c.push(a,b)
return [a,b]
}

console.log(numberSplit(4), [2, 2])
console.log(numberSplit(10), [5, 5])
console.log(numberSplit(11), [5, 6])
console.log(numberSplit(0), [0, 0])
console.log(numberSplit(1), [0, 1])
console.log(numberSplit(-4), [-2, -2])
console.log(numberSplit(-5), [-3, -2])
console.log(numberSplit(-9), [-5, -4])
