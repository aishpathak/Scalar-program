/*count pairs "a,g"
Given a character array, calculate the number of pairs i,j such that i<j && s[i] = 'a' && s[j] = 'g'.
All character are lower case.*/
//arr[] = ['b','a','a','g','d','c','a','g'];
//count the number of pairs which is having s[i]='a',s[j]='g'

function countCharcter(a){
    let count = 0;
for(let i=0;i<a.length;i++){
    if(a[i] == 'a')
    for(let j=i+1;j<a.length;j++){
        if(a[j] =='g'){
            count = count + 1;
        }
    }
}
return count;
}

console.log(countCharcter(['b','a','a','g','d','c','a','g']));