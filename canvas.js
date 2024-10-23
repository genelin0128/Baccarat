const canvas = document.getElementById('gameCanvas');

function drawStaticContent() {
    // Background
    const ctxBackground = canvas.getContext('2d');

    ctxBackground.fillStyle = '#00BB12';
    roundRect(ctxBackground, 0, 0, canvas.width, canvas.height, 5);
    ctxBackground.fill();

    // PLAYER
    const ctxPlayer = canvas.getContext('2d');

    ctxPlayer.fillStyle = 'blue';
    roundRect(ctxPlayer, 20, 100, 370, 180, 10);
    ctxPlayer.fill();

    ctxPlayer.strokeStyle = 'white';
    ctxPlayer.lineWidth = 1.5;
    roundRect(ctxPlayer, 34.5, 142.75, 132, 94.5, 10);
    ctxPlayer.stroke();

    roundRect(ctxPlayer, 176.5, 124, 94.5, 132, 10);
    ctxPlayer.stroke();

    roundRect(ctxPlayer, 281, 124, 94.5, 132, 10);
    ctxPlayer.stroke();

    ctxPlayer.font = '50px Arial Black';
    ctxPlayer.textAlign = 'center';
    ctxPlayer.textBaseline = 'middle';

    ctxPlayer.strokeStyle = 'blue';
    ctxPlayer.lineWidth = 8;
    ctxPlayer.strokeText('PLAYER', 205, 50);

    ctxPlayer.fillStyle = 'yellow';
    ctxPlayer.fillText('PLAYER', 205, 50);

    // BANKER
    const ctxBanker = canvas.getContext('2d');

    ctxBanker.fillStyle = 'red';
    roundRect(ctxBanker, 410, 100, 370, 180, 10);
    ctxBanker.fill();

    ctxBanker.strokeStyle = 'white';
    ctxBanker.lineWidth = 1.5;
    roundRect(ctxBanker, 424.5, 124, 94.5, 132, 10);
    ctxBanker.stroke();

    roundRect(ctxBanker, 529, 124, 94.5, 132, 10);
    ctxBanker.stroke();

    roundRect(ctxBanker, 633.5, 142.75, 132, 94.5, 10);
    ctxBanker.stroke();

    ctxBanker.font = '50px Arial Black';
    ctxBanker.textAlign = 'center';
    ctxBanker.textBaseline = 'middle';

    ctxBanker.strokeStyle = 'red';
    ctxBanker.lineWidth = 8;
    ctxBanker.strokeText('BANKER', 595, 50);

    ctxBanker.fillStyle = 'yellow';
    ctxBanker.fillText('BANKER', 595, 50);

    // BET AREA
    const ctxBet = canvas.getContext('2d');
    ctxBet.strokeStyle = 'white';
    ctxBet.lineWidth = 1.5;
    roundRect(ctxBet, 20, 290, 760, 290, 10);
    ctxBet.stroke();

    // BET PLAYER PAIR
    const ctxBetPlayerPair = canvas.getContext('2d');
    const ctxBetPlayerPairText = canvas.getContext('2d');

    ctxBetPlayerPair.fillStyle = 'blue';
    roundRect(ctxBetPlayerPair, 30, 300, 270, 120, 10);
    ctxBetPlayerPair.fill();

    ctxBetPlayerPair.font = '30px Arial Black';
    ctxBetPlayerPair.textAlign = 'center';
    ctxBetPlayerPair.textBaseline = 'middle';

    ctxBetPlayerPair.strokeStyle = 'black';
    ctxBetPlayerPair.lineWidth = 5;
    ctxBetPlayerPair.strokeText('PLAYER PAIR', 165, 324);

    ctxBetPlayerPair.fillStyle = 'yellow';
    ctxBetPlayerPair.fillText('PLAYER PAIR', 165, 324);

    ctxBetPlayerPairText.font = '20px Arial Black';
    ctxBetPlayerPairText.textAlign = 'center';
    ctxBetPlayerPairText.textBaseline = 'middle';

    ctxBetPlayerPairText.strokeStyle = 'black';
    ctxBetPlayerPairText.lineWidth = 3;
    ctxBetPlayerPairText.strokeText('11 : 1', 165, 354);

    ctxBetPlayerPairText.fillStyle = 'yellow';
    ctxBetPlayerPairText.fillText('11 : 1', 165, 354);

    // BET PLAYER
    const ctxBetPlayer = canvas.getContext('2d');
    const ctxBetPlayerText = canvas.getContext('2d');

    ctxBetPlayer.fillStyle = 'blue';
    roundRect(ctxBetPlayer, 30, 430, 270, 140, 10);
    ctxBetPlayer.fill();

    ctxBetPlayer.font = '30px Arial Black';
    ctxBetPlayer.textAlign = 'center';
    ctxBetPlayer.textBaseline = 'middle';

    ctxBetPlayer.strokeStyle = 'black';
    ctxBetPlayer.lineWidth = 5;
    ctxBetPlayer.strokeText('PLAYER', 165, 454);

    ctxBetPlayer.fillStyle = 'yellow';
    ctxBetPlayer.fillText('PLAYER', 165, 454);

    ctxBetPlayerText.font = '20px Arial Black';
    ctxBetPlayerText.textAlign = 'center';
    ctxBetPlayerText.textBaseline = 'middle';

    ctxBetPlayerText.strokeStyle = 'black';
    ctxBetPlayerText.lineWidth = 3;
    ctxBetPlayerText.strokeText('1 : 1', 165, 484);

    ctxBetPlayerText.fillStyle = 'yellow';
    ctxBetPlayerText.fillText('1 : 1', 165, 484);

    // BET LUCKY 6
    const ctxBetLucky6 = canvas.getContext('2d');
    const ctxBetLucky6Text = canvas.getContext('2d');

    ctxBetLucky6.fillStyle = 'green';
    roundRect(ctxBetLucky6, 310, 300, 180, 120, 10);
    ctxBetLucky6.fill();

    ctxBetLucky6.font = '30px Arial Black';
    ctxBetLucky6.textAlign = 'center';
    ctxBetLucky6.textBaseline = 'middle';

    ctxBetLucky6.strokeStyle = 'black';
    ctxBetLucky6.lineWidth = 5;
    ctxBetLucky6.strokeText('LUCKY 6', 400, 324);

    ctxBetLucky6.fillStyle = 'yellow';
    ctxBetLucky6.fillText('LUCKY 6', 400, 324);

    ctxBetLucky6Text.font = '20px Arial Black';
    ctxBetLucky6Text.textAlign = 'center';
    ctxBetLucky6Text.textBaseline = 'middle';

    ctxBetLucky6Text.strokeStyle = 'black';
    ctxBetLucky6Text.lineWidth = 3;
    ctxBetLucky6Text.strokeText('12 : 1 / 23 : 1', 400, 354);

    ctxBetLucky6Text.fillStyle = 'yellow';
    ctxBetLucky6Text.fillText('12 : 1 / 23 : 1', 400, 354);

    // BET TIE
    const ctxBetTie = canvas.getContext('2d');
    const ctxBetTieText = canvas.getContext('2d');

    ctxBetTie.fillStyle = 'green';
    roundRect(ctxBetTie, 310, 430, 180, 140, 10);
    ctxBetTie.fill();

    ctxBetTie.font = '30px Arial Black';
    ctxBetTie.textAlign = 'center';
    ctxBetTie.textBaseline = 'middle';

    ctxBetTie.strokeStyle = 'black';
    ctxBetTie.lineWidth = 5;
    ctxBetTie.strokeText('TIE', 400, 454);

    ctxBetTie.fillStyle = 'yellow';
    ctxBetTie.fillText('TIE', 400, 454);

    ctxBetTieText.font = '20px Arial Black';
    ctxBetTieText.textAlign = 'center';
    ctxBetTieText.textBaseline = 'middle';

    ctxBetTieText.strokeStyle = 'black';
    ctxBetTieText.lineWidth = 3;
    ctxBetTieText.strokeText('8 : 1', 400, 484);

    ctxBetTieText.fillStyle = 'yellow';
    ctxBetTieText.fillText('8 : 1', 400, 484);

    // BET BANKER PAIR
    const ctxBetBankerPair = canvas.getContext('2d');
    const ctxBetBankerPairText = canvas.getContext('2d');

    ctxBetBankerPair.fillStyle = 'red';
    roundRect(ctxBetBankerPair, 500, 300, 270, 120, 10);
    ctxBetBankerPair.fill();

    ctxBetBankerPair.font = '30px Arial Black';
    ctxBetBankerPair.textAlign = 'center';
    ctxBetBankerPair.textBaseline = 'middle';

    ctxBetBankerPair.strokeStyle = 'black';
    ctxBetBankerPair.lineWidth = 5;
    ctxBetBankerPair.strokeText('BANKER PAIR', 635, 324);

    ctxBetBankerPair.fillStyle = 'yellow';
    ctxBetBankerPair.fillText('BANKER PAIR', 635, 324);

    ctxBetBankerPairText.font = '20px Arial Black';
    ctxBetBankerPairText.textAlign = 'center';
    ctxBetBankerPairText.textBaseline = 'middle';

    ctxBetBankerPairText.strokeStyle = 'black';
    ctxBetBankerPairText.lineWidth = 3;
    ctxBetBankerPairText.strokeText('11 : 1', 635, 354);

    ctxBetBankerPairText.fillStyle = 'yellow';
    ctxBetBankerPairText.fillText('11 : 1', 635, 354);

    // BET BANKER
    const ctxBetBanker = canvas.getContext('2d');
    const ctxBetBankerText = canvas.getContext('2d');

    ctxBetBanker.fillStyle = 'red';
    roundRect(ctxBetBanker, 500, 430, 270, 140, 10);
    ctxBetBanker.fill();

    ctxBetBanker.font = '30px Arial Black';
    ctxBetBanker.textAlign = 'center';
    ctxBetBanker.textBaseline = 'middle';

    ctxBetBanker.strokeStyle = 'black';
    ctxBetBanker.lineWidth = 5;
    ctxBetBanker.strokeText('BANKER', 635, 454);

    ctxBetBanker.fillStyle = 'yellow';
    ctxBetBanker.fillText('BANKER', 635, 454);

    ctxBetBankerText.font = '20px Arial Black';
    ctxBetBankerText.textAlign = 'center';
    ctxBetBankerText.textBaseline = 'middle';

    ctxBetBankerText.strokeStyle = 'black';
    ctxBetBankerText.lineWidth = 3;
    ctxBetBankerText.strokeText('1 : 1', 635, 484);

    ctxBetBankerText.fillStyle = 'yellow';
    ctxBetBankerText.fillText('1 : 1', 635, 484);

    function roundRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
    }
}


