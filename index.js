var randomNumber1 = Math.floor(Math.random () * 6) + 1;
var randomNumber2 = Math.floor(Math.random () * 6) + 1;
var randomDice1 = "Dice" + randomNumber1 + ".png";
var randomDice2 = "Dice" + randomNumber2 + ".png";
var randomImageSource1 = "./images/" + randomDice1;
var randomImageSource2 = "./images/" + randomDice2;
document.querySelector (".img1").setAttribute ("src", randomImageSource1);
document.querySelector (".img2").setAttribute ("src", randomImageSource2);
if (randomDice1>randomDice2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (randomDice1<randomDice2){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
    else {
        document.querySelector("h1").innerHTML = "Try again";
    }
