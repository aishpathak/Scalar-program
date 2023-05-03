// Prefix sum array: Sum of all elements from start till the ith index i{x=0arr[i]
/*Given an array elements and a starting index and an ending index. Find sum in that range.
you have given q queries.
ex1: arr[] = [2,4,1,6,5];
l=0,r=3;
l=1,r=2;
l=2,r=4

*/
function findSum(a,l,r,q){
    for(let i=0;i<q;i++){
    for(let j=l;j<r;j++){
        sum = sum+a[i];
    }
    for(let j=l;j<r;j++){
        sum = sum+a[i];
    }
    for(let j=l;j<r;j++){
        sum = sum+a[i];
    }
}}


/*       0 1 2 3 4
arr[] = [2,4,1,6,5];
pf[] = [2,6,7,13,18]
ex: sum(2,4) = 
    sum(0,4) = sum(0,1) +sum(2,4)
    sum(2,4) = sum(0,4) -sum(0,1)
             = pf[4] - pf[1] = 18 - 6 = 12
    sum(1,3) = pf[3] - pf[0] = 13-2 = 11
    sum(2,3) = pf[3]-pf[1] = 13-6 = 7
*/
a = [2,4,1,6,5];
//prepare prefix sum array
pf[0] = arr[0]; //2
for(let i=1;i<=arr.length;i++){
    pf[i] = pf[i-1] + arr[i];//
}

for(let i=0;i<q;i++){
    let sum;
    if(l==0){
        sum = pf[r];
    }
    else{
        sum = pf[r] -pf[l-1];
    }
    console.log(sum);
}