// Calculate total bet
let grabChipsAmount = 0;
let chipStatus = true;      // true: allowed to grab chips; false: not allowed to grab chips
document.getElementById("chip100").addEventListener("click", chip100);
function chip100() {
    if (chipStatus === true) {
        if(grabChipsAmount + 100 > +getCookie("currentBalance")) {
            grabChipsAmount = +getCookie("currentBalance");
        }
        else {
            grabChipsAmount += 100;
        }
        document.getElementById("chipsSelected").textContent = grabChipsAmount;
    }
}

document.getElementById("chip500").addEventListener("click", chip500);
function chip500() {
    if (chipStatus === true) {
        if(grabChipsAmount + 500 > +getCookie("currentBalance")) {
            grabChipsAmount = +getCookie("currentBalance");
        }
        else {
            grabChipsAmount += 500;
        }
        document.getElementById("chipsSelected").textContent = grabChipsAmount;
    }
}

document.getElementById("chip1000").addEventListener("click", chip1000);
function chip1000() {
    if (chipStatus === true) {
        if(grabChipsAmount + 1000 > +getCookie("currentBalance")) {
            grabChipsAmount = +getCookie("currentBalance");
        }
        else {
            grabChipsAmount += 1000;
        }
        document.getElementById("chipsSelected").textContent = grabChipsAmount;
    }
}

