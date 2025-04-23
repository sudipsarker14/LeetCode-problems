function expect(val) {
    return {
        toBe: function(otherVal) {
            if (val === otherVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(otherVal) {
            if (val !== otherVal) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
}

// Helper to run the function and catch errors
function run(func) {
    try {
        return { value: func() };
    } catch (err) {
        return { error: err.message };
    }
}

// \U0001f50d Examples:

// Example 1
console.log(run(() => expect(5).toBe(5))); 
// Output: { value: true }

// Example 2
console.log(run(() => expect(5).toBe(null))); 
// Output: { error: 'Not Equal' }

// Example 3
console.log(run(() => expect(5).notToBe(null))); 
// Output: { value: true }