window.onload = function() {

    // check cookie while login
    checkLogin();

    if (getCookie("currentBalance") === "") {
        setCookie("currentBalance", 100000, 7);
    }

    if (getCookie("selectedMode") === "") {
        setCookie("selectedMode", "Beginner", 7);
    }

    if (getCookie("theBiggestHandYouWon") === "") {
        setCookie("theBiggestHandYouWon", theBiggestHandYouWOn, 7);
    }

    if (getCookie("deck") === "") {
        initializeDeck();
    }

    deck = getDeckFromCookie();

    if (getCookie("roundCounter") === "") {
        setCookie("roundCounter", 1, 7);
    }

    roundCounter = getCookie("roundCounter");

    if (getCookie("roundResultRoadMap") === "") {
        roundResultRoadMap = [];
        roundResultRoadMap.push("0");  // just a placeholder so that result can start at roundResultRoadMap[1]
        roundResultRoadMapArrayToJSONAndSetCookie(roundResultRoadMap);
    }

    roundResultRoadMap = getRoundResultFromCookie();

    initializeRoadMapFromCookie();

    if (getCookie("undealtCards") === "") {
        undealtCards = new Array(13).fill(4 * numberOfDeck);
        undealtCardsRecordArrayToJSONAndSetCookie(undealtCards);
        numberOfUndealtCards = 52 * numberOfDeck;
        setCookie("numberOfUndealtCards", numberOfUndealtCards, 7);
        updateUndealtCardRecordInSlidePanel();
    }

    undealtCards = getUndealtCardsRecordArrayFromCookie();
    numberOfUndealtCards = getCookie("numberOfUndealtCards");
    updateUndealtCardRecordInSlidePanel();

    if (getCookie("accumulateTotalBetVolume") === "") {
        accumulateTotalBetVolume = 0;
        setCookie("accumulateTotalBetVolume", accumulateTotalBetVolume, 7)
    }

    accumulateTotalBetVolume = +getCookie("accumulateTotalBetVolume");
    document.getElementById("accumulateTotalBetVolume").textContent = accumulateTotalBetVolume;

    modeChangeAvailability = true;      // true: can change mode; false can not change mode

    setCountdown();

    if (getCookie("squeezeCardMode") === "") {
        setCookie("squeezeCardMode", "false", 7)
    }
    squeezeCardMode = getCookie("squeezeCardMode");

    if (squeezeCardMode === "true") {
        document.getElementById("squeezeCard").classList.add("active");
    }
    else if (squeezeCardMode === "false") {
        document.getElementById("squeezeCard").classList.remove("active");
    }

    // in canvas.js
    drawStaticContent();
    deckArrayToJSONAndSetCookie(deck);

    document.getElementById("nextRoundBtn").classList.add("disabled");
    document.getElementById("nextRoundBtn").disabled = true;
};

let numberOfDeck = 8;

function updateUndealtCardRecordInSlidePanel() {
    document.getElementById("numberOfUndealtCards").innerText = numberOfUndealtCards;
    for (let i = 1; i <= 10; i++) {
        document.getElementById(`card${i}Remaining`).innerText = undealtCards[i];
    }
    document.getElementById("cardJRemaining").innerText = undealtCards[11];
    document.getElementById("cardQRemaining").innerText = undealtCards[12];
    document.getElementById("cardKRemaining").innerText = undealtCards[0];

    for (let j = 1; j <= 10; j++) {
        document.getElementById(`card${j}Probability`).innerText = ((undealtCards[j] / numberOfUndealtCards) * 100).toFixed(2) + " %";
    }
    document.getElementById("cardJProbability").innerText = ((undealtCards[11] / numberOfUndealtCards) * 100).toFixed(2) + " %";
    document.getElementById("cardQProbability").innerText = ((undealtCards[12] / numberOfUndealtCards) * 100).toFixed(2) + " %";
    document.getElementById("cardKProbability").innerText = ((undealtCards[0] / numberOfUndealtCards) * 100).toFixed(2) + " %";
}

// undealtCards[0] represents the remaining number of K cards
// K, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q
// undealtCards[12] represents the remaining number of Q cards.
let undealtCards;        // there are four cards of each rank, so numberOfDeck decks * 4
let numberOfUndealtCards;
function updateUndealtCardsRecord (card) {
    numberOfUndealtCards = getCookie("numberOfUndealtCards");
    undealtCards[card]--;
    numberOfUndealtCards--;
    setCookie("numberOfUndealtCards", numberOfUndealtCards, 7);
    undealtCardsRecordArrayToJSONAndSetCookie(undealtCards);
    updateUndealtCardRecordInSlidePanel();
}

function deckArrayToJSONAndSetCookie(array) {
    const deckJSON = JSON.stringify(array);
    setCookie("deck", deckJSON, 7);
}

function getUndealtCardsRecordArrayFromCookie() {
    return JSON.parse(getCookie("undealtCards"));
}