document.getElementById("chip2000").addEventListener("click", chip2000);
function chip2000() {
    if (chipStatus === true) {
        if(grabChipsAmount + 2000 > +getCookie("currentBalance")) {
            grabChipsAmount = +getCookie("currentBalance");
        }
        else {
            grabChipsAmount += 2000;
        }
        document.getElementById("chipsSelected").textContent = grabChipsAmount;
    }
}

document.getElementById("chip5000").addEventListener("click", chip5000);
function chip5000() {
    if (chipStatus === true) {
        if(grabChipsAmount + 5000 > +getCookie("currentBalance")) {
            grabChipsAmount = +getCookie("currentBalance");
        }
        else {
            grabChipsAmount += 5000;
        }
        document.getElementById("chipsSelected").textContent = grabChipsAmount;
    }
}

document.getElementById("chip10000").addEventListener("click", chip10000);
function chip10000() {
    if (chipStatus === true) {
        if(grabChipsAmount + 10000 > +getCookie("currentBalance")) {
            grabChipsAmount = +getCookie("currentBalance");
        }
        else {
            grabChipsAmount += 10000;
        }
        document.getElementById("chipsSelected").textContent = grabChipsAmount;
    }
}

// Place bet on PLAYER PAIR
let betPlayerPairAmount = 0;
function placeBetOnPlayerPair(amount) {
    const ctxBetPlayerPair = canvas.getContext('2d');
    betPlayerPairAmount += amount;

    if (amount !== 0) {
        ctxBetPlayerPair.clearRect(35, 370, 260, 42);
        ctxBetPlayerPair.fillStyle = 'blue';
        ctxBetPlayerPair.fillRect(35, 370, 260, 42);

        ctxBetPlayerPair.font = '25px Arial Black';
        ctxBetPlayerPair.textAlign = 'center';
        ctxBetPlayerPair.textBaseline = 'middle';

        ctxBetPlayerPair.strokeStyle = 'black';
        ctxBetPlayerPair.lineWidth = 5;
        ctxBetPlayerPair.strokeText('$' + betPlayerPairAmount, 165, 395);

        ctxBetPlayerPair.fillStyle = 'yellow';
        ctxBetPlayerPair.fillText('$' + betPlayerPairAmount, 165, 395);
    }
}

// Place bet on PLAYER
let betPlayerAmount = 0;
function placeBetOnPlayer(amount) {
    const ctxBetPlayer = canvas.getContext('2d');
    betPlayerAmount += amount;

    if (amount !== 0) {
        ctxBetPlayer.clearRect(35, 510, 260, 52);
        ctxBetPlayer.fillStyle = 'blue';
        ctxBetPlayer.fillRect(35, 510, 260, 52);

        ctxBetPlayer.font = '25px Arial Black';
        ctxBetPlayer.textAlign = 'center';
        ctxBetPlayer.textBaseline = 'middle';

        ctxBetPlayer.strokeStyle = 'black';
        ctxBetPlayer.lineWidth = 5;
        ctxBetPlayer.strokeText('$' + betPlayerAmount, 165, 540);

        ctxBetPlayer.fillStyle = 'yellow';
        ctxBetPlayer.fillText('$' + betPlayerAmount, 165, 540);
    }
}

// Place bet on Lucky 6
let betLucky6Amount = 0;
function placeBetOnLucky6(amount) {
    const ctxBetLucky6 = canvas.getContext('2d');
    betLucky6Amount += amount;

    if (amount !== 0) {
        ctxBetLucky6.clearRect(315, 370, 170, 42);
        ctxBetLucky6.fillStyle = 'green';
        ctxBetLucky6.fillRect(315, 370, 170, 42);

        ctxBetLucky6.font = '25px Arial Black';
        ctxBetLucky6.textAlign = 'center';
        ctxBetLucky6.textBaseline = 'middle';

        ctxBetLucky6.strokeStyle = 'black';
        ctxBetLucky6.lineWidth = 5;
        ctxBetLucky6.strokeText('$' + betLucky6Amount, 400, 395);

        ctxBetLucky6.fillStyle = 'yellow';
        ctxBetLucky6.fillText('$' + betLucky6Amount, 400, 395);
    }
}

// Place bet on TIE
let betTieAmount = 0;
function placeBetOnTie(amount) {
    const ctxBetTie = canvas.getContext('2d');
    betTieAmount += amount;

    if (amount !== 0) {
        ctxBetTie.clearRect(315, 510, 170, 52);
        ctxBetTie.fillStyle = 'green';
        ctxBetTie.fillRect(315, 510, 170, 52);

        ctxBetTie.font = '25px Arial Black';
        ctxBetTie.textAlign = 'center';
        ctxBetTie.textBaseline = 'middle';

        ctxBetTie.strokeStyle = 'black';
        ctxBetTie.lineWidth = 5;
        ctxBetTie.strokeText('$' + betTieAmount, 400, 540);

        ctxBetTie.fillStyle = 'yellow';
        ctxBetTie.fillText('$' + betTieAmount, 400, 540);
    }
}

