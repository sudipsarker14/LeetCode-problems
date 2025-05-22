function cancellable(fn, args, t) {
    // Call the function immediately
    fn(...args);

    // Start interval that repeatedly calls the function every t milliseconds
    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    // Return the cancel function
    return function cancelFn() {
        clearInterval(intervalId);
    };
}
