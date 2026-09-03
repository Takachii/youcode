let productCount = 0;
let productPrice = 19.99;
let productWeight = 0.24;

// here we add any number of products for test

productCount = 10;

console.log("Product Counts:", productCount)
console.log("Product Price:", "$" + (productCount * productPrice).toFixed(2) )
console.log("Product Weight:", (productCount * productWeight).toFixed(2) + " Kg" )