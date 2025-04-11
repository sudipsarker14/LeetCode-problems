function twoSum(nums, target) {
    let map = new Map();  // To store the number and its index
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];  // Return the indices of the two numbers
        }
        map.set(nums[i], i);  // Store the current number and its index
    }
    return [];  // This line will never be reached because we are told there is always one solution
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9));  // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));  // Output: [1, 2]
console.log(twoSum([3, 3], 6));  // Output: [0, 1]
