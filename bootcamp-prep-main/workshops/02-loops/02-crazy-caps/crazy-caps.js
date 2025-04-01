// YOUR CODE BELOW


const crazyCaps=(str)=>{
    
    
    capStr = [];
    
    for (let i=0; i<= str.length-1; i++){
        // console.log(i);
        capStr.push(str[i])
        if (i%2 === 1){
            capStr.push(str[i])
            console.log(i);
        }
        // step = i + 2;
        // str = str.toUpperCase()[step];
    }
    

    return capStr;

};


console.log(crazyCaps("hellos"));