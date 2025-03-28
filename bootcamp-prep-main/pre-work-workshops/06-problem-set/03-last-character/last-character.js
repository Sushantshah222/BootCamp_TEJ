// YOUR CODE BELOW

// self Solution I

const lastCharacter=(a,b)=>{
    


    if (a.charAt(a.length -1) === b.charAt(b.length -1)) 
        {return true};

    return false;
};


console.log(lastCharacter("hellot", "sushant"))




// self solution II

// const lastCharacter=(a,b)=>{
    
//     if (a[a.length-1] === b[b.length-1]){
//         return true;
//     }
//     return false;

// };


// console.log(lastCharacter("hellot", "sushant"))