function cancellable(fn, args, t) {
    const timeoutId = setTimeout(() => {
        fn(...args);
    }, t);

    const cancelFn = () => {
        clearTimeout(timeoutId);
    };

    return cancelFn;
}
