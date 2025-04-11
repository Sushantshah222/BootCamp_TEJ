// YOUR CODE BELOW

// self solution I
// const exponentiate=(base,power)=>{

//     exp = base**power;
//     return exp;
// };

// console.log(exponentiate(3,4));



// self solution II
const exponentiate=(base,power)=>{

    exp = 1;

    for (let i=0; i<power; i++){
        exp = exp * base;
    }
return exp
};

console.log(exponentiate(2,0));
