var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log("i:", i);
    console.log("nums", nums);
    if (nums[i] == val) {
      k++;
      nums.splice(i, 1);
      --i;
    } 
    console.log("k:", k);
  }
  console.log("nums:", nums);
  return k;
};

let nums = [3, 2, 2, 3];

let val = 3;

let length = removeElement(nums, val);

console.log("length:", length);
// remove all instances of 3 in nums
// return the number of elements
// in nums != val
// k = #ofElements != val
// return k
