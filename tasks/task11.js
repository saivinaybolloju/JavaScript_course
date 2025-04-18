
function groupByCategory(items,categoryKey){    
    const grouped={};
    for(const item of items){
        const category=item[categoryKey];
        if(!grouped[category]){
            grouped[category]=[];
        }
        grouped[category].push(item);
    }
    return grouped;
}

let products=[
    {name:"laptop",category:"Electronics",price:1200},
    {name:"T-Shirt",category:"Clothes",price:500},
    {name:"Mouse",category:"Electronics",price:1100},
    {name:"Jeans",category:"Clothes",price:1500},
];
console.log(groupByCategory(products,'category'));
