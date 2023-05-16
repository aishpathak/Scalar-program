/*
Given an Array of n elements. Return true if there exist subarray with sum=0;
arr=[2,4,3,-5,-2,4,-4]
*/
//Questions: what this does ? set.has(sum) ????
function hasSubarrayWithSumZero(arr) {
    let sum = 0;
    const set = new Set();
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (sum === 0 || set.has(sum)) {
        return true;
      }
      set.add(sum);
    }
    return false;
  }

  console.log(hasSubarrayWithSumZero([2,4,3,-5,-2,4,-4]));
  