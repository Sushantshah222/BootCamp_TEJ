
// YOUR CODE BELOW
const oddCouple = (array) => {
    let oddnumbers = [];

    for (let i = 0; i < array.length; i++) {
        currentNum = array[i];
        if (currentNum % 2) {
            oddnumbers.push(currentNum);
            if (oddnumbers.length === 2) {
                
                return oddnumbers;
            }
        }
    }
    return oddnumbers;
};

console.log(oddCouple([1, 2, 3, 4, 5, 6, 7, 8, 9]))

console.log(oddCouple([1, 2]))
