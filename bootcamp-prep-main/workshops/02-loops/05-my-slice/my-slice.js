// YOUR CODE BELOW


const mySlice=(originalString,startIdx=0,endIdx=originalString.length)=>{

    let slicedString = ''
    
    for(let i = startIdx; i<endIdx; i++){

        char = originalString[i];
        slicedString += char;
    }
    return slicedString;
};


console.log(mySlice("Sushant is a King",2,7));
// console.log(mySlice("Sushant is a King",0,3));
