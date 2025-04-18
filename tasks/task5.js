function evaluateConditions(obj){
    if(obj.age>18 && obj.hasLicense){
        return "Eligible to drive";
    }
    if(obj.temperature >30 || obj.humidity>70){
        return "Warning: High discomfort level";
    }
    if((obj.role=="admin"||obj.role=="editor")&&obj.isActive){
        return "Access granted";
    }
    if((obj.isStudent&&obj.age<26)||obj.hasLicense){
        return "Should be Earning";
    }
}
const user={
    age:20,
    hasLicense:true,
    temperature: 28,
    humidity: 60,
    role: "user",
    isStudent:true
}
console.log(evaluateConditions(user));