function undealtCardsRecordArrayToJSONAndSetCookie(array) {
    const undealtCards = JSON.stringify(array);
    setCookie("undealtCards", undealtCards, 7);
}

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return "";
}

function checkLogin() {
    let userID = getCookie("userID");
    if (userID) {
        document.getElementById("inputUserID").style.display = "none";
        document.getElementById("userIdHeader").innerHTML = "Welcome Back";
        document.getElementById("existedUserID").innerHTML = userID;
        document.getElementById("inputUserID").value = userID;
    }
}

document.getElementById("startPlayingBtn").addEventListener("click", login);
function login() {
    const userID = document.getElementById("inputUserID").value;
    const mainElement = document.querySelector("main");

    if (userID.trim() !== "") {
        // cookie will expire in 7 days
        setCookie("userID", userID, 7);
        document.getElementById("currentBalance").textContent = getCookie("currentBalance");
        document.getElementById("theBiggestHandYouWon").textContent = getCookie("theBiggestHandYouWon");
        document.getElementById("preventClickingBackground").style.display = 'none';
        document.getElementById("userIDContainer").style.display = "none";
        mainElement.style.filter = "none";
    }
    else {
        alert("Please enter your UserID to continue.");
    }
}

function navLinksChangeColor(id) {
    // Add active class on mousedown
    document.getElementById(id).classList.add('active');
    setTimeout(() => {
        document.getElementById(id).classList.remove('active');
    }, 200);
}

document.getElementById("dashboard").addEventListener("click", toggleSlidePanel);
document.getElementById("panelCloseBtn").addEventListener("click", toggleSlidePanel);
function toggleSlidePanel() {
    const slidePanel = document.getElementById('slidePanel');
    const dashboard = document.getElementById('dashboard');
    if (slidePanel.classList.contains('open')) {
        slidePanel.classList.remove('open');
        dashboard.classList.remove('active');
    }
    else {
        slidePanel.classList.add('open');
        dashboard.classList.add('active');
    }
}

// ------------------------------------------------------------------ Card Squeezing ------------------------------------------------------------------
document.getElementById("squeezeCard").addEventListener("click", () => {
    const squeezeCard = document.getElementById("squeezeCard");
    let resultMessage = document.getElementById("squeezeCardMessage");

    if (autoDealStatus === true) {
        resultMessage.innerHTML = "Card Squeezing Mode is banned while Auto Deal Mode is on."
        document.getElementById("squeezeCardContainer").style.display = "block";
    }
    else {
        if (squeezeCardMode === "true") {
            resultMessage.innerHTML = "Card Squeezing Mode is turned off."
            document.getElementById("squeezeCardContainer").style.display = "block";
            squeezeCardMode = "false";
            setCookie("squeezeCardMode", squeezeCardMode, 7);
            squeezeCard.classList.remove('active');
        }
        else {
            resultMessage.innerHTML = "Card Squeezing Mode is turned on."
            document.getElementById("squeezeCardContainer").style.display = "block";
            squeezeCardMode = "true";
            squeezeCard.classList.add('active');
            setCookie("squeezeCardMode", squeezeCardMode, 7);
        }
    }
});

document.getElementById("closesqueezeCardMessageBtn").addEventListener("click", () => {
    document.getElementById("squeezeCardContainer").style.display = "none";
});

// ------------------------------------------------------------------ Card Squeezing ------------------------------------------------------------------
// ------------------------------------------------------------------ Card Squeezing ------------------------------------------------------------------

// ------------------------------------------------------------------ Mode Select ------------------------------------------------------------------
document.getElementById("modeSelection").addEventListener("click", () => {
    modeSelection();
    navLinksChangeColor("modeSelection");
});

let modeChangeAvailability;
// set Beginner as default mode
let selectedMode = "Beginner";
function modeSelection() {
    let resultMessage = document.getElementById("modeSelectionMessageFromSideBar");
    if(modeChangeAvailability === true) {
        resultMessage.innerHTML = "Please select your skill level";
        document.getElementById("modeSelectionMessageFromSideBarContainer").style.display = "block";
    }
    else {
        resultMessage.innerHTML = "You can only switch the mode before the cards are dealt.";
        document.getElementById("modeSelectionMessageFromSideBarContainer").style.display = "block";
        document.getElementById("beginnerModeSelectionBtn").style.display = "none";
        document.getElementById("intermediateModeSelectionBtn").style.display = "none";
        document.getElementById("advancedModeSelectionBtn").style.display = "none";
        document.getElementById("cancelModeSelectionBtn").style.display = "none";
        document.getElementById("continueModeSelectionBtn").style.display = "none";
        document.getElementById("closeModeSelectionMessageFromSideBarBtn").style.display = "block";
        document.querySelector('.beginner_intermediate_advanced_ModeSelectionMessageFromSideBar_continue_Btn-Container').style.justifyContent = 'center';
    }
}

