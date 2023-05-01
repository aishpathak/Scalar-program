//Given an array. Reverse it. SC should be o(1)
//a[] = [2,4,1,5,6,8,3]
// solution1
// function reverseArray(a){
//     let arrNew = [];
//     for(let i=a.length-1;i>0;i--){
//         arrNew.push(a[i]);
//         console.log(a[i])
//     }
//     console.log(arrNew);
//     return arrNew;
// }

// console.log(reverseArray([2,4,1,5,6,8,3]));
//complexity o(n)
//2nd solution
function reverseArray1(arr){
    let i=0;
    let j=arr.length-1;
    while(i<arr.length/2){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}


console.log(reverseArray1([2,4,1,5,6,8,3]));