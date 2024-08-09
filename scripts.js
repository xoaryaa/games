document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start-number-guessing').addEventListener('click', () => loadGame('number_guessing'));
    document.getElementById('start-calculator').addEventListener('click', () => loadGame('calculator'));
    document.getElementById('start-snake-game').addEventListener('click', () => loadGame('snake_game'));
});

function loadGame(gameName) {
    const container = document.getElementById('game-container');
    container.innerHTML = ''; // Clear previous game
    const script = document.createElement('script');
    script.src = `assets/${gameName}.js`;
    script.onload = () => {
        if (typeof startGame === 'function') {
            startGame();
        }
    };
    container.appendChild(script);
}