// Place bet on BANKER PAIR
let betBankerPairAmount = 0;
function placeBetOnBankerPair(amount) {
    const ctxBetBankerPair = canvas.getContext('2d');
    betBankerPairAmount += amount;

    if (amount !== 0) {
        ctxBetBankerPair.clearRect(505, 370, 260, 42);
        ctxBetBankerPair.fillStyle = 'red';
        ctxBetBankerPair.fillRect(505, 370, 260, 42);

        ctxBetBankerPair.font = '25px Arial Black';
        ctxBetBankerPair.textAlign = 'center';
        ctxBetBankerPair.textBaseline = 'middle';

        ctxBetBankerPair.strokeStyle = 'black';
        ctxBetBankerPair.lineWidth = 5;
        ctxBetBankerPair.strokeText('$' + betBankerPairAmount, 635, 395);

        ctxBetBankerPair.fillStyle = 'yellow';
        ctxBetBankerPair.fillText('$' + betBankerPairAmount, 635, 395);
    }
}

// Place bet on BANKER
let betBankerAmount = 0;
function placeBetOnBanker(amount) {
    const ctxBetBanker = canvas.getContext('2d');
    betBankerAmount += amount;

    if (amount !== 0) {
        ctxBetBanker.clearRect(505, 510, 260, 52);
        ctxBetBanker.fillStyle = 'red';
        ctxBetBanker.fillRect(505, 510, 260, 52);

        ctxBetBanker.font = '25px Arial Black';
        ctxBetBanker.textAlign = 'center';
        ctxBetBanker.textBaseline = 'middle';

        ctxBetBanker.strokeStyle = 'black';
        ctxBetBanker.lineWidth = 5;
        ctxBetBanker.strokeText('$'+betBankerAmount, 635, 540);

        ctxBetBanker.fillStyle = 'yellow';
        ctxBetBanker.fillText('$'+betBankerAmount, 635, 540);
    }
}

// Reset Bets Btn
document.getElementById("resetBetBtn").addEventListener("click", resetBet);
function resetBet() {
    deductCurrentBalance(0 - (betPlayerPairAmount + betPlayerAmount + betLucky6Amount + betTieAmount + betBankerPairAmount + betBankerAmount));
    betPlayerPairAmount = 0;
    betPlayerAmount = 0;
    betLucky6Amount = 0;
    betTieAmount = 0;
    betBankerPairAmount = 0;
    betBankerAmount = 0;
    grabChipsAmount = 0;
    document.getElementById("chipsSelected").textContent = grabChipsAmount;
    drawStaticContent();
}

function deductCurrentBalance(betAmount) {
    if (betAmount !== 0) {
        let remainingBalance = 0;
        remainingBalance = +getCookie("currentBalance") - betAmount;
        setCookie("currentBalance", remainingBalance, 7)

        const balance = document.getElementById('currentBalance');
        balance.classList.add('balance-update');

        setTimeout(() => {
            balance.textContent = remainingBalance;
            balance.classList.remove('balance-update');
        }, 1000);
    }
}

// Next Round Btn
document.getElementById("nextRoundBtn").addEventListener("click", nextRound);

function nextRound() {
    betPlayerPairAmount = 0;
    betPlayerAmount = 0;
    betLucky6Amount = 0;
    betTieAmount = 0;
    betBankerPairAmount = 0;
    betBankerAmount = 0;
    grabChipsAmount = 0;
    document.getElementById("chipsSelected").textContent = grabChipsAmount;
    drawStaticContent();
    document.getElementById("nextRoundBtn").disabled = true;
    document.getElementById("nextRoundBtn").classList.add("disabled");
    if (autoDealStatus !== true) {
        enableBtn();
        document.getElementById("roundResult").style.display = "none";
        document.getElementById("resultContainer").style.display = "none";
    }
    isRoundComplete = true;
}

// -------------------------------------------------------- deal card --------------------------------------------------------
// assume there are numberOfDeck decks of cards
let deck;

function getDeckFromCookie() {
    return JSON.parse(getCookie("deck"));
}


function initializeDeck() {
    deck = [];
    for (let i = 1; i <= 52 * numberOfDeck; i++) {
      deck.push(i);
    }
    deckArrayToJSONAndSetCookie(deck);
    shuffleDeck();
}

// shuffle the deck
function shuffleDeck() {
    deck = getDeckFromCookie(deck);
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    deckArrayToJSONAndSetCookie(deck);
}

const cardImage_1_2 = new Image();
const cardImage_3 = new Image();
const ctx = canvas.getContext('2d');
cardImage_1_2.src = 'img/backOfCards/vertical.png';
cardImage_3.src = 'img/backOfCards/horizontal.png';


let dealtCards = [];
let playerCardsValue = [];      // store cards value: 1, 2, 3, ..., J, Q, K
let bankerCardsValue = [];
let playerCards = [];           // store cards points: 1, 2, 3, ..., 9, 10
let bankerCards = [];
let playerIndex;
let bankerIndex;
let imgPlayerCards;
let imgBankerCards;
let playerCard1FlipStatus;
let playerCard2FlipStatus;
let playerCard3FlipStatus;
let bankerCard1FlipStatus;
let bankerCard2FlipStatus;
let bankerCard3FlipStatus;
let flipPlayerCounter;
let flipBankerCounter;
let done;
cardImage_1_2.onload = function() {
    document.getElementById("dealBtn").addEventListener('click', function(event) {
        deal4Cards();
        accumulateTotalBet();
    });
}

