// Implement a `priceCalculator` function which takes in a boolean `isChild` and a string `dayOfWeek`. 
// If it is a Sunday then price of ticket would be 80 else price would be 50
// if it is a child then the price would be halved

let isChild;
function priceCalculator(isChild, dayOfWeek){
    var price;
    if (isChild) {
        if (dayOfWeek == 'Sunday') {
            price = 40;
        }
        else
            price = 25;
    }
    else {
        if (dayOfWeek == 'Sunday') {
            price = 80;
        }
        else
            price = 50;
    }
    console.log("Price of Ticket: " + price);
}

// Q.2 calculate ticket price this person will have to pay on Sunday.
let person = {
  name: 'Sujan',
  age: 22
};

if (person.age < 12) {
    isChild == true;
}
else
    isChild == false;
    
priceCalculator(isChild, 'Friday');