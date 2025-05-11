// YOUR CODE BELOW
const unShift=(arr,value)=>{
    let newArr = [];
    newArr[0] = value;
    for (let i=0; i<arr.length; i++){
        newArr[i+1] = arr[i];
    }
    return newArr;
};

// test cases
console.log(unShift([1, 2, 3, 4], 0)); 
console.log(unShift([1, 2, 3], 7)); 