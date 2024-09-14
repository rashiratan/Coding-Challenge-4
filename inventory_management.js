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

//Task 3: Create a Function to Update Product Stock After Sales
function updateStock(product, unitsSold) {
    for (let item of inventory) {
        //using the for-of method to update product object in intial inventory array
        if (item.name === product.name){
            if(unitsSold > item.quantity) {
                return `Unable to update as there are only ${item.quantity} pieces of this item available.`//ensuring sale quantity is per availability
            }
        item.quantity -= unitsSold;
        return `${item.name} is now ${StockStatus(item)} after updating quantity to ${item.quantity}.`//logging the update stock information
        }
        return 'Invalid product';//ensuring product exists in inventory
    
        }
}

//Task 4: Create a Function to Check Low Stock Products

function checkLowStock (inventory) {
    for (let product of inventory) {
      if (StockStatus(product) === "Low Stock") //condition to check product status
          {
          return product.name; //logging products that are out of stock
          }
      }   
      return "No items are low in stock."; //logging message for no low stock items
  }

//Task 5: Create a Function to Calculate Total Inventory Value
function calculateInventoryValue(inventory){
    return inventory.reduce((total, product) => total + product.quantity*product.price, 0)
} //usign reduce method to calculate total inventory value