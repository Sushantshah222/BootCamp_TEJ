// YOUR CODE BELOW

capStr = ''
const crazyCaps=(str)=>{
    
    
    
    for (let i=0; i<= str.length-1; i++){
        
        let word = str[i] 
        
        if (i%2 === 0) capStr +=word;

        else capStr += word.toUpperCase();
    }
    return capStr;
};

console.log(crazyCaps("hellos"));