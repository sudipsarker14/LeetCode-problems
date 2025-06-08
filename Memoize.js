function memoize(fn) {
    const cache = new Map();
    let callCount = 0;

    const memoizedFn = (...args) => {
        const key = args.join(',');

        if (!cache.has(key)) {
            const result = fn(...args);
            cache.set(key, result);
            callCount++;
        }

        return cache.get(key);
    };

    memoizedFn.getCallCount = () => callCount;

    return memoizedFn;
}
