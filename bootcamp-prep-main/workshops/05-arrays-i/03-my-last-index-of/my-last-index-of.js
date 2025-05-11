// YOUR CODE BELOW

const myLastIndexOf = (arr, value,startIndex=arr.length) =>{
    for (let i=startIndex; i>=0; i--){
        currentTerm = arr[i];
        if (currentTerm === value) return i;
    }
    return -1;
}; 