function startGame() {
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 400;
    document.getElementById('game-container').appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const snakeSize = 20;
    let snake = [{ x: 300, y: 200 }];
    let direction = 'RIGHT';
    let food = { x: Math.random() * (canvas.width - snakeSize), y: Math.random() * (canvas.height - snakeSize) };

    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'green';
        snake.forEach(segment => ctx.fillRect(segment.x, segment.y, snakeSize, snakeSize));
        ctx.fillStyle = 'red';
        ctx.fillRect(food.x, food.y, snakeSize, snakeSize);
        updateSnake();
        setTimeout(gameLoop, 100);
    }

    function updateSnake() {
        let head = { ...snake[0] };
        switch (direction) {
            case 'LEFT':
                head.x -= snakeSize;
                break;
            case 'RIGHT':
                head.x += snakeSize;
                break;
            case 'UP':
                head.y -= snakeSize;
                break;
            case 'DOWN':
                head.y += snakeSize;
                break;
        }
        snake.unshift(head);
        if (head.x === food.x && head.y === food.y) {
            food = { x: Math.random() * (canvas.width - snakeSize), y: Math.random() * (canvas.height - snakeSize) };
        } else {
            snake.pop();
        }
    }

    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowLeft':
                direction = 'LEFT';
                break;
            case 'ArrowRight':
                direction = 'RIGHT';
                break;
            case 'ArrowUp':
                direction = 'UP';
                break;
            case 'ArrowDown':
                direction = 'DOWN';
                break;
        }
    });

    gameLoop();
}