let accumulateTotalBetVolume;
function accumulateTotalBet() {
    if ((betPlayerPairAmount + betPlayerAmount + betLucky6Amount + betTieAmount + betBankerPairAmount + betBankerAmount) != 0) {
        accumulateTotalBetVolume += (betPlayerPairAmount + betPlayerAmount + betLucky6Amount + betTieAmount + betBankerPairAmount + betBankerAmount);
        setCookie("accumulateTotalBetVolume", accumulateTotalBetVolume, 7);

        document.getElementById("accumulateTotalBetVolume").classList.add("balance-update");

        setTimeout(() => {
            document.getElementById("accumulateTotalBetVolume").textContent = accumulateTotalBetVolume;
            document.getElementById("accumulateTotalBetVolume").classList.remove("balance-update");
        }, 1000);
    }
}

let playerPoints;
let bankerPoints;
let isRoundComplete;    // true: completed; false: not yet completed
async function deal4Cards() {
    isRoundComplete = false;

    modeChangeAvailability = false;

    grabChipsAmount = 0;
    document.getElementById("chipsSelected").textContent = grabChipsAmount;

    playerPoints = 0;
    bankerPoints = 0;

    playerIndex = 0;
    bankerIndex = 0;

    playerCardsValue = [];
    bankerCardsValue = [];

    playerCards = [];
    bankerCards = [];



    imgPlayerCards = [new Image(), new Image(), new Image()];
    imgBankerCards = [new Image(), new Image(), new Image()];

    flipPlayerCounter = 0;
    flipBankerCounter = 0;

    playerCard1FlipStatus = false;  // false: cannot flip (already flipped) ; true: can flip (not yet flipped)
    playerCard2FlipStatus = false;
    playerCard3FlipStatus = false;
    bankerCard1FlipStatus = false;
    bankerCard2FlipStatus = false;
    bankerCard3FlipStatus = false;

    done = false;


    disableBtn();

    for (let i = 0; i < 4; i++) {
        let cardNumber = deck.pop();
        let imgIndex = (cardNumber % 52);   // get imgIndex.png from img directory, ex: 154 % 52 = 50, get 50.png from img directory
        let cardValue = imgIndex % 13;      // 50 % 13 = 11, which is J
        let points = convertPoints(cardValue);      // convert card value to points
        if (i === 0 || i === 2) {
            imgPlayerCards[playerIndex].src = `img/frontOfCards/vertical/${imgIndex}.png`;
            playerIndex++;
            playerCards.push(points);
            playerCardsValue.push(cardValue);
        }
        else if (i === 1 || i === 3) {
            imgBankerCards[bankerIndex].src =`img/frontOfCards/vertical/${imgIndex}.png`;
            bankerIndex++;
            bankerCards.push(points);
            bankerCardsValue.push(cardValue);
        }
        dealtCards.push(imgIndex);
    }

    // Wait for all four cards to be dealt before starting the countdown.
    setTimeout(function() {
        interval = setInterval(startCountdown, 1000);
    }, 1000)

    await new Promise(resolve => setTimeout(resolve, 500));

    ctx.drawImage(cardImage_1_2, 177, 124, 94.5, 132);      // PLAYER card 1
    playerCard1FlipStatus = true;
    await new Promise(resolve => setTimeout(resolve, 500));

    ctx.drawImage(cardImage_1_2, 425, 124, 94.5, 132);      // BANKER card 1
    bankerCard1FlipStatus = true;
    await new Promise(resolve => setTimeout(resolve, 500));

    ctx.drawImage(cardImage_1_2, 281, 124, 94.5, 132);      // PLAYER card 2
    playerCard2FlipStatus = true;
    await new Promise(resolve => setTimeout(resolve, 500));

    ctx.drawImage(cardImage_1_2, 529, 124, 94.5, 132);      // BANKER card 2
    bankerCard2FlipStatus = true;


    deckArrayToJSONAndSetCookie(deck);
    if (autoDealStatus === true) {
        autoDealProcess2();
    }
}

function disableGarbChips() {
    // not allowed to grab chips
    chipStatus = false;
    document.getElementById("chip100").classList.add("disabled");
    document.getElementById("chip500").classList.add("disabled");
    document.getElementById("chip1000").classList.add("disabled");
    document.getElementById("chip2000").classList.add("disabled");
    document.getElementById("chip5000").classList.add("disabled");
    document.getElementById("chip10000").classList.add("disabled");
}

function enableGarbChips() {
    // allowed to grab chips
    chipStatus = true;
    document.getElementById("chip100").classList.remove("disabled");
    document.getElementById("chip500").classList.remove("disabled");
    document.getElementById("chip1000").classList.remove("disabled");
    document.getElementById("chip2000").classList.remove("disabled");
    document.getElementById("chip5000").classList.remove("disabled");
    document.getElementById("chip10000").classList.remove("disabled");
}

function disableBtn() {
    document.getElementById("resetBetBtn").disabled = true;
    document.getElementById("resetBetBtn").classList.add("disabled");
    document.getElementById("dealBtn").disabled = true;
    document.getElementById("dealBtn").classList.add("disabled");
    disableGarbChips();
}

function enableBtn() {
    document.getElementById("resetBetBtn").disabled = false;
    document.getElementById("resetBetBtn").classList.remove("disabled");
    document.getElementById("dealBtn").disabled = false;
    document.getElementById("dealBtn").classList.remove("disabled");
    enableGarbChips();
}

function checkIfKeepDealing() {
    playerPoints = calculateTotalPoints(playerCards);
    bankerPoints = calculateTotalPoints(bankerCards);

    if (bankerPoints >= 8 || playerPoints >= 8) {
        determineResult(playerPoints, bankerPoints);
    }
    else if ((bankerPoints === 6 && playerPoints === 7) ||
        (bankerPoints === 7 && playerPoints === 6)) {
        determineResult(playerPoints, bankerPoints);
    }
    else if (playerPoints <= 5) {
        dealPlayerCard3();
    }
    else if (playerPoints >= 6 && playerPoints <= 7 && bankerPoints <= 5) {
        dealBankerCard3();
    }
    else {
        determineResult(playerPoints, bankerPoints);
    }
}

