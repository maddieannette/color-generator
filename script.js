var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

// console.log(genNew);

// console.log(body);

// Checking to see if they show up
// console.log(css);
// console.log(color1);
// console.log(color2);

// Set GRADIENT
function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";"
}

function randomColor() {
    var newColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    return newColor;
}


function randomGradient() {
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient ();
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", randomGradient);

// function setBackground () {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//   document.body.style.backgroundColor = "#" + randomColor;
//   color.innerHTML = "#" + randomColor;
// }
// genNew.addEventListener("click", setBackground);
// setBackground();

// We want to listen to an event so we understand when the user clicks a color
// color1.addEventListener("input", function(){
    // console.log(color1.value); were replacing this
//     body.style.background = "linear-gradient(to right, " 
//     + color1.value 
//     + ", " 
//     + color2.value 
//     + ")";
// })

// The problem is we have two things too much see Set gradient 
// color2.addEventListener("input", function(){
//     // console.log(color2.value);
//     body.style.background = "linear-gradient(to right, " 
//     + color1.value 
//     + ", " 
//     + color2.value 
//     + ")";
// })
// You will see these working by checking in the console bc. you can see it on console log 
// How can we change the background to reflect the chosen colors