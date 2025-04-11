// YOUR CODE BELOW


const bacteriaTime=(currentNum,targetNum)=>{

    if (targetNum < currentNum) return 'targetNum must be larger than currentNum';

    currentTime =0;
    bacteriaNum = currentNum;
    while (bacteriaNum < targetNum){


        currentTime += 20;
        bacteriaNum *= 2;


    }
    return currentTime;

};

console.log(bacteriaTime(202,50));