//Functions
function myFunctions() {
    console.log("Hello world!");
    console.log("We are learning JS");
}

myFunctions();

//Parameterized functions
function sum(a, b) {
    console.log(a + b);
}

sum(2, 3);
sum(67, 45);

function sum1(x, y) {
    s = x + y;
    return s;
}

let val = sum1 (33, 45);
console.log(val);

//Arrow Function
const arrowSum = (x, y) => {
    console.log(x + y);
}
arrowSum(4, 5);

//forEach loop in array
let arr = [1, 2, 3, 4, 5];
arr.forEach((val, idx, arr) => {
    console.log(val, idx, arr);
});


//Map
let newArr = arr.map((val) => {
    return val ** 2;
});
console.log(newArr);

//filter
let evenArr = arr.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr);

//reduce 
let output = arr.reduce((prev, curr) => {
    return prev + curr;
});

console.log(output);