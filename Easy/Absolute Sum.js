function getAbsSum(arr) {
	let sum =0;
    for(let i =0;i<arr.length;i++){
        sum += Math.abs(arr[i]);
    }
    return sum;
}

console.log(getAbsSum([2, -1, -3, 4, 8]), 18);
console.log(getAbsSum([-1]), 1);
console.log(getAbsSum([-1, -3, -5, -4, -10, 0]), 23);
console.log(getAbsSum([8, 9, 10, 32, 101, -10]), 170);
console.log(getAbsSum([500]), 500);