let roundCounter;
let roundResultRoadMap;

function initializeRoadMapFromCookie() {
    for (let i = 1; i < roundCounter; i++) {
        let currentCell = document.getElementById(`cell${i}`);
        if (roundResultRoadMap[i] === "P") {
            currentCell.classList.add("player");
            currentCell.innerHTML = "P";
        }
        else if (roundResultRoadMap[i] === "T") {
            currentCell.classList.add("tie");
            currentCell.innerHTML = "T";
        }
        else if (roundResultRoadMap[i] === "B") {
            currentCell.classList.add("banker");
            currentCell.innerHTML = "B";
        }
    }
}

function getRoundResultFromCookie() {
    return JSON.parse(getCookie("roundResultRoadMap"));
}

function roundResultRoadMapArrayToJSONAndSetCookie(array) {
    const roundResultRoadMapJSON = JSON.stringify(array);
    setCookie("roundResultRoadMap", roundResultRoadMapJSON, 7);
}

async function addResultToRoadMap(result) {
    // The cards will be reset after 30 rounds of the game.
    if (roundCounter % 30 == 0) {
        initializeDeck();
        undealtCards = new Array(13).fill(4 * numberOfDeck);
        undealtCardsRecordArrayToJSONAndSetCookie(undealtCards);
        numberOfUndealtCards = 52 * numberOfDeck;
        setCookie("numberOfUndealtCards", numberOfUndealtCards, 7);
        updateUndealtCardRecordInSlidePanel();
        await new Promise(resolve => setTimeout(resolve, 200));
        document.getElementById("autoResetDeckContainer").style.display = "block";
        autoDealProcess5();
    }

    if (roundCounter === 61) {
        resetRoadmap();
        roundCounter = 1;
    }

    let currentCell = document.getElementById(`cell${roundCounter}`);

    if (result === "PLAYER") {
        currentCell.classList.add("player");
        currentCell.innerHTML = "P";
        roundResultRoadMap.push("P");
    }
    else if (result === "TIE") {
        currentCell.classList.add("tie");
        currentCell.innerHTML = "T";
        roundResultRoadMap.push("T");
    }
    else if (result === "BANKER") {
        currentCell.classList.add("banker");
        currentCell.innerHTML = "B";
        roundResultRoadMap.push("B");
    }
    roundCounter++;
    setCookie("roundCounter", roundCounter, 7);
    roundResultRoadMapArrayToJSONAndSetCookie(roundResultRoadMap);
}

function resetRoadmap() {
    for (let i = 1; i <= 60; i++) {
        document.getElementById(`cell${i}`).classList.remove('banker', 'player', 'tie');
        document.getElementById(`cell${i}`).innerHTML = '';
    }
    roundResultRoadMap.length = 0;
    roundResultRoadMap[0] = "0";
    roundResultRoadMapArrayToJSONAndSetCookie(roundResultRoadMap);
}