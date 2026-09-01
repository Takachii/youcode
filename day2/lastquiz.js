let age = 7;
let price = 5;
let day = "Monday";

let getDiscount = day === "Tuesday" && true || false;

if ( age < 12 ) {
    price = getDiscount ? price - 2 : price;
} else if ( age >= 65 ) {
    price = 7
    price = getDiscount ? price - 2 : price;
} else {
    price = 10
    price = getDiscount ? price - 2 : price;
}

console.log(getDiscount && "Today is Tuesday everyone get discount, Your Ticket Price: $" + price || "Your Ticket Price: $" + price)