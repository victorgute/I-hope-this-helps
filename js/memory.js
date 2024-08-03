const cards = document.querySelectorAll('.memory-card');
const completeContainer = document.getElementById('complete-container');
const nextHintBtn = document.getElementById('next-hint-btn');
const memoryGameContainer = document.getElementById('memory-game-container');
const dicasContainer = document.getElementById('dicas');
const dica2Btn = document.getElementById('dica2-btn');
const dica3Btn = document.getElementById('dica3-btn');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchCount = 0;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    matchCount += 1;
    if (matchCount === cards.length / 2) {
        completeContainer.style.display = 'block';
    }

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

nextHintBtn.addEventListener('click', () => {
    memoryGameContainer.style.display = 'none';
    dica2Btn.style.display = 'block';
});

function mostrarDica1() {
    dicasContainer.style.display = 'none';
    memoryGameContainer.style.display = 'block';
}

function mostrarDica2() {
    dica2Btn.style.display = 'none';
    dica3Btn.style.display = 'block';
    // Adicione o conteúdo da Dica 2 aqui
}

function mostrarDica3() {
    dica3Btn.style.display = 'none';
    // Adicione o conteúdo da Dica 3 aqui
}