async function dealPlayerCard3() {
    await new Promise(resolve => setTimeout(resolve, 500));
    ctx.drawImage(cardImage_3, 34.5, 142.75, 132, 94.5);      // PLAYER card 3
    playerCard3FlipStatus = true;

    let cardNumber = deck.pop();
    deckArrayToJSONAndSetCookie(deck);
    let imgIndex = (cardNumber % 52);   // get imgIndex.png from img directory, ex: 153 % 52 = 49, get 49.png from img directory
    let cardValue = imgIndex % 13;      // 49 % 10 = 10
    let player3CardPoints = convertPoints(cardValue);      // convert card value to points
    imgPlayerCards[playerIndex].src =`img/frontOfCards/horizontal/${imgIndex}.png`;
    playerCards.push(player3CardPoints);
    dealtCards.push(imgIndex);
    if (autoDealStatus === true) {
        autoDealProcess3();
    }
}

function checkIfDealBanker() {
    if (bankerPoints <= 2) {
        dealBankerCard3();
    }
    else if (bankerPoints === 3 && playerCards[2] === 8) {
        // no dealBankerCard3
        determineResult(calculateTotalPoints(playerCards), calculateTotalPoints(bankerCards));
    }
    else if (bankerPoints === 3 && playerCards[2] !== 8) {
        dealBankerCard3();
    }
    else if (bankerPoints === 4 && playerCards[2] >= 2 && playerCards[2] <= 7) {
        dealBankerCard3();
    }
    else if (bankerPoints === 5 && playerCards[2] >= 4 && playerCards[2] <= 7) {
        dealBankerCard3();
    }
    else if (bankerPoints === 6 &&
        (playerCards[2] === 6 || playerCards[2] === 7)) {
        dealBankerCard3();
    }
    else if (bankerPoints === 7) {
        // no dealBankerCard3
        determineResult(calculateTotalPoints(playerCards), calculateTotalPoints(bankerCards));
    }
    else {
        determineResult(calculateTotalPoints(playerCards), calculateTotalPoints(bankerCards));
    }
}

async function dealBankerCard3() {
    await new Promise(resolve => setTimeout(resolve, 500));
    ctx.drawImage(cardImage_3, 633.5, 142.75, 132, 94.5);      // BANKER card 3
    bankerCard3FlipStatus = true;

    let cardNumber = deck.pop();
    deckArrayToJSONAndSetCookie(deck);
    let imgIndex = (cardNumber % 52);   // get imgIndex.png from img directory, ex: 153 % 52 = 49, get 49.png from img directory
    let cardValue = imgIndex % 13;      // 49 % 10 = 10
    let banker3CardPoints = convertPoints(cardValue);      // convert card value to points
    imgBankerCards[bankerIndex].src = `img/frontOfCards/horizontal/${imgIndex}.png`;
    bankerCards.push(banker3CardPoints);
    dealtCards.push(imgIndex);
    if (autoDealStatus === true) {
        autoDealProcess4();
    }
}

function calculateTotalPoints(array) {
    let totalPoints = 0;
    array.forEach(points => {
        totalPoints += points;
    })

    totalPoints = totalPoints % 10

    return totalPoints;
}

// change mouse cursor to pointer while entering the clickable area
canvas.addEventListener('mousemove', function(event) {

    // #gameCanvas uses width: 45%;
    const scale = 800 / (window.innerWidth * 0.45);

    const x = event.offsetX * scale;
    const y = event.offsetY * scale;

    canvas.style.cursor = 'default';

    if (x >= 177 && x <= 177 + 94.5 && y >= 124 && y <= 124 + 132 && playerCard1FlipStatus === true) {
        canvas.style.cursor = 'pointer';
    }
    else if (x >= 425 && x <= 425 + 94.5 && y >= 124 && y <= 124 + 132 && bankerCard1FlipStatus === true) {
        canvas.style.cursor = 'pointer';
    }
    else if (x >= 281 && x <= 281 + 94.5 && y >= 124 && y <= 124 + 132 && playerCard2FlipStatus === true) {
        canvas.style.cursor = 'pointer';
    }
    else if (x >= 529 && x <= 529 + 94.5 && y >= 124 && y <= 124 + 132 && bankerCard2FlipStatus === true) {
        canvas.style.cursor = 'pointer';
    }
    else if (x >= 34.5 && x <= 34.5 + 132 && y >= 142.75 && y <= 142.75 + 94.5 && playerCard3FlipStatus === true) {
        canvas.style.cursor = 'pointer';
    }
    else if (x >= 633.5 && x <= 633.5 + 132 && y >= 142.75 && y <= 142.75 + 94.5 && bankerCard3FlipStatus === true) {
        canvas.style.cursor = 'pointer';
    }

    // BET PLAYER PAIR
    if (x >= 30 && x <= 30 + 270 && y >= 300 && y <= 300 + 120 && chipStatus === true) {
        canvas.style.cursor = 'pointer';
    }
    // BET PLAYER
    else if (x >= 30 && x <= 30 + 270 && y >= 430 && y <= 430 + 140 && chipStatus === true) {
        canvas.style.cursor = 'pointer';
    }
    // BET LUCKY 6
    if (x >= 310 && x <= 310 + 180 && y >= 300 && y <= 300 + 120 && chipStatus === true) {
        canvas.style.cursor = 'pointer';
    }
    // BET TIE
    else if (x >= 310 && x <= 310 + 180 && y >= 430 && y <= 430 + 140 && chipStatus === true) {
        canvas.style.cursor = 'pointer';
    }
    // BET BANKER PAIR
    if (x >= 500 && x <= 500 + 270 && y >= 300 && y <= 300 + 120 && chipStatus === true) {
        canvas.style.cursor = 'pointer';
    }
    // BET BANKER
    else if (x >= 500 && x <= 500 + 270 && y >= 430 && y <= 430 + 140 && chipStatus === true) {
        canvas.style.cursor = 'pointer';
    }
});

