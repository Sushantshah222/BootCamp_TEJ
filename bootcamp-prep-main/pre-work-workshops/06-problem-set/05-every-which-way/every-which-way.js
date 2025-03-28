// YOUR CODE BELOW


const everyWhichWay=(firstNum, secondNum,thirdNum)=>{

    if ((firstNum + secondNum) === thirdNum){
        return 'sum';
    }

    if (firstNum - secondNum === thirdNum) return 'difference';

    if (firstNum * secondNum === thirdNum) return 'product';

    if (firstNum / secondNum === thirdNum) return 'fraction';

    return null;
};

console.log(everyWhichWay(6,2,3))