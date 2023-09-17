function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  function hasTargetNumber(intArray, target)
    for let i = 0; i < intArray.length - 1; i++
      for let j = i + 1; j < intArray.length; j++
        if intArray[i] + intArray[j] === target
          return true
    return false
*/

/*
  Add written explanation of your solution here
  Problem Solving Approach
  Step 1 - Rewrite problem in own words
    Write function hasTargetSum
      -two arguments: integer array, targetNumber
      -if any pair of integers in integer array sum to targetNumber, return true
      -otherwise, return false
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  // Added test case #1
  console.log("");
  
  console.log("Expecting true");
  console.log("=>", hasTargetSum([47, 21, 36, 51], 83));

  // Added test case #2
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([81, 66, 19, 90, 53, 75, 71], 99));
}

module.exports = hasTargetSum;
