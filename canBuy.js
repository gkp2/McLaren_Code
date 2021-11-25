// Challenge 2
// Implement the function canShop that takes an array of objects (groceries) and the balance amount and checks if we can purchase all the items that are listed in grocery list or not.

// Example:

// canShop([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Cereals", quantity: 1, price: 2.50 }
// ], 5) ➞ true // because we have sufficient amount to purchase all the grocery items.

// canShop([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Eggs", quantity: 12, price: 0.10 },
//   { product: "Bread", quantity: 2, price: 1.60 },
//   { product: "Cheese", quantity: 1, price: 4.50 }
// ], 10) ➞ false // As we donot have sufficient amount to purchase all the grocery items.

canShop([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
  ], 10);
  
  canShop([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 }
  ], 5);
  
  function canShop(obj,money){
    let total = 0, len = obj.length;
    for(let i = 0; i < len;i++){
      total = total + (obj[i].quantity*obj[i].price);
    }
    console.log(total, money);
    if(total > money) {
      return false;
    }
    else {
      return true;
    }
  }