/**
 * @param {number} init
 * @return {{
 *   increment: () => number,
 *   decrement: () => number,
 *   reset: () => number
 * }}
 */
function createCounter(init) {
    let current = init;

    return {
        increment: () => ++current,
        decrement: () => --current,
        reset: () => {
            current = init;
            return current;
        }
    };
}

// \U0001f9ea Example 1
let counter1 = createCounter(5);
console.log(counter1.increment()); // 6
console.log(counter1.reset());     // 5
console.log(counter1.decrement()); // 4

// \U0001f9ea Example 2
let counter2 = createCounter(0);
console.log(counter2.increment()); // 1
console.log(counter2.increment()); // 2
console.log(counter2.decrement()); // 1
console.log(counter2.reset());     // 0
console.log(counter2.reset());     // 0
