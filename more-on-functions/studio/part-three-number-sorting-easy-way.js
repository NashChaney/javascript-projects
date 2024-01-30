//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
function findMinValue(arr){
    let min = arr[0];
    for (i = 0; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  }
  function sortedArray(arr) {
    let sortedArray = [];
    while (arr.length > 0) {
  
      let minValue = findMinValue(arr);
      sortedArray.push(minValue);
      arr.splice(arr.indexOf(minValue), 1);
    }
  }
    return sortedArray;
    console.log(sortedArray,nums1);
    console.log(sortedArray,nums2);
    console.log(sortedArray,nums3);
  
//Sort each array in decending order.

nums1.sort(function(a, b){return a-b});