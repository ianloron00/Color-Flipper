"use strict";
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const hero_btn = document.querySelector("#btn");
const color_name = document.getElementById("color-page-name");

hero_btn.addEventListener("click", function() {
        const new_color = getRandomColor();
        document.body.style.backgroundColor = new_color;
        color_name.innerHTML = new_color;        
    } 
);

function getRandomColor() {
    const randomId = Math.floor( Math.random() * colors.length );
    return colors[randomId];
}