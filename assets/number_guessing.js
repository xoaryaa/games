function startGame() {
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Number Guessing Game</h2>
        <label for="guess">Guess a number between 1 and 100:</label>
        <input type="number" id="guess" min="1" max="100">
        <button id="submit-guess">Submit</button>
        <p id="result"></p>
    `;

    const number = Math.floor(Math.random() * 100) + 1;
    document.getElementById('submit-guess').addEventListener('click', () => {
        const guess = parseInt(document.getElementById('guess').value, 10);
        const result = document.getElementById('result');
        if (guess < number) {
            result.textContent = 'Too low!';
        } else if (guess > number) {
            result.textContent = 'Too high!';
        } else {
            result.textContent = 'Correct! Well done!';
        }
    });
}
