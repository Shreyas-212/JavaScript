let items = [250, 645, 300, 900, 50];

for (let index = 0; index < items.length; index++) {
    const element = items[index];
    let offer = element / 10;
    items[index] = items[index] - offer;
    console.log(`Value after offer = ${items[index]}`);
}

console.log(items);