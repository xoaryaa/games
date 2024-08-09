function startGame() {
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h2>Calculator Game</h2>
        <input type="text" id="expression" placeholder="Enter calculation">
        <button id="calculate">Calculate</button>
        <p id="result"></p>
    `;

    document.getElementById('calculate').addEventListener('click', () => {
        const expression = document.getElementById('expression').value;
        const result = document.getElementById('result');
        try {
            result.textContent = `Result: ${eval(expression)}`;
        } catch (e) {
            result.textContent = 'Error';
        }
    });
}
