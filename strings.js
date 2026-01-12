//String
let str = "Tony Stark";

console.log(str.length);
console.log(str[0]);
console.log(str[7]);

//template literals
let obj = {
    item: "pen",
    price: 10
};

let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

console.log("Tony \n stark");
console.log("Tony \t stark");

let upper = str.toUpperCase();
console.log(upper);
let lower = str.toLowerCase();
console.log(lower);
let str1 = "            tony stark            ";
console.log(str1.trim());

let str3 = "01234567";
console.log(str3.slice(1, 5));
console.log(str3.charAt(3));
console.log(str3.replace(2, 4));
console.log(str3);