let squeezeCardMode; // used to check if this mode is on or off
canvas.addEventListener('click', function(event) {

    // #gameCanvas uses width: 45%;
    const scale = 800 / (window.innerWidth * 0.45);

    const x = event.offsetX * scale;
    const y = event.offsetY * scale;

    if (x >= 177 && x <= 177 + 94.5 && y >= 124 && y <= 124 + 132 && playerCard1FlipStatus === true) {
        if (squeezeCardMode === "true") {
            handleCardSqueeze(imgPlayerCards[0].src, flipPlayerCard1);
        }
        else {
            flipPlayerCard1();
        }
    }
    else if (x >= 425 && x <= 425 + 94.5 && y >= 124 && y <= 124 + 132 && bankerCard1FlipStatus === true) {
        if (squeezeCardMode === "true") {
            handleCardSqueeze(imgBankerCards[0].src, flipBankerCard1);
        }
        else {
            flipBankerCard1();
        }
    }
    else if (x >= 281 && x <= 281 + 94.5 && y >= 124 && y <= 124 + 132 && playerCard2FlipStatus === true) {
        if (squeezeCardMode === "true") {
            handleCardSqueeze(imgPlayerCards[1].src, flipPlayerCard2);
        }
        else {
            flipPlayerCard2();
        }
    }
    else if (x >= 529 && x <= 529 + 94.5 && y >= 124 && y <= 124 + 132 && bankerCard2FlipStatus === true) {
        if (squeezeCardMode === "true") {
            handleCardSqueeze(imgBankerCards[1].src, flipBankerCard2);
        }
        else {
            flipBankerCard2();
        }
    }
    else if (x >= 34.5 && x <= 34.5 + 132 && y >= 142.75 && y <= 142.75 + 94.5 && playerCard3FlipStatus === true) {
        if (squeezeCardMode === "true") {
            handleCardSqueeze(imgPlayerCards[2].src, flipPlayerCard3);
        }
        else {
            flipPlayerCard3();
        }
    }
    else if (x >= 633.5 && x <= 633.5 + 132 && y >= 142.75 && y <= 142.75 + 94.5 && bankerCard3FlipStatus === true) {
        if (squeezeCardMode === "true") {
            handleCardSqueeze(imgBankerCards[2].src, flipBankerCard3);
        }
        else {
            flipBankerCard3();
        }
    }

    checkIfAllFlipped();


    // BET PLAYER PAIR
    if (x >= 30 && x <= 30 + 270 && y >= 300 && y <= 300 + 120 && chipStatus === true) {
        placeBetOnPlayerPair(grabChipsAmount);
        deductCurrentBalance(grabChipsAmount);
        grabChipsAmount = 0;
        document.getElementById("chipsSelected").textContent = grabChipsAmount;
    }
    // BET PLAYER
    else if (x >= 30 && x <= 30 + 270 && y >= 430 && y <= 430 + 140 && chipStatus === true) {
        placeBetOnPlayer(grabChipsAmount);
        deductCurrentBalance(grabChipsAmount);
        grabChipsAmount = 0;
        document.getElementById("chipsSelected").textContent = grabChipsAmount;
    }
    // BET LUCKY 6
    if (x >= 310 && x <= 310 + 180 && y >= 300 && y <= 300 + 120 && chipStatus === true) {
        placeBetOnLucky6(grabChipsAmount);
        deductCurrentBalance(grabChipsAmount);
        grabChipsAmount = 0;
        document.getElementById("chipsSelected").textContent = grabChipsAmount;
    }
    // BET TIE
    else if (x >= 310 && x <= 310 + 180 && y >= 430 && y <= 430 + 140 && chipStatus === true) {
        placeBetOnTie(grabChipsAmount);
        deductCurrentBalance(grabChipsAmount);
        grabChipsAmount = 0;
        document.getElementById("chipsSelected").textContent = grabChipsAmount;
    }
    // BET BANKER PAIR
    if (x >= 500 && x <= 500 + 270 && y >= 300 && y <= 300 + 120 && chipStatus === true) {
        placeBetOnBankerPair(grabChipsAmount);
        deductCurrentBalance(grabChipsAmount);
        grabChipsAmount = 0;
        document.getElementById("chipsSelected").textContent = grabChipsAmount;
    }
    // BET BANKER
    else if (x >= 500 && x <= 500 + 270 && y >= 430 && y <= 430 + 140 && chipStatus === true) {
        placeBetOnBanker(grabChipsAmount);
        deductCurrentBalance(grabChipsAmount);
        grabChipsAmount = 0;
        document.getElementById("chipsSelected").textContent = grabChipsAmount;
    }
});

function checkIfAllFlipped() {
    // after the initial four cards are flipped, the process of determining whether to continue dealing will begin
    if (flipPlayerCounter === 2 && flipBankerCounter === 2 && done === false) {
        done = true;
        clearInterval(interval);
        checkIfKeepDealing();
        setCountdown();
    }
}

