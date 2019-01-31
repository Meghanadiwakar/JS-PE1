/**Q 6 Write a JavaScript function to find the difference of two arrays?
 */
function arrDifference (arr1, arr2) {
    var arr = [];
    arr1 = arr1.toString().split(',').map(Number);
    arr2 = arr2.toString().split(',').map(Number);
    // for array1
    for (var i in arr1) {
       if(arr2.indexOf(arr1[i]) === -1)
       arr.push(arr1[i]);
    }
    // for array2
    for(i in arr2) {
       if(arr1.indexOf(arr2[i]) === -1)
       arr.push(arr2[i]);
    }
    return arr.sort((x,y) => x-y);
 }
 console.log(arrDifference([50, 40, 90], [70, 50, 99, 40, 90]));