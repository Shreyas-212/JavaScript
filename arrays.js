//Arrays
let marks = [97, 82, 85, 66, 36];
console.log(marks);
console.log(marks.length);

//Array Indices
console.log(marks[0]);
console.log(marks[4]);

//Replace
marks[0] = 33;
marks[1] = 0;
console.log(marks);

//loop over arrays
for (let index = 0; index < marks.length; index++) {
    const element = marks[index];
    console.log(element);
}

//For of loop
for (let el of marks) {
    console.log(el);
}

//Array Methods
//Push()
let foodItems = ["potato", "tomato", "apple", "litchi"];
foodItems.push("chips", "burger", "paneer");
console.log(foodItems);

//Pop()
foodItems.pop();
console.log(foodItems);

//toString()
console.log(foodItems.toString());

//Unshift()
foodItems.unshift('Pizza');
console.log(foodItems);

//shift()
console.log(foodItems.shift());

//slice()
console.log(foodItems.slice(2, 5));

//splice() - (startIdx, deleteCount, replace)
let arr = foodItems.splice(2, 2, "Mango", "lemon")
console.log(arr);

//concat()
console.log(marks.concat(foodItems));