//Given an array elements, rotate the array from last to first k times. sc should be o(1). k<n.
// k=3
// arr [] = [5,2,3,-1,6,1,2]
// k=1, [2,5,2,3,-1,6,1]
// k=2, [1,2,5,2,3,-1,6]
// k=3, [6,1,2 ,5,2,3,-1]
        // k=3
        // i=0,n-3+i
        // a[0] => a[7-3+0] => 6,2,3,-1,5,1,2
        // a[1] =>a[7-3+1] =>6,1,3,-1,5,2,2
        // a[2] =>a[7-3+2] => 6,1,2,-1,5,2,3
        // a[n-1] = a[k]

/* approach:
1. Reverse full array
2. reverse now 0 to k-1
3. reverse k to n-1
*/
function roateArray(a,k){
    let originalArray = a.slice();
    let i= 0;
    let j= a.length-1
    while(i<j){
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        i++;
        j--;
    }
    i=0,j=k-1;
    while(i<j){
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        i++;
        j--;
    }
    i=k,j=a.length-1;
    while(i<j){
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        i++;
        j--;
    }
    return [originalArray,a];
}
console.log(roateArray([5,2,3,-1,6,1,2],3));