var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".PNG";
var randomeImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomeImageSource);


var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".PNG";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins";
}
else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 2 Wins"
}
else{
  document.querySelector("h1").innerHTML = "Draw!"
}
