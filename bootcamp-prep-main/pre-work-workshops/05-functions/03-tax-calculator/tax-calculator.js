// YOUR CODE BELOW
// watched solution

const taxCalculator =(price,state) =>{

    switch(state){
        case "NY":
            return price*1.04;
        
        case "NJ":
            return price*1.06625;

        default:
            return price;

    }
};


// console.log(taxCalculator(100,"NJ"))