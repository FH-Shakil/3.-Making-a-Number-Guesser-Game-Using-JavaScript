let correctNumber = Math.floor(Math.random() * 10) + 1;
let chances = 3;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const message = document.getElementById('message');
    const chancesDisplay = document.getElementById('chances');

    if (userGuess === correctNumber) {
        message.textContent = 'Congratulations! You guessed the correct number!';
        disableInput();
    } else {
        chances--;
        if (chances > 0) {
            message.textContent = userGuess > correctNumber ? 'Too high! Try again.' : 'Too low! Try again.';
            chancesDisplay.textContent = `Chances left: ${chances}`;
        } else {
            message.textContent = `You lose! The correct number was ${correctNumber}.`;
            disableInput();
        }
    }
}

function disableInput() {
    document.getElementById('guessInput').disabled = true;
}

function restartGame() {
    correctNumber = Math.floor(Math.random() * 10) + 1;
    chances = 3;
    document.getElementById('guessInput').disabled = false;
    document.getElementById('guessInput').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('chances').textContent = 'Chances left: 3';
}
