/**
 * @param {number} n
 * @return {Function}
 */
function createCounter(n) {
    return function() {
        return n++;
    };
}

// Example 1
let n1 = 10;
let calls1 = ["call", "call", "call"];

let counter1 = createCounter(n1);
let output1 = calls1.map(() => counter1());
console.log(output1); // Output: [10, 11, 12]

// Example 2
let n2 = -2;
let calls2 = ["call", "call", "call", "call", "call"];

let counter2 = createCounter(n2);
let output2 = calls2.map(() => counter2());
console.log(output2); // Output: [-2, -1, 0, 1, 2]
