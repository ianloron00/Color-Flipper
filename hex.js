"use strict";
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const colorName = document.querySelector(".color");

btn.addEventListener("click", function() {
        const newColor = getRandomColor();
        document.body.style.backgroundColor = newColor;
        colorName.innerHTML = newColor;
    }
);

function getRandomColor() {
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
        const id = Math.floor( Math.random() * hex.length );
        newColor += hex[id].toString();
    }

    return newColor;
}