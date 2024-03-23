// Importing our custom module
const mathModule = require('./math');

// Using functions from the imported module
const sum = mathModule.add(5, 3);
const product = mathModule.multiply(4, 2);

console.log('Sum:', sum);
console.log('Product:', product);
