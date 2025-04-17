let amount=204356789000.35;
let currencyCode="JPY";
console.log(formatCurrency(amount,currencyCode));
function formatCurrency(amount,currencyCode){
    return amount.toLocaleString(`en-${currencyCode.slice(0,2)}`,{
        style:'currency',
        currency:currencyCode,
    });
}