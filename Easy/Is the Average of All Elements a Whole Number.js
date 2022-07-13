function isAvgWhole(arr) {
	let sum = 0;
    for(let i =0;i<arr.length;i++){
        sum += arr[i]; 
    }
    if(Number.isInteger(sum/arr.length)){
        return true;
    }else{
        return false;
    }
}

console.log(isAvgWhole([3, 5, 9]), false);
console.log(isAvgWhole([1, 1, 1, 1]), true);
console.log(isAvgWhole([1, 2, 3, 4, 5]), true);
console.log(isAvgWhole([5, 2, 4]), false);
console.log(isAvgWhole([11, 22]), false);
console.log(isAvgWhole([4, 1, 7, 9, 2, 5, 7, 2, 4]), false);