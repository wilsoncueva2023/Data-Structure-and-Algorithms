function heightChecker(heights) {
    // Create a sorted copy of the heights array
    const sortedHeights = [...heights].sort((a, b) => a - b);
    
    // Count the number of positions where the heights differ
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedHeights[i]) {
            count++;
        }
    }
    
    return count;
}

// Test cases
console.log(heightChecker([1, 1, 4, 2, 1, 3]));  // Output: 3
console.log(heightChecker([5, 1, 2, 3, 4]));     // Output: 5
console.log(heightChecker([1, 2, 3, 4, 5]));     // Output: 0
console.log(heightChecker([1, 3, 2, 2, 3, 1]));  // Output: 4
