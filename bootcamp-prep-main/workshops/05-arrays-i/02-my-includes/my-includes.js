// YOUR CODE BELOW


const myIncludes = (array, value) => {
    for (let i=0; i<array.length;i++){
        currentItem = array[i];
        if (currentItem === value){
            return true;
        }

    }
    return false;
};


console.log(myIncludes([1, 2, 3], 6)); // false
console.log(myIncludes(["ram", "shyam","hari"], "shyam")); // true