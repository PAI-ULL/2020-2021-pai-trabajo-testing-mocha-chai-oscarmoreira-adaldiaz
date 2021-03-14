function sum() {
    // Convert arguments object to array
    let args = Array.prototype.slice.call(arguments);
    
    // Throw error if arguments contain non-finite number values
    if (!args.every(Number.isFinite)) {
      throw new TypeError('sum() expects only numbers.')
    }
    
    // Return the sum of the arguments
    return args.reduce(function(acc, currentValue) {
      return acc + currentValue;
    }, 0);
}
