(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}]},{},[1]);
