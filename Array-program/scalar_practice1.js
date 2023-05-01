// Given an array elements, count numbers of elements having atleast 1 element grater than itself.

//a[7] = [-1,2, 4,6,5,6,2]; // => 5 =>7-2 =5
//a[6] = [1,9,14,22,4,6]; //5

//approach:
/*
1. find max Element
2. find occurance of max element.
3. 

*/
function findOccurance(a){
    let maxValue = a[0];
    let count = 0
for(let i=0;i<a.length;i++){
    if(a[i]>maxValue){
        maxValue = a[i];
    }
}
for(let i=0;i<a.length;i++){
    if(a[i]=== maxValue)
    {
        count++
    }
}
let occurance = a.length-maxValue-count;
return occurance;
}
let a = findOccurance([1,2,8,3,6,8]);
console.log(a);