function flipPlayerCard1() {
    // imgPlayerCards[i].src = 'img/frontOfCards/horizontal/number.png'.
    // Extract the string from imgPlayerCards[i].src,
    // split it by "/", and take the last part, which is "number.png".
    // Then, split it again by "." and [0] will represent "number".
    updateUndealtCardsRecord(imgPlayerCards[0].src.split('/').pop().split('.')[0] % 13);

    ctx.drawImage(imgPlayerCards[0], 177, 124, 94.5, 132);
    playerCard1FlipStatus = false;
    flipPlayerCounter++;
}
function flipBankerCard1() {
    updateUndealtCardsRecord(imgBankerCards[0].src.split('/').pop().split('.')[0] % 13);
    ctx.drawImage(imgBankerCards[0], 425, 124, 94.5, 132);
    bankerCard1FlipStatus = false;
    flipBankerCounter++;
}
function flipPlayerCard2() {
    updateUndealtCardsRecord(imgPlayerCards[1].src.split('/').pop().split('.')[0] % 13);
    ctx.drawImage(imgPlayerCards[1], 281, 124, 94.5, 132);
    playerCard2FlipStatus = false;
    flipPlayerCounter++;
}
function flipBankerCard2() {
    updateUndealtCardsRecord(imgBankerCards[1].src.split('/').pop().split('.')[0] % 13);
    ctx.drawImage(imgBankerCards[1], 529, 124, 94.5, 132);
    bankerCard2FlipStatus = false;
    flipBankerCounter++;
}
function flipPlayerCard3() {
    updateUndealtCardsRecord(imgPlayerCards[2].src.split('/').pop().split('.')[0] % 13);
    ctx.drawImage(imgPlayerCards[2], 34.5, 142.75, 132, 94.5);
    playerCard3FlipStatus = false;
    checkIfDealBanker();
}
function flipBankerCard3() {
    updateUndealtCardsRecord(imgBankerCards[2].src.split('/').pop().split('.')[0] % 13);
    ctx.drawImage(imgBankerCards[2], 633.5, 142.75, 132, 94.5);
    bankerCard3FlipStatus = false;
    determineResult(calculateTotalPoints(playerCards), calculateTotalPoints(bankerCards));
}

function convertPoints(cardValue) {
    let points = cardValue;

    // 10, J, Q are counted as 0
    // the range of cardValue is 0-12, 0 represents K
    if(points >= 10) {
        points = 0;
    }
    return points;
}

function determineResult(player, banker) {

    let roundResult = "";

    document.getElementById("playerResult").innerHTML = "Player's Points: " + calculateTotalPoints(playerCards);
    document.getElementById("bankerResult").innerHTML = "Banker's Points: " + calculateTotalPoints(bankerCards);

    if (playerCardsValue[0] === playerCardsValue[1]) {
        roundResult += "PPAIR";
    }

    if (bankerCardsValue[0] === bankerCardsValue[1]) {
        roundResult += "BPAIR";
    }

    if (player > banker) {
        roundResult += "PLAYER";
        playerWin(roundResult);
    }
    else if (player === banker) {
        roundResult += "TIE";
        tieWin(roundResult);
    }
    else if (player < banker) {
        roundResult += "BANKER";
        if (calculateTotalPoints(bankerCards) === 6) {
            roundResult += "LUCKY6"
        }
        bankerWin(roundResult);
    }

    if (autoDealStatus !== true) {
        document.getElementById("nextRoundBtn").classList.remove("disabled");
        document.getElementById("nextRoundBtn").disabled = false;
    }
    modeChangeAvailability = true;      // true: can change mode; false can not change mode
}

function calculateBet(result) {
    let receiveAmount = 0;
    let totalWinAmount = 0;
    if (result.includes("PLAYER")) {
        receiveAmount = betPlayerAmount * 2;
        totalWinAmount = betPlayerAmount - betTieAmount - betBankerAmount - betPlayerPairAmount - betLucky6Amount - betBankerPairAmount;
    }
    else if (result.includes("TIE")) {
        receiveAmount = betTieAmount * 9 + betBankerAmount + betPlayerAmount;
        totalWinAmount = betTieAmount * 8 - betPlayerPairAmount - betLucky6Amount - betBankerPairAmount;
    }
    else if (result.includes("BANKER")) {
        receiveAmount = betBankerAmount * 2;
        totalWinAmount = betBankerAmount - betTieAmount - betPlayerAmount - betPlayerPairAmount - betLucky6Amount - betBankerPairAmount;
        if (result.includes("LUCKY6")) {
            if (bankerCards.length === 2) {
                receiveAmount += betLucky6Amount * 13;
                totalWinAmount += betLucky6Amount * 13;
            }
            else if (bankerCards.length === 3) {
                receiveAmount += betLucky6Amount * 24;
                totalWinAmount += betLucky6Amount * 24;
            }
        }
    }

    if (result.includes("PPAIR")) {
        receiveAmount += betPlayerPairAmount * 12;
        totalWinAmount += betPlayerPairAmount * 12;
    }

    if (result.includes("BPAIR")) {
        receiveAmount += betBankerPairAmount * 12;
        totalWinAmount += betBankerPairAmount * 12;
    }

    updateBalance(receiveAmount, totalWinAmount);
    updateTheBiggestHandYouWon(totalWinAmount);
}

function playerWin(roundResult) {
    document.getElementById("resultContainer").style.backgroundColor = 'blue';
    showResult("PLAYER WIN");
    calculateBet(roundResult);
    addResultToRoadMap("PLAYER");
}

function tieWin(roundResult) {
    document.getElementById("resultContainer").style.backgroundColor = 'green';
    showResult("TIE");
    calculateBet(roundResult);
    addResultToRoadMap("TIE");
}
function bankerWin(roundResult) {
    document.getElementById("resultContainer").style.backgroundColor = 'red';
    showResult("BANKER WIN");
    calculateBet(roundResult);
    addResultToRoadMap("BANKER");
}

async function showResult(result) {
    const resultMessage = document.getElementById('resultMessage');
    resultMessage.textContent = result;
    await new Promise(resolve => setTimeout(resolve, 200));
    document.getElementById('resultContainer').style.display = "block";
    if (autoDealStatus === true) {
        autoDealProcess6();
    }
}

document.getElementById("closeResultBtn").addEventListener("click", closeResult);
function closeResult() {
    document.getElementById('resultContainer').style.display = "none";
}
