let globalvar="Global Text";
function func(){
    let localvar="Local Text";
    if(localvar.length>0){
        let blockvar="Block Text";
        var blockvar1="Block var Text";
        console.log(blockvar);
        console.log(localvar);
        console.log(globalvar);
    }
    // console.log(blockvar);error scope cant defined
    console.log(blockvar1);
    console.log(localvar);
    console.log(globalvar);
}
func();
console.log(globalvar);