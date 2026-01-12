let marks = [97, 82, 85, 66, 36];

let sum = 0;

for (let val in marks) {
    sum += marks[val];
}
console.log(sum);
let avg = sum / marks.length;
console.log(`Average marks is: ${avg}`);