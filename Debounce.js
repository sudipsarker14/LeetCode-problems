/**
 * @param {Function} fn - the function to debounce
 * @param {number} t - debounce delay in milliseconds
 * @return {Function}
 */
function debounce(fn, t) {
    let timer = null;

    return function (...args) {
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, t);
    };
}