document.getElementById("beginnerModeSelectionBtn").addEventListener("click", () => {
    let resultMessage = document.getElementById('modeSelectionMessageFromSideBar');
    resultMessage.innerHTML = "You are about to switch to beginner mode." +
                                "<br>As a Beginner player, you will have 60 seconds to make your decision after the cards are dealt. " +
                                "<br>The initial four cards will be flipped automatically, which means you cannot use the card exchange function.";
    document.getElementById("beginnerModeSelectionBtn").style.display = "none";
    document.getElementById("intermediateModeSelectionBtn").style.display = "none";
    document.getElementById("advancedModeSelectionBtn").style.display = "none";
    document.getElementById("cancelModeSelectionBtn").style.display = "block";
    document.getElementById("continueModeSelectionBtn").style.display = "block";
    selectedMode = "Beginner";
});

// click intermediate
document.getElementById("intermediateModeSelectionBtn").addEventListener("click", () => {
    let resultMessage = document.getElementById('modeSelectionMessageFromSideBar');
    resultMessage.innerHTML = "You are about to switch to intermediate mode." +
                                "<br>As an intermediate player, you will have 30 seconds to make your decision after the cards are dealt. " +
                                "<br>The initial four cards will be flipped automatically, which means you cannot use the card exchange function.";
    document.getElementById("beginnerModeSelectionBtn").style.display = "none";
    document.getElementById("intermediateModeSelectionBtn").style.display = "none";
    document.getElementById("advancedModeSelectionBtn").style.display = "none";
    document.getElementById("cancelModeSelectionBtn").style.display = "block";
    document.getElementById("continueModeSelectionBtn").style.display = "block";
    selectedMode = "Intermediate";
});

// click advanced
document.getElementById("advancedModeSelectionBtn").addEventListener("click", () => {
    let resultMessage = document.getElementById('modeSelectionMessageFromSideBar');
    resultMessage.innerHTML = "You are about to switch to advanced mode." +
                                "<br>As an advanced player, you will have 15 seconds to make your decision after the cards are dealt. " +
                                "<br>The initial four cards will be flipped automatically, which means you cannot use the card exchange function.";
    document.getElementById("beginnerModeSelectionBtn").style.display = "none";
    document.getElementById("intermediateModeSelectionBtn").style.display = "none";
    document.getElementById("advancedModeSelectionBtn").style.display = "none";
    document.getElementById("cancelModeSelectionBtn").style.display = "block";
    document.getElementById("continueModeSelectionBtn").style.display = "block";
    selectedMode = "Advanced";
});

// click cancel
document.getElementById("cancelModeSelectionBtn").addEventListener("click", cancelModeSelectionMessageFromSideBar);
function cancelModeSelectionMessageFromSideBar() {
    document.getElementById('modeSelectionMessageFromSideBarContainer').style.display = "none";
    document.getElementById("beginnerModeSelectionBtn").style.display = "block";
    document.getElementById("intermediateModeSelectionBtn").style.display = "block";
    document.getElementById("advancedModeSelectionBtn").style.display = "block";
    document.getElementById("cancelModeSelectionBtn").style.display = "none";
    document.getElementById("continueModeSelectionBtn").style.display = "none";
    selectedMode = getCookie("selectedMode");
}

// click continue
document.getElementById("continueModeSelectionBtn").addEventListener("click", continueModeSelectionMessageFromSideBar);
function continueModeSelectionMessageFromSideBar() {
    document.getElementById('modeSelectionMessageFromSideBarContainer').style.display = "none";
    document.getElementById("beginnerModeSelectionBtn").style.display = "block";
    document.getElementById("intermediateModeSelectionBtn").style.display = "block";
    document.getElementById("advancedModeSelectionBtn").style.display = "block";
    document.getElementById("cancelModeSelectionBtn").style.display = "none";
    document.getElementById("continueModeSelectionBtn").style.display = "none";
    setCookie("selectedMode", selectedMode, 7);
    setCountdown();
}

//click close
document.getElementById("closeModeSelectionMessageFromSideBarBtn").addEventListener("click", closeModeSelectionMessageFromSideBar);
function closeModeSelectionMessageFromSideBar() {
    document.getElementById('modeSelectionMessageFromSideBarContainer').style.display = "none";
    document.getElementById("beginnerModeSelectionBtn").style.display = "block";
    document.getElementById("intermediateModeSelectionBtn").style.display = "block";
    document.getElementById("advancedModeSelectionBtn").style.display = "block";
    document.getElementById("cancelModeSelectionBtn").style.display = "none";
    document.getElementById("continueModeSelectionBtn").style.display = "none";
    document.getElementById("closeModeSelectionMessageFromSideBarBtn").style.display = "none";
    document.querySelector('.beginner_intermediate_advanced_ModeSelectionMessageFromSideBar_continue_Btn-Container').style.justifyContent = 'space-between';
}
// ------------------------------------------------------------------ Mode Select ------------------------------------------------------------------

// ------------------------------------------------------------------ Card Swap ------------------------------------------------------------------
document.getElementById("cardSwapping").addEventListener("click", () => {
    cardSwapping();
    navLinksChangeColor("cardSwapping");
});

