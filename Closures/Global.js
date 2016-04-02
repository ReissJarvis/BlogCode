// Two items that can be added to the basket.
var items = [{
    Name : "Computer",
    Price : 599.99
  },
  {
    Name : "Laptop",
    Price : 200.00
  }];
// The Shopping Basket.
var basket = [];

// Function to add Items to the shopping basket
function AddItem(item){
  console.log("Adding " + item.Name + " to the basket!");
  basket.push(item);
}

// Function to remove items from the basket
function RemoveItem(item){
  var index = basket.indexOf(item);
  if (index > -1) {
    console.log("Taking " + item.Name + " out of the basket!");
    basket.splice(index, 1);
    return;
  }
  Console.log(item.Name + " is not in the basket!");
}

// Using the functions to add and remove from the basket;
AddItem(items[0]); // Basket Will contain : Computer
AddItem(items[1]); // Basket will contain : Computer, Laptop
console.log(basket); // [Computer, Laptop]
RemoveItem(items[1]); // Remove Item, Basket will contain : Computer
console.log(basket); // [Computer]
