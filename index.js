function hasTargetSum(array, target) {
    const number = new Set();  
    for (let num of array) {
      const complement = target - num;
      if (number.has(complement)) {
        return true;
      }
      number.add(num);
    }
    return false;
  }


/* 
  Write the Big O time complexity of your function here
*/

/* 
  function that receives an array of integers and a target integer that at least two of the numbers in the array add up to
  function that loops through an array of numbers until the some of two of those numbers adds up to the target integer
*/

/*
  initialize empty set (number) to store the numbers we have been given
  iterate through each number (num) in the given array using a for...of loop.
  for each num, we calculate the complement as target - num.
    if the complement is present, it means we have found a pair of numbers that add up to the target. In that case, we return true
    if the complement is not present in the number set, we add the current num to the set using the add method
  if we exhaust all numbers in the array without finding a pair that adds up to the target, we return false
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
}

module.exports = hasTargetSum;