let swapCost;
function cardSwapping() {
    let resultMessage = document.getElementById('cardSwapMessageFromSideBar');
    swapCost = Math.ceil((betPlayerAmount + betTieAmount + betBankerAmount) * 0.35);
    resultMessage.innerHTML = "You are about to swap one unflipped card between the Banker and the Player." +
                                "<br>Swap cost: 35% of your total bet, " +
                                "<br>which is <b style='color: gold'>$" + swapCost + "</b>.";
    document.getElementById('cardSwapMessageFromSideBarContainer').style.display = "block";
}

// click continue
document.getElementById("continueCardSwapBtn").addEventListener("click", () => {
    let resultMessage = document.getElementById('cardSwapMessageFromSideBar');
    if (+getCookie("currentBalance") >= swapCost) {

        // both the Player and the Banker have flipped exactly one card each
        if (flipPlayerCounter === 1 && flipBankerCounter === 1) {

            // playerCard1FlipStatus = true means not yet flipped
            if (playerCard1FlipStatus === true && bankerCard1FlipStatus === true) {
                [imgPlayerCards[0].src, imgBankerCards[0].src] = [imgBankerCards[0].src, imgPlayerCards[0].src];
                [playerCards[0], bankerCards[0]] = [bankerCards[0], playerCards[0]];
                [playerCardsValue[0], bankerCardsValue[0]] = [bankerCardsValue[0], playerCardsValue[0]];
            }
            else if (playerCard1FlipStatus === true && bankerCard2FlipStatus === true) {
                [imgPlayerCards[0].src, imgBankerCards[1].src] = [imgBankerCards[1].src, imgPlayerCards[0].src];
                [playerCards[0], bankerCards[1]] = [bankerCards[1], playerCards[0]];
                [playerCardsValue[0], bankerCardsValue[1]] = [bankerCardsValue[1], playerCardsValue[0]];
            }
            else if (playerCard2FlipStatus === true && bankerCard1FlipStatus === true) {
                [imgPlayerCards[1].src, imgBankerCards[0].src] = [imgBankerCards[0].src, imgPlayerCards[1].src];
                [playerCards[1], bankerCards[0]] = [bankerCards[0], playerCards[1]];
                [playerCardsValue[1], bankerCardsValue[0]] = [bankerCardsValue[0], playerCardsValue[1]];

            }
            else if (playerCard2FlipStatus === true && bankerCard2FlipStatus === true) {
                [imgPlayerCards[1].src, imgBankerCards[1].src] = [imgBankerCards[1].src, imgPlayerCards[1].src];
                [playerCards[1], bankerCards[1]] = [bankerCards[1], playerCards[1]];
                [playerCardsValue[1], bankerCardsValue[1]] = [bankerCardsValue[1], playerCardsValue[1]];
            }

            resultMessage.innerHTML = "<p style='color: green'>Card swapped successfully!</p>" +
                                        "You swapped one unflipped card between the Banker and the Player.";
            deductCurrentBalanceFromSpecialFeature(swapCost);
        }
        else {
            resultMessage.innerHTML = "<p style='color: red'>Failed to swap card!</p>" +
                                        "The card swap function is only allowed when both the Player and the Banker have flipped exactly one card each.";
        }
    }
    else {
        resultMessage.innerHTML = "<p style='color: red'>Failed to swap card!</p>" +
                                    "You do not have enough balance to swap one unflipped card between the Banker and the Player."
    }
    document.querySelector('.cancel_closeCardSwapMessageFromSideBar_continue_Btn-Container').style.justifyContent = 'center';
    document.getElementById("cancelCardSwapBtn").style.display = "none";
    document.getElementById("continueCardSwapBtn").style.display = "none";
    document.getElementById("closeCardSwapMessageFromSideBarBtn").style.display = "block";
});

// click cancel or close
document.getElementById("cancelCardSwapBtn").addEventListener("click", closeCardSwapMessageFromSideBar);
document.getElementById("closeCardSwapMessageFromSideBarBtn").addEventListener("click", closeCardSwapMessageFromSideBar);
function closeCardSwapMessageFromSideBar() {
    document.querySelector('.cancel_closeCardSwapMessageFromSideBar_continue_Btn-Container').style.justifyContent = 'space-between';
    document.getElementById('cardSwapMessageFromSideBarContainer').style.display = "none";
    document.getElementById("cancelCardSwapBtn").style.display = "block";
    document.getElementById("continueCardSwapBtn").style.display = "block";
    document.getElementById("closeCardSwapMessageFromSideBarBtn").style.display = "none";
}
// ------------------------------------------------------------------ Card Swap ------------------------------------------------------------------

// ------------------------------------------------------------------ Card Reshuffle ------------------------------------------------------------------
document.getElementById("cardReshuffling").addEventListener("click", () => {
    cardReshuffling();
    navLinksChangeColor("cardReshuffling");
});

