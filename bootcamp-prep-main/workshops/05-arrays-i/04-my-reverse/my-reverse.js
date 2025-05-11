// YOUR CODE BELOW
const myReverse = (arr) => {
    let reversedArr = [];
    for (let i = arr.length -1; i>=0; i--){
        reversedArr.push(arr[i]);
    }
    return reversedArr;
};


// test cases
console.log(myReverse([1, 2, 3, 4, 5])); 
console.log(myReverse([1, 2, 3])); 