/* Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ 
times. You may assume that the majority element always exists in the array. */

var majorityElement = function(nums) {
   const counts = {}
    nums.forEach(element => {
        counts[element] = (counts[element] || 0) + 1
    });

    return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
}

const nums = [2,3,2,5,7,7,7]
console.log(majorityElement(nums))