var body = document.getElementById("gradient");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var cssHex = document.querySelector("h3");
// console.log(color1.value);

function setGradient(){
     
    // "linear-gradient (to right, " + color1.value + " ," + color2.value + ")";
    body.style.background = "linear-gradient(to right, " +color1.value +" ," +color2.value +" )";

    cssHex.textContent = body.style.background;
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);