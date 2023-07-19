// Game variables
const table = document.getElementById('pong-table');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const ball = document.getElementById('ball');

let player1Y = 40;
let player2Y = 40;
let ballX = 50;
let ballY = 50;
let ballSpeedX = 2;
let ballSpeedY = 2;

// Update game elements
function update() {
  // Move players
  player1.style.top = player1Y + '%';
  player2.style.top = player2Y + '%';

  // Move ball
  ballX += ballSpeedX;
  ballY += ballSpeedY;
  ball.style.left = ballX + '%';
  ball.style.top = ballY + '%';

  // Collision detection with paddles
  if (ballY <= 0 || ballY >= 90) {
    ballSpeedY *= -1;
  }
  if (
    ballX <= 2 &&
    ballY >= player1Y - 10 &&
    ballY <= player1Y + 20
  ) {
    ballSpeedX *= -1;
  }
  if (
    ballX >= 97 &&
    ballY >= player2Y - 10 &&
    ballY <= player2Y + 20
  ) {
    ballSpeedX *= -1;
  }

  // Game over
  if (ballX <= 0) {
    alert('Player 2 wins!');
    reset();
  }
  if (ballX >= 100) {
    alert('Player 1 wins!');
    reset();
  }
}

// Reset game
function reset() {
  player1Y = 40;
  player2Y = 40;
  ballX = 50;
  ballY = 50;
  ballSpeedX = 0.5;
  ballSpeedY = 0.5;
}

// Player controls
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowUp' && player2Y > 0) {
    player2Y -= 5;
  }
  if (e.key === 'ArrowDown' && player2Y < 80) {
    player2Y += 5;
  }
  if (e.key === 'w' && player1Y > 0) {
    player1Y -= 5;
  }
  if (e.key === 's' && player1Y < 80) {
    player1Y += 5;
  }
});

// Game loop
setInterval(update, 1000 / 60);
