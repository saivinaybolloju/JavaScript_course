function createCalculator(a,b) {
    return {
        add: (a,b) => {
            return a + b;
        },
        subtract: (a,b)=>{
            return a-b;
        },
        multiply: function(a,b){
            return a*b;
        },
        divide: function(a,b){
            return (b==0)?"Cant divide by zero : ERROR":a/b;
        } 
    }   
}
const calculator=createCalculator();
console.log(calculator.add(3,5));
console.log(calculator.subtract(10,5));
console.log(calculator.multiply(5,5));
console.log(calculator.divide(10,5));
console.log(calculator.divide(5,0));