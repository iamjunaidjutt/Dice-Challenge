let randomNum1 = Math.floor(Math.random() * 6) + 1;

let player1El = document.querySelector(".img1");

switch (randomNum1) {
    case 1:
        player1El.setAttribute("src","./images/dice1.png");
        break;
    case 2:
        player1El.setAttribute("src","./images/dice2.png");
        break;
    case 3:
        player1El.setAttribute("src","./images/dice3.png");
        break;
    case 4:
        player1El.setAttribute("src","./images/dice4.png");
        break;
    case 5:
        player1El.setAttribute("src","./images/dice5.png");
        break;
    case 6:
        player1El.setAttribute("src","./images/dice6.png");
        break;
    default:
        console.log("wrong random number!");
}

let randomNum2 = Math.floor(Math.random() * 6) + 1;

let player2El = document.querySelector(".img2");

switch (randomNum2) {
    case 1:
        player2El.setAttribute("src","./images/dice1.png");
        break;
    case 2:
        player2El.setAttribute("src","./images/dice2.png");
        break;
    case 3:
        player2El.setAttribute("src","./images/dice3.png");
        break;
    case 4:
        player2El.setAttribute("src","./images/dice4.png");
        break;
    case 5:
        player2El.setAttribute("src","./images/dice5.png");
        break;
    case 6:
        player2El.setAttribute("src","./images/dice6.png");
        break;
    default:
        console.log("wrong random number!");
}

let h1El = document.querySelector("h1");
if (randomNum1 > randomNum2) {
    h1El.textContent = "🚩 Player1 Wins!";
} else if(randomNum1 < randomNum2) {
    h1El.textContent = "Player2 Wins! 🚩";
} else {
    h1El.textContent = "Draw!";
}

