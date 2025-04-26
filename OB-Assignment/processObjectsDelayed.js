function processObjectDelayed(items,delay){
    let i=0;
    items.forEach(element => {
        setTimeout(()=>{
            const fn=element.process;
            fn();
        },delay*i++);
    });
}
const items = [
    { name: "Alpha", process: function() { console.log(`Processing: ${this.name}`); } },
    { name: "Beta", process: function() { console.log(`Task for ${this.name} done.`); } }
  ];
processObjectDelayed(items,1000);