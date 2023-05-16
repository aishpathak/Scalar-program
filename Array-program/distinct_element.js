/*
Given an Array. Return the number of distinct element in the array.
arr = [2,4,2,1,4,4,3]
it means whose frequqncy is 1
*/

function findDistinctElement(arr){
    let obj = {};
    let count = 1;
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[i] = 1;
        }
        else{
            obj[arr[i]] +=1
        }
    }
    for(key in obj){
        if(obj[key] == 1){
            count +=1;
        }
    }
    return count;
}
console.log(findDistinctElement([2,4,2,1,4,4,3]));