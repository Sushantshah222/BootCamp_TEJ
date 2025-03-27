// YOUR CODE BELOW

// Self Solution I
// Incomplete
// const myMnemonic = (a,b,c,d) => {

//     let word = a[0] + b[0] + c[0] + d[0];
//     return word;
// }

// console.log(myMnemonic('Hello','Sushant','Shah','Namaste'));


// watched solution I
// const myMnemonic =(firstWord,secondWord,thirdWord,fourthWord) =>{
//     let menomic = '';

//     if (firstWord !== undefined){
//         menomic = menomic + firstWord[0]
//     };
    
//     if (secondWord !== undefined) menomic += secondWord[0];
//     if (thirdWord !== undefined) menomic += thirdWord[0];
//     if (fourthWord !== undefined) menomic += fourthWord[0];

//     return menomic;
// };

// // console.log(myMnemonic("Sushant", "Shah", "Nepal", "Dharan"))
// // console.log(myMnemonic("Sushant", "Shah"))



// solution II
// rest operator,turning all operator into array

const myMnemonic=(...words)=>{
    memonic =" ";

    for (let i=0; i < words.length; i++){
        const currentWord = words[i];
        const currentCharacter = currentWord[0];

        memonic += currentCharacter;

    }
    return memonic;
};

console.log(myMnemonic("Sushant","Shah","Pi Innovations","Biratnagar"));