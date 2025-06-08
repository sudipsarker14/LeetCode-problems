function promiseAll(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let resolvedCount = 0;

        functions.forEach((fn, i) => {
            try {
                fn()
                    .then(value => {
                        results[i] = value;
                        resolvedCount++;
                        if (resolvedCount === functions.length) {
                            resolve(results);
                        }
                    })
                    .catch(err => {
                        reject(err);
                    });
            } catch (err) {
                reject(err);
            }
        });
    });
}
