// YOUR CODE BELOW


const howEqual = (a,b)=>{

    if (a === b) return ('strictly');
    if (a == b) return ('loosely');
    
    return ('not equal');
};


console.log(howEqual(1,1)); 
console.log(howEqual(1,'1')); 
console.log(howEqual(1,2)); 
console.log(howEqual('1',1)); 
console.log(howEqual(true,true)); 
console.log(howEqual('hello world','jjgjg khjhi'));