let reshuffleCost;
function cardReshuffling() {
    let resultMessage = document.getElementById('cardReshuffleMessageFromSideBar');
    reshuffleCost = Math.ceil((betPlayerAmount + betTieAmount + betBankerAmount) * 0.05);
    resultMessage.innerHTML = "You are about to reshuffle the undealt cards." +
                                "<br>Reshuffle cost: 5% of your total bet, " +
                                "<br>which is <b style='color: gold'>$" + reshuffleCost + "</b>.";
    document.getElementById('cardReshuffleMessageFromSideBarContainer').style.display = "block";
}

// click continue
document.getElementById("continueCardReshuffleBtn").addEventListener("click", () => {
    let resultMessage = document.getElementById('cardReshuffleMessageFromSideBar');
    if (+getCookie("currentBalance") >= reshuffleCost) {
        shuffleDeck();
        deckArrayToJSONAndSetCookie(deck);
        resultMessage.innerHTML = "<p style='color: green'>Reshuffled sucessfully!</p>" +
                                    "You reshuffled the undealt cards.";
        deductCurrentBalanceFromSpecialFeature(reshuffleCost);
    }
    else {
        resultMessage.innerHTML = "<p style='color: red'>Failed to reshuffle!</p>" +
                                    "You do not have enough balance to reshuffle the undealt cards."
    }
    document.querySelector('.cancel_closeCardReshuffleMessageFromSideBar_continue_Btn-Container').style.justifyContent = 'center';
    document.getElementById("cancelCardReshuffleBtn").style.display = "none";
    document.getElementById("continueCardReshuffleBtn").style.display = "none";
    document.getElementById("closeCardReshuffleMessageFromSideBarBtn").style.display = "block";
});

// click cancel or close
document.getElementById("cancelCardReshuffleBtn").addEventListener("click", closeCardReshuffleMessageFromSideBar);
document.getElementById("closeCardReshuffleMessageFromSideBarBtn").addEventListener("click", closeCardReshuffleMessageFromSideBar);
function closeCardReshuffleMessageFromSideBar() {
    document.querySelector('.cancel_closeCardReshuffleMessageFromSideBar_continue_Btn-Container').style.justifyContent = 'space-between';
    document.getElementById('cardReshuffleMessageFromSideBarContainer').style.display = "none";
    document.getElementById("cancelCardReshuffleBtn").style.display = "block";
    document.getElementById("continueCardReshuffleBtn").style.display = "block";
    document.getElementById("closeCardReshuffleMessageFromSideBarBtn").style.display = "none";
}
// ------------------------------------------------------------------ Card Reshuffle ------------------------------------------------------------------

// ------------------------------------------------------------------ Auto Deal ------------------------------------------------------------------
document.getElementById("autoDeal").addEventListener("click", () => {
    if (isRoundComplete === false && autoDealStatus === false) {     // to prevent users from using this function before the game has complete
        let resultMessage = document.getElementById("autoDealMessageFromSideBar");
        resultMessage.innerHTML = "This function can only be used before the dealing begins.";
        document.getElementById("autoDealMessageFromSideBarContainer").style.display = "block";
        document.querySelector(".stop_cancel_closeAutoDealMessageFromSideBar_continue_Btn-Container").style.justifyContent = "center";
        document.getElementById("autoDealHeader").style.display = "none";
        document.getElementById("autoDealRounds").style.display = "none";
        document.getElementById("stopAutoDealBtn").style.display = "none";
        document.getElementById("cancelAutoDealBtn").style.display = "none";
        document.getElementById("continueAutoDealBtn").style.display = "none";
        document.getElementById("closeAutoDealMessageFromSideBarBtn").style.display = "block";
        document.getElementById("closeAutoDealWarningMessageFromSideBarBtn").style.display = "none";
    }
    else {
        if (autoDealStatus === true) {
            let resultMessage = document.getElementById("autoDealMessageFromSideBar");
            resultMessage.innerHTML = "Please wait for the auto deal to complete before starting again.";
            document.getElementById("autoDealMessageFromSideBarContainer").style.display = "block";
            document.querySelector(".stop_cancel_closeAutoDealMessageFromSideBar_continue_Btn-Container").style.justifyContent = "space-between";
            document.getElementById("autoDealHeader").style.display = "none";
            document.getElementById("autoDealRounds").style.display = "none";
            document.getElementById("stopAutoDealBtn").style.display = "block";
            document.getElementById("cancelAutoDealBtn").style.display = "none";
            document.getElementById("continueAutoDealBtn").style.display = "none";
            document.getElementById("closeAutoDealMessageFromSideBarBtn").style.display = "block";
            document.getElementById("closeAutoDealWarningMessageFromSideBarBtn").style.display = "none";
        }
        else {
            autoDeal();
            navLinksChangeColor("autoDeal");
        }
    }
});

