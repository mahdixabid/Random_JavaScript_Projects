//simple
let simpleColor = ["green", "red", "fuchsia", "yellow", "pink", "LightCoral", "indigo", "blueviolet", "Salmon", "aqua", "olive", "lightpink"] // u can add more colors inside the array
let simpleBtn = document.getElementById('simpleBtn');
let color = document.querySelector(".color");

simpleBtn.addEventListener('click', function() {
    function getRandomNumber() {
        return Math.floor(Math.random() * simpleColor.length);
    }
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = simpleColor[randomNumber];
    color.textContent = simpleColor[randomNumber];
});

// Hex
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let hexBtn = document.getElementById('hexBtn')

hexBtn.addEventListener('click', function() {
    function getRandomNumber() {
        return Math.floor(Math.random() * hex.length);
    }
    let hexcolor = '#';
    for (let i = 0; i < 6; i++) {
        hexcolor += hex[getRandomNumber()];
    }
    color.textContent = hexcolor;
    document.body.style.backgroundColor = hexcolor;
})