// run with node --expose-gc program_test.js
// don't do this in production

function printMemoryUsage(message) {
  const used = process.memoryUsage();
  console.log(message);
  for (let key in used) {
    console.log(
      `${key} ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`
    );
  }
}

function generateRandomArray(size, max) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}

function removeWithSplice(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      --i;
    } else {
      k++;
    }
  }
  return k;
}

function removeWithShifting(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}

const size = 100000;
const maxValue = 9;
const testArray = generateRandomArray(size, maxValue);
const valToRemove = 5;

// Test for splice method
const arrayForSplice = [...testArray];
printMemoryUsage("Before Splice method");
console.time("Splice method");
removeWithSplice(arrayForSplice, valToRemove);
console.timeEnd("Splice method");
printMemoryUsage("After Splice method");

// Force garbage collection if needed
if (global.gc) {
  global.gc();
}

// Test for shifting method
const arrayForShifting = [...testArray];
printMemoryUsage("Before Shifting method");
console.time("Shifting method");
removeWithShifting(arrayForShifting, valToRemove);
console.timeEnd("Shifting method");
printMemoryUsage("After Shifting method");
