// YOUR CODE BELOW


const zeroDarkThirty = (num) => {
    
    const string = num.toString();
    let results = '';

    for (let i=0; i<string.length; i++){
        let eachDigit = string[i];
        if (eachDigit !== '0'){
            results += eachDigit;
        }
    }
    return parseFloat(results);
};
console.log(zeroDarkThirty(0)); // 0  
console.log(zeroDarkThirty(100203)); // 123