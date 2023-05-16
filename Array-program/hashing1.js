/*
Given an array which has duplicate elelments. Find the first non repeating elements..
arr = [2,4,2,1,4,4,3]
*/
function nonRepeatingElement(arr){
  
    let obj = {};
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]]=1
        }
        else{
            obj[arr[i]] +=1
        }
    }
    for(key in obj){
        if(key==1)
        {
            console.log(key)
        }
    };
}
nonRepeatingElement([2,4,2,1,4,4,3]);