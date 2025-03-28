// YOUR CODE BELOW



const maxOfThree=(firstNumber, secondNumber, thirdNumber)=>{
    let largestNumber =0;


    if (firstNumber > secondNumber || firstNumber === secondNumber){
        largestNumber = firstNumber;
    }
    if (firstNumber < secondNumber ){
        largestNumber = secondNumber;
    }

    if (largestNumber > thirdNumber || largestNumber === thirdNumber){
        largestNumber = largestNumber;
    }
    if (largestNumber < thirdNumber ){
        largestNumber = thirdNumber;
    }

    return largestNumber;
};

console.log(maxOfThree(0,60,60));