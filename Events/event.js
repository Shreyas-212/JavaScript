let btn1 = document.querySelector("#btn1");

//Event object
btn1.onclick = (evt) => {
    console.log("btn was clicked");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX);
    console.log(evt.clientY);
}

//Event Listener
let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    console.log("Button was clicked");
})