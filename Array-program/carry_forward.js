//count pairs "ag"
/*
Given a char array , calculate the number of pairs i,j such that i<j 
s[i] = 'a' && s[j] = 'g'.
All char are lower case
ex. arr[b,a,a,g,d,c,a,g]
*/

function calculateNoOfPairs(str){
    str = [...str]
    let count = 0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i] == 'a')
        {
        for(let j=i+1;j<=str.length;j++){
           
                if(str[j] =='g'){
                count++;
        }
    }
}
}
return count;
}


console.log(calculateNoOfPairs('b,a,a,g,d,c,a,g'));