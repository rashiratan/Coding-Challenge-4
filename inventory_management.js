//Task 1: Create an array to store inventory information
let inventory = [
    { name: 'Coffee Machine', price: 120, quantity: 14, lowStockLevel: 3 },
    { name: 'Nespresso', price: 150, quantity: 15, lowStockLevel: 2 },
    { name: 'Air Fryer', price: 200, quantity: 18, lowStockLevel: 4 },
    { name: 'Toaster Oven', price: 250, quantity: 24, lowStockLevel: 5 },
    { name: 'Toaster', price: 100, quantity: 22, lowStockLevel: 7 }
         ];

//Task 2: Create a Function to Display Product Details
//creating a function for stock status, for possible future use
function StockStatus (product) {
    return product.quantity <= product.lowStockLevel ? "Low Stock" : "In Stock";
//use ternary operator to determine stock status
} 
function displayProductDetails(product){
    return `The name of the product is ${product.name}, priced at ${product.price}, with a quantity of ${product.quantity} indicating the stock status of ${StockStatus(product)}.`;
} 
//log the stock status