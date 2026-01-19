console.log("One");
console.log("Two");

setTimeout(() => {
    console.log("Hello");
}, 3000);

console.log("Three");
console.log("Four");

//Async-Await function
async function hello() {
    console.log("Hello");
}

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}

async function getWeatherData() {
    await api();
    await api();
}
getWeatherData();

//IIFE
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataId);
            resolve(200);
        }, 2000);
    });
}

(async function() {
    console.log("Getting data1....");
    await getData(1);
    console.log("Getting data2....");
    await getData(2);
    console.log("Getting data3....");
    await getData(3);
    console.log("Getting data4....");
    await getData(4);
    console.log("Getting data5....");
    await getData(5);
})();