function autoDeal() {
    let resultMessage = document.getElementById("autoDealMessageFromSideBar");
    resultMessage.innerHTML = "You are about to configure automatic rounds for Baccarat." +
                                "<br> Card Squeezing Mode will be turned off automatically.";
    document.getElementById("autoDealMessageFromSideBarContainer").style.display = "block";
    document.querySelector(".stop_cancel_closeAutoDealMessageFromSideBar_continue_Btn-Container").style.justifyContent = "space-between";
    document.getElementById("autoDealHeader").style.display = "block";
    document.getElementById("autoDealRounds").style.display = "block";
    document.getElementById("stopAutoDealBtn").style.display = "none";
    document.getElementById("cancelAutoDealBtn").style.display = "block";
    document.getElementById("continueAutoDealBtn").style.display = "block";
    document.getElementById("closeAutoDealMessageFromSideBarBtn").style.display = "none";
    document.getElementById("closeAutoDealWarningMessageFromSideBarBtn").style.display = "none";
}

let autoDealStatus = false;  // true: turn on; false: turn off
let rounds;
let stop; // true: will stop

// click continue
document.getElementById("continueAutoDealBtn").addEventListener("click", async () => {

    rounds = document.getElementById("autoDealRounds").value;
    stop = false;

    if (!/^\d+$/.test(rounds)) {
        alert("Please enter a valid number.");
        document.getElementById("autoDealRounds").focus()
    }
    else {
        document.getElementById("autoDealMessageFromSideBarContainer").style.display = "none";
        if (squeezeCardMode === "true") {
            squeezeCardMode = "false";
            setCookie("squeezeCardMode", squeezeCardMode, 7);
            document.getElementById("squeezeCard").classList.remove('active');
        }
        autoDealProcess1();
    }
});

// click cancel or close
document.getElementById("cancelAutoDealBtn").addEventListener("click", closeAutoDealMessageFromSideBar);
document.getElementById("closeAutoDealMessageFromSideBarBtn").addEventListener("click", closeAutoDealMessageFromSideBar);
function closeAutoDealMessageFromSideBar() {
    document.getElementById("autoDealMessageFromSideBarContainer").style.display = "none";
    document.querySelector(".stop_cancel_closeAutoDealMessageFromSideBar_continue_Btn-Container").style.justifyContent = "space-between";
    document.getElementById("autoDealHeader").style.display = "block";
    document.getElementById("autoDealRounds").style.display = "block";
    document.getElementById("stopAutoDealBtn").style.display = "none";
    document.getElementById("cancelAutoDealBtn").style.display = "block";
    document.getElementById("continueAutoDealBtn").style.display = "block";
    document.getElementById("closeAutoDealMessageFromSideBarBtn").style.display = "none";
    document.getElementById("closeAutoDealWarningMessageFromSideBarBtn").style.display = "none";
}


// click stop
document.getElementById("stopAutoDealBtn").addEventListener("click", ()=> {
    stop = true;
    document.getElementById("autoDealMessageFromSideBarContainer").style.display = "none";
});

function stopAutoDeal() {
    document.getElementById("autoDealRounds").value = "";
    let resultMessage = document.getElementById("autoDealMessageFromSideBar");
    resultMessage.innerHTML = "The automatic rounds have been stopped.";
    document.getElementById("autoDealMessageFromSideBarContainer").style.display = "block";
    document.querySelector(".stop_cancel_closeAutoDealMessageFromSideBar_continue_Btn-Container").style.justifyContent = "center";
    document.getElementById("autoDealHeader").style.display = "none";
    document.getElementById("autoDealRounds").style.display = "none";
    document.getElementById("stopAutoDealBtn").style.display = "none";
    document.getElementById("cancelAutoDealBtn").style.display = "none";
    document.getElementById("continueAutoDealBtn").style.display = "none";
    document.getElementById("closeAutoDealMessageFromSideBarBtn").style.display = "block";
    document.getElementById("closeAutoDealWarningMessageFromSideBarBtn").style.display = "none";
    enableBtn();
}

// click closeAutoDealWarningMessageFromSideBarBtn
document.getElementById("closeAutoDealWarningMessageFromSideBarBtn").addEventListener("click", closeAutoDealWarningMessageFromSideBar);
function closeAutoDealWarningMessageFromSideBar() {
    document.getElementById("autoDealMessageFromSideBarContainer").style.display = "none";
}


async function autoDealProcess1() {
    autoDealStatus = true;
    resetBet();
    nextRound();
    clearInterval(interval);
    setCountdown();
    deal4Cards();
}

async function autoDealProcess2() {

    await new Promise(resolve => setTimeout(resolve, 500));
    if (playerCard1FlipStatus === true) {
        flipPlayerCard1();
    }

    await new Promise(resolve => setTimeout(resolve, 500));
    if (bankerCard1FlipStatus === true) {
        flipBankerCard1();
    }

    await new Promise(resolve => setTimeout(resolve, 500));
    if (playerCard2FlipStatus === true) {
        flipPlayerCard2();
    }

    await new Promise(resolve => setTimeout(resolve, 500));
    if (bankerCard2FlipStatus === true) {
        flipBankerCard2();
    }
    checkIfAllFlipped();

}

