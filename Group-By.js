Array.prototype.groupBy = function(fn) {
  return this.reduce((grouped, item) => {
    const key = fn(item); // get the key as a string
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(item);
    return grouped;
  }, {});
};