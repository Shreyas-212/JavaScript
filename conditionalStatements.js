//Consitional Statements

let age = 25;

if(age >= 18) {
    console.log("You can vote.")
}

if(age < 18) {
    console.log("You cannot vote.")
} 

let price = 80;

if(price > 100) {
    console.log("High Price");
} else {
    console.log("Low Price"); 
}

if(price > 100) {
    console.log("High price");
} else if (price < 100 && price > 40) {
    console.log("Medium price");
} else {
    console.log("Low price"); 
}

//Ternary Operator
age > 20 ? console.log("Yes") : console.log("No");