const children = document.querySelectorAll(".child");
const colorText = document.querySelector(".colorText");
const button = document.querySelector("button");

let won = 0;

// let hexColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
let hexColor = "";
let rgbColor = "";

function init() {

    if (won === 1) {
        won = 0;
        document.querySelector("span").removeChild(document.querySelector("span h1"));
    }

    children.forEach((child) => {
        child.style.visibility = "visible";
    });

    let i = 0;

    const random = (min = 0, max = 50) => {
        let num = Math.random() * (max - min) + min;
        return Math.floor(num);
    };

    let index = random(min = 0, max = 8);

    children.forEach((child) => {
        let temp = "#" + ((1<<24)*Math.random() | 0).toString(16)
        child.style.backgroundColor = temp;
        if (i === index) {
            hexColor = temp; 
            rgbColor = child.style.backgroundColor;
        }
        i++;
    });

    colorText.innerHTML = "Color: " + hexColor;
}

function start() {

    init();

    button.addEventListener('click', () => {
        init();
    });
    
    children.forEach(child => child.addEventListener("click", () => {
        if (child.style.backgroundColor === rgbColor && won === 0) {
            var youWin = document.createElement("h1");
            var newText = document.createTextNode("you win :)");
            youWin.appendChild(newText);
            var element = document.querySelector("span");
            element.appendChild(youWin);
            won = 1;

            children.forEach((child) => {
                child.style.visibility = "visible";
                child.style.backgroundColor = rgbColor;
            });
        }
        else if (won === 1);
        else {
            child.style.visibility = "hidden";
        }
    }));
}

start();
