/*
Given an array of size n & Q queries. Each queries asks for the frequency of the given elements.
there can be duplicates in the array 
arr = [2,4,2,1,4,4,3]
Q=4
1. Frequency of 2
2. Frequency of 4
3. Frequency of 3
[2:1]
*/

function getFrequency(arr){
    obj = {};
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]]=1
        }
        else{
            obj[arr[i]] +=1
        }
    }
    console.log(obj);
}
getFrequency([2,4,2,1,4,4,3]);
