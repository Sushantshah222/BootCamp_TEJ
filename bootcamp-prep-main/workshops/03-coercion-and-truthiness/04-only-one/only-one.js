// YOUR CODE BELOW
//solution I

const onlyOne = (a, b, c) => {
    return (a && !b && !c) || (!a && b && !c) || (!a && !b && c);
};

//test cases
// console.log(onlyOne(true, false, false)); 
// console.log(onlyOne(false, true, false)); 
// console.log(onlyOne(false, false, true)); 
// console.log(onlyOne(true, true, false)); 
// console.log(onlyOne(true, false, true)); 


