// reverse the array from start to end.
//->start & end are array indexs and will given as an input.
//-> start <end
//example: arr[] = [-2,4, 6,7,8,1 ,5]; =>op= [-2,4,1,8,7,6,5]
// start =2 ,end =5
function reverseA(a,start,end){
    let b = a.slice();
    let i=start;
    let j=end;
    while(i<j){
        temp=a[i];
        a[i] = a[j];
        a[j] = temp;
        i++;
        j--;
    }
    return [b,a];
} 
console.log(reverseA([-2,4,6,7,8,1,5],2,5));