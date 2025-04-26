function createUniqueCounter(){
    var counter_variable=0;
    return({
        increment:()=>++counter_variable,
        getValue:()=>counter_variable,
    })
}
const counter=createUniqueCounter();
console.log(counter.counter_variable);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.getValue());
console.log(counter.increment());