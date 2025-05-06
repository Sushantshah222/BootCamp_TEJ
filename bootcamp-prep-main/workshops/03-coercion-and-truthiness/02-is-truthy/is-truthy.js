// YOUR CODE BELOW


const isTruthy=(args)=>{
    if (args) return true;

    switch (args) {

        
        case false:
            return 'The boolean value false is falsey';
        case null:
            return 'The null value is falsey';
        
        case undefined:
            return 'undefined is falsey';

        case 0:
            return 'The number 0 is falsey (the only falsey number)';
        
        case '':
            return 'The empty string is falsey (the only falsey string)';
        default:
            return 'Nan is falsey';
};

}

// test cases
console.log(isTruthy(true)); // true
console.log(isTruthy(false)); // false
console.log(isTruthy(null)); // false
console.log(isTruthy(undefined)); // false
console.log(isTruthy(0)); // false
console.log(isTruthy('')); // false
console.log(isTruthy(NaN)); // false
console.log(isTruthy('hello')); // true
console.log(isTruthy(42)); // true
console.log(isTruthy({})); // true
console.log(isTruthy([])); // true