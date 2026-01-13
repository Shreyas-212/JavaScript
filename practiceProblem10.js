let nums = [2, 3, 4, 5, 6];

nums.forEach((num) => {
    console.log(num ** 2);
});

let calculateSq = (num) => {
    console.log(num ** 2);
};

nums.forEach(calculateSq);