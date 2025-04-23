/**
 * @param {number[]} arr
 * @param {(n: number, i: number) => number} fn
 * @return {number[]}
 */
function map(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
}
