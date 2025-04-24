function timeLimit(fn, t) {
  return async function (...args) {
    return Promise.race([
      fn(...args),
      new Promise((_, reject) => 
        setTimeout(() => reject("Time Limit Exceeded"), t)
      )
    ]);
  };
}

// Example usage:
const fn = async (n) => { 
  await new Promise(res => setTimeout(res, 100)); 
  return n * n; 
};

const limited = timeLimit(fn, 50);
const start = performance.now();

limited(5)
  .then(res => {
    console.log({
      resolved: res,
      time: Math.floor(performance.now() - start)
    });
  })
  .catch(err => {
    console.log({
      rejected: err,
      time: Math.floor(performance.now() - start)
    });
  });