async function autoDealProcess3() {
    await new Promise(resolve => setTimeout(resolve, 500));
    if (playerCard3FlipStatus === true) {
        flipPlayerCard3();
    }
}

async function autoDealProcess4() {
    await new Promise(resolve => setTimeout(resolve, 500));
    if (bankerCard3FlipStatus === true) {
        flipBankerCard3();
    }
}

async function autoDealProcess5() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    document.getElementById("autoResetDeckContainer").style.display = "none";
}

async function autoDealProcess6() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    document.getElementById('resultContainer').style.display = "none";
    autoDealProcess7();
}

async function autoDealProcess7() {
    await new Promise(resolve => setTimeout(resolve, 500));
    nextRound();
    if (stop === true) {
        rounds = 1;
        autoDealStatus = false;
        stopAutoDeal();
    }
    else if (rounds <= 1) {
        let resultMessage = document.getElementById("autoDealMessageFromSideBar");
        resultMessage.innerHTML = "The automatic rounds have been completed.";
        document.getElementById("autoDealMessageFromSideBarContainer").style.display = "block";
        document.querySelector(".stop_cancel_closeAutoDealMessageFromSideBar_continue_Btn-Container").style.justifyContent = "center";
        document.getElementById("autoDealHeader").style.display = "none";
        document.getElementById("autoDealRounds").style.display = "none";
        document.getElementById("stopAutoDealBtn").style.display = "none";
        document.getElementById("cancelAutoDealBtn").style.display = "none";
        document.getElementById("continueAutoDealBtn").style.display = "none";
        document.getElementById("closeAutoDealMessageFromSideBarBtn").style.display = "block";
        document.getElementById("closeAutoDealWarningMessageFromSideBarBtn").style.display = "none";
        autoDealStatus = false;
        document.getElementById("autoDealRounds").value = "";
        enableBtn();
    }
    else {
        await new Promise(resolve => setTimeout(resolve, 500));
        autoDealProcess1();
        rounds--;
    }
}
// ------------------------------------------------------------------ Auto Deal ------------------------------------------------------------------

// ------------------------------------------------------------------ Screenshot ------------------------------------------------------------------
document.getElementById("screenshot").addEventListener("click", () => {
    screenshot();
    navLinksChangeColor("screenshot");
});

function screenshot() {
    html2canvas(document.querySelector('html'))
        .then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = 'screenshot.png';
        link.click();
    })
        .catch(error => {
        console.error("Error taking screenshot:", error);
    });
}
// ------------------------------------------------------------------ Screenshot ------------------------------------------------------------------

// ------------------------------------------------------------------ Auto Rest ------------------------------------------------------------------
document.getElementById("closeAutoResetDeckMessageBtn").addEventListener("click", () => {
    document.getElementById("autoResetDeckContainer").style.display = "none";
})
// ------------------------------------------------------------------ Auto Rest ------------------------------------------------------------------


function deductCurrentBalanceFromSpecialFeature(deductAmount) {
    if (deductAmount !== 0) {
       let remainingBalance = 0;
        remainingBalance = +getCookie("currentBalance") - deductAmount;
        setCookie("currentBalance", remainingBalance, 7)

        const balance = document.getElementById("currentBalance");
        balance.classList.add('balance-update');

        setTimeout(() => {
            balance.textContent = remainingBalance;
            balance.classList.remove('balance-update');
        }, 1000);
    }
}


// ------------------------------------------------------------------ Timer ------------------------------------------------------------------
let countdown;
function setCountdown() {
    if (getCookie("selectedMode") === "Beginner") {
        countdown = 60;
    }
    else if (getCookie("selectedMode") === "Intermediate") {
        countdown = 30;
    }
    else if (getCookie("selectedMode") === "Advanced") {
        countdown = 15;
    }
    document.querySelector(".countdown-element.seconds").textContent = countdown;
}

let interval;
function startCountdown() {
    document.querySelector(".countdown-element.seconds").textContent = countdown;

    if (countdown > 0) {
        countdown--;
    }
    else {
        clearInterval(interval);

        if (window.squeezeWindow && !window.squeezeWindow.closed) {
            window.squeezeWindow.close();
        }

        if (playerCard1FlipStatus === true) {
            flipPlayerCard1();
        }
        if (bankerCard1FlipStatus === true) {
            flipBankerCard1();
        }
        if (playerCard2FlipStatus === true) {
            flipPlayerCard2();
        }
        if (bankerCard2FlipStatus === true) {
            flipBankerCard2();
        }

        flipPlayerCounter = 2;
        flipBankerCounter = 2;
        checkIfAllFlipped();
    }
}
// ------------------------------------------------------------------ Timer ------------------------------------------------------------------

// ------------------------------------------------------------------ Rule Of Baccarat ------------------------------------------------------------------
document.getElementById("rulesOfBaccarat").addEventListener("click", () => {
    rulesOfBaccarat();
    navLinksChangeColor("rulesOfBaccarat");
});

