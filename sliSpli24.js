/*
Coding in function threeInOne. function accept 1 parameters arr, 
it's a 1D number array. Your task is to merge each of the 3 elements 
into 1 elements (sum value) and return the result.

Note1: You should not modify the original array.

Note2: Because this is a beginner Kata, and due to the author's mercy, 
so you do not have to verify the validity of the parameter, and do not 
worry about the number of elements of the array is not a multiple of 3.

Example:

threeInOne( [1,2,3]) should return [6]
threeInOne( [1,2,3,4,5,6]) should return [6,15]
threeInOne( [1,2,3,4,5,6,7,8,9]) should return [6,15,24]
threeInOne( [1,3,5,2,4,6,7,7,7]) should return [9,12,21]
*/

/*
p arr, merge 3 elemts to one
r 1,2,3 = 6
e:
p
*/
// let arr = [1,3,5,2,4,6,7,7,7]

// let muri = [1,3,5,2,4,6,7,7,7].reduce((a, c) => a + c, 0)
// console.log(muri);

function threeInOne(arr){
          var result = [];

          for(var i=0; i<arr.length; i+=3) {
                    result.push(arr[i] + arr[i+1] + arr[i+2]);
          }

          // return result
          console.log(result);
}

threeInOne( [1,2,3]) 
threeInOne( [1,2,3,4,5,6]) 
threeInOne( [1,2,3,4,5,6,7,8,9])
threeInOne( [1,3,5,2,4,6,7,7,7])