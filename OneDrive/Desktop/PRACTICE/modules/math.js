// Defining functions in our module
function add(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  // Exporting the functions so that they can be used outside this module
  module.exports = {
    add,
    multiply
  };
  