// Given two boolean values boolean1 and boolean2, set the result variable to:
//   - 'both' if both boolean1 and boolean2 are true
//   - 'one' if only one of boolean1 and boolean2 are true
//   - 'none' if neither value is true


// let boolean1 = true, boolean2 = true;
// let boolean1 = true, boolean2 = false;
// let boolean1 = false, boolean2 = true;
let boolean1 = false, boolean2 = false;

let result;

// YOUR CODE BELOW
if(boolean1 && boolean2){
    result = "Both"
    console.log(result)
}

else if(boolean1 || boolean2){
    result = "one"
    console.log(result)

}

else{
    result = "none"
    console.log(result)

}