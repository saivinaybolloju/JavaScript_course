function findLongestPalindrome(arr){
    let LongPalIndex=0;
    let LongPalinSize=1;
    for(let i=0;i<arr.length;i++){
        let l=i-1;
        let h=i+1;
        while(l>=0 && h<arr.length && arr[l]===arr[h]){
            if(h-l+1>LongPalinSize){
                LongPalIndex=l;
                LongPalinSize=h-l+1;
            }
            l--;
            h++;
        }
        l=i-1;
        h=i;
        while(l>=0 && h<arr.length && arr[l]===arr[h]){
            if(h-l+1>LongPalinSize){
                LongPalIndex=l;
                LongPalinSize=h-l+1;
            }
            l--;
            h++;
        }
    }
    return str.substring(LongPalIndex,LongPalIndex+LongPalinSize);
}
let str="psds";
console.log(findLongestPalindrome(str));
