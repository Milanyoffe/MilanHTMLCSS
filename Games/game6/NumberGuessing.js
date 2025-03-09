
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

guessBtn.addEventListener('click', checkGuess);

function checkGuess() {
    const userGuess = Number(guessInput.value);
    attempts++;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts!`;
        message.style.color = '#28a745';
        guessInput.disabled = true;
        guessBtn.disabled = true;
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.';
        message.style.color = '#dc3545';
    } else {
        message.textContent = 'Too high! Try again.';
        message.style.color = '#dc3545';
    }

    guessInput.value = '';
    guessInput.focus();
}