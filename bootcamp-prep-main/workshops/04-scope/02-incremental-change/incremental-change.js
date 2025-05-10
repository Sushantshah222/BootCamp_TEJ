let counter = 0;

// YOUR CODE BELOW
const incrementalChange = (number) => {
    counter += number ;
    return counter;
};

console.log(incrementalChange(10)); 
console.log(incrementalChange(-3));