function rulesOfBaccarat() {
    const rulesContent = `
    <html>
    <head>
        <title>Baccarat Rules</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 20px;
            }
            h1 {
                color: #333;
            }
            p {
                margin: 10px 0;
            }
        </style>
    </head>
    <body>
        <h1>Baccarat Rules</h1>

        <h2>Game Setup</h2>
        <p>In the game, 8 decks of cards will be used, and after 30 rounds of play, any undealt cards will be reset automatically.</p>
        <hr>
    
        <h2>Mode Selection</h2>
        <ul>
            <li><strong>Beginner Player:</strong> 60 seconds to make a decision</li>
            <li><strong>Intermediate Player:</strong> 30 seconds to make a decision</li>
            <li><strong>Advanced Player:</strong> 15 seconds to make a decision</li>
        </ul>
        <p>When the time runs out, the initial four cards will be flipped automatically, which means you cannot use the card swapping function.</p>
        <hr>
    
        <h2>Baccarat Payouts Explanation</h2>
        <ul>
            <li><strong>Banker Pair:</strong> If the Banker's first two cards form a pair, the payout is 11:1.</li>
            <li><strong>Lucky 6:</strong> If the Banker wins with a total of 6 points, the payout is 12:1 with two cards, and 23:1 with three cards.</li>
            <li><strong>Player Pair:</strong> If the Player's first two cards form a pair, the payout is 11:1.</li>
            <li><strong>Banker Win:</strong> If the Banker's hand value is higher than the Player's, the payout is 1:1.</li>
            <li><strong>Player Win:</strong> If the Player's hand value is higher than the Banker's, the payout is 1:1.</li>
            <li><strong>Tie:</strong> If both the Banker and Player have the same hand value, the payout is 8:1.</li>
        </ul>
        <hr>
    
        <h2>No Draw Conditions</h2>
        <p>The following three situations do not require either the banker or the player to draw an additional card:</p>
        <ol>
            <li>Either the banker or the player has a total of 8 or 9 points.</li>
            <li>The banker has 6 points and the player has 7 points, or the banker has 7 points and the player has 6 points.</li>
            <li>Both the banker and the player have 6 points or more.</li>
            <li>The player must draw a card if they have 0 to 5 points.</li>
        </ol>
        <hr>
    
        <h2>Banker Drawing Rules</h2>
        <p>When the player draws a third card, the following rules apply to the banker:</p>
        <ol>
            <li>If the banker has 0 to 2 points, the banker must draw a card.</li>
            <li>If the banker has 3 points and the player's third card is not 8, the banker must draw a card.</li>
            <li>If the banker has 4 points and the player's third card is 2 to 7, the banker must draw a card.</li>
            <li>If the banker has 5 points and the player's third card is 4 to 7, the banker must draw a card.</li>
            <li>If the banker has 6 points and the player's third card is 6 or 7, the banker must draw a card.</li>
            <li>If the banker has 7 points, the banker cannot draw a card.</li>
        </ol>
        <hr>
    
        <h2>Special Draw Condition</h2>
        <p>If the player has 6 points or more and the banker has 0 to 5 points, the player does not draw a card, but the banker must.</p>
        <hr>
    
        <h2>Good luck and enjoy your game!</h2>
    </body>
    </html>
    `;

    // Open a new window and write the rules content into it
    const rulesWindow = window.open('', 'BaccaratRules', 'width=600,height=400');
    rulesWindow.document.write(rulesContent);
    rulesWindow.document.close();
}
// ------------------------------------------------------------------ Rule Of Baccarat ------------------------------------------------------------------

function updateBalance(receiveAmount, totalWinAmount) {
    const balance = document.getElementById("currentBalance");
    const roundResultElement = document.getElementById("roundResult");

    let currentBalance = +getCookie("currentBalance");
    if (receiveAmount !== 0) {
        currentBalance += receiveAmount;
        setCookie("currentBalance", currentBalance, 7)

        balance.classList.add("balance-update");

        setTimeout(() => {
            balance.textContent = currentBalance;
            balance.classList.remove("balance-update");
        }, 1000);
    }

    // Show win or loss for this round
    if (totalWinAmount >= 0) {
        roundResultElement.textContent = `You won $${totalWinAmount}.`;
        roundResultElement.className = 'won';
    }
    else {
        roundResultElement.textContent = `You lost $${Math.abs(totalWinAmount)}.`;
        roundResultElement.className = 'lost';
    }
    document.getElementById("roundResult").style.display = "block";
}

let theBiggestHandYouWOn = 0;
function updateTheBiggestHandYouWon(amount) {
    if(amount > theBiggestHandYouWOn) {
        theBiggestHandYouWOn = amount;
        setCookie("theBiggestHandYouWon", theBiggestHandYouWOn, 7);

        document.getElementById("theBiggestHandYouWon").classList.add("balance-update");

        setTimeout(() => {
            document.getElementById("theBiggestHandYouWon").textContent = theBiggestHandYouWOn;
            document.getElementById("theBiggestHandYouWon").classList.remove("balance-update");
        }, 1000);
    }
}



