var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("body-bg");
var colorTitle = document.querySelector("h3");
// var initColor = body.style.background;
colorTitle.textContent = body.style.background;
// console.log(color1);
// console.log(color2);

function getColor(){
    body.style.background = "linear-gradient(to right, " +color1.value +" ," +color2.value +" )";
    colorTitle.textContent = body.style.background;

}

function initColor(){
    colorTitle.textContent = body.style.background;
}

body.addEventListener("onload",initColor);
color1.addEventListener("input",getColor);
color2.addEventListener("input",getColor);