async function handleCardSqueeze(cardImageUrl, nextFunction) {
    const img = new Image();
    img.src = cardImageUrl;

    await new Promise((resolve) => {
        img.onload = () => {
            let width = 798;
            let height = 576;

            const left = Math.max(0, (screen.width / 2) - (width / 2));
            const top = Math.max(0, (screen.height / 2) - (height / 2));

            const squeezeWindow = window.open(`cardSqueeze.html?image=${encodeURIComponent(cardImageUrl)}`, 'SqueezeCard', `width=${width},height=${height},left=${left},top=${top}`);
            window.squeezeWindow = squeezeWindow;

            const interval = setInterval(() => {
                if (squeezeWindow.closed) {
                    clearInterval(interval);
                    resolve();
                }
            }, 100);
        };
        img.onerror = () => {
            console.error("Image failed to load.");
            resolve();
        };
    });

    await nextFunction();
    await checkIfAllFlipped();
}

const urlParams = new URLSearchParams(window.location.search);
const cardImageUrl = urlParams.get("image");
const faceUpCard = document.getElementById("faceUpCard");
const slideCard = document.getElementById("slideCard");

if (faceUpCard && slideCard) {
    faceUpCard.style.backgroundImage = 'url(' + cardImageUrl + ')';
    faceUpCard.style.display = 'block';

    const img = new Image();
    img.src = cardImageUrl;

    img.onload = () => {
        const isVertical = img.height > img.width;
        let containerStyle = '';

        if (isVertical) {
            containerStyle = 'width: 288px; height: 399px;';
            slideCard.style.backgroundImage = 'url(img/backOfCards/vertical.png)';
        }
        else {
            containerStyle = 'width: 399px; height: 288px;';
            slideCard.style.backgroundImage = 'url(img/backOfCards/horizontal.png)';
        }

        const cardContainer = document.querySelector('.card-container');
        cardContainer.style = containerStyle;
    };

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    slideCard.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - slideCard.getBoundingClientRect().left;
        offsetY = e.clientY - slideCard.getBoundingClientRect().top;
        slideCard.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            let moveX = e.clientX - offsetX - slideCard.getBoundingClientRect().left;
            let moveY = e.clientY - offsetY - slideCard.getBoundingClientRect().top;

            slideCard.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';

            if (img.height > img.width) {
                if (moveX >= 144) {
                    slideCard.style.transform = 'translate(399px, 0px)';
                    isDragging = false;
                    setTimeout(() => {
                        window.close();
                    }, 750);
                }
                else if (moveX <= -144) {
                    slideCard.style.transform = 'translate(-399px, 0px)';
                    isDragging = false;
                    setTimeout(() => {
                        window.close();
                    }, 750);
                }
                else if (moveY >= 199) {
                    slideCard.style.transform = 'translate(0px, 399px)';
                    isDragging = false;
                    setTimeout(() => {
                        window.close();
                    }, 750);
                }
                else if (moveY <= -199) {
                    slideCard.style.transform = 'translate(0px, -399px)';
                    isDragging = false;
                    setTimeout(() => {
                        window.close();
                    }, 750);
                }
            }
            else {
                if (moveX >= 199) {
                    slideCard.style.transform = 'translate(399px, 0px)';
                    isDragging = false;
                    setTimeout(() => {
                        window.close();
                    }, 750);
                }
                else if (moveX <= -199) {
                    slideCard.style.transform = 'translate(-399px, 0px)';
                    isDragging = false;
                    setTimeout(() => {
                        window.close();
                    }, 750);
                }
                else if (moveY >= 144) {
                    slideCard.style.transform = 'translate(0px, 399px)';
                    isDragging = false;
                    setTimeout(() => {
                        window.close();
                    }, 750);
                }
                else if (moveY <= -144) {
                    slideCard.style.transform = 'translate(399px, 0px)';
                    isDragging = false;
                    setTimeout(() => {
                        window.close();
                    }, 750);
                }
            }
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        slideCard.style.cursor = 'grab';
    });
}
