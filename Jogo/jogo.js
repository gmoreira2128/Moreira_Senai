const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
const grid = 30; // Tamanho das células do grid
const columns = canvas.width / grid;
const rows = canvas.height / grid;

// Inicialização do board
const board = Array.from({ length: rows }, () => Array(columns).fill(0));

// Função para desenhar retângulos no canvas
function drawRect(x, y, color) {
    context.fillStyle = color;
    context.fillRect(x * grid, y * grid, grid, grid);
}

// Função para desenhar o board e a peça atual
function drawBoard() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
            if (board[y][x]) {
                drawRect(x, y, 'gray');
            }
        }
    }
    drawPiece(currentPiece, offsetX, offsetY, 'blue');
}

// Definição das peças
const pieces = [
    [[1, 1, 1, 1]], // Linha
    [[1, 1], [1, 1]], // Quadrado
    [[0, 1, 0], [1, 1, 1]], // T
    [[1, 1, 0], [0, 1, 1]], // Z
    [[0, 1, 1], [1, 1, 0]]  // S
];

let currentPiece = pieces[0]; // Começa com a primeira peça
let offsetX = Math.floor(columns / 2) - Math.floor(currentPiece[0].length / 2);
let offsetY = 0;

// Função para desenhar a peça
function drawPiece(piece, offsetX, offsetY, color) {
    for (let y = 0; y < piece.length; y++) {
        for (let x = 0; x < piece[y].length; x++) {
            if (piece[y][x]) {
                drawRect(x + offsetX, y + offsetY, color);
            }
        }
    }
}

// Função para verificar colisão
function isCollision(piece, offsetX, offsetY) {
    for (let y = 0; y < piece.length; y++) {
        for (let x = 0; x < piece[y].length; x++) {
            if (piece[y][x]) {
                let newX = x + offsetX;
                let newY = y + offsetY;
                if (newX < 0 || newX >= columns || newY >= rows || board[newY][newX]) {
                    return true;
                }
            }
        }
    }
    return false;
}

// Função para fixar a peça e remover linhas completas
function fixPiece() {
    for (let y = 0; y < currentPiece.length; y++) {
        for (let x = 0; x < currentPiece[y].length; x++) {
            if (currentPiece[y][x]) {
                board[y + offsetY][x + offsetX] = 1;
            }
        }
    }
    removeFullLines();
    resetPiece();
}

// Função para remover linhas completas
function removeFullLines() {
    for (let y = rows - 1; y >= 0; y--) {
        if (board[y].every(cell => cell)) {
            board.splice(y, 1);
            board.unshift(Array(columns).fill(0));
            y++; // Verifica a linha atual novamente após a remoção
        }
    }
}

// Função para resetar a peça atual
function resetPiece() {
    currentPiece = pieces[Math.floor(Math.random() * pieces.length)];
    offsetX = Math.floor(columns / 2) - Math.floor(currentPiece[0].length / 2);
    offsetY = 0;
    if (isCollision(currentPiece, offsetX, offsetY)) {
        // Se a peça inicial colidir, significa que o jogo acabou
        alert("Game Over");
        board.forEach(row => row.fill(0)); // Limpa o grid
    }
}

// Funções de movimentação
function moveDown() {
    if (!isCollision(currentPiece, offsetX, offsetY + 1)) {
        offsetY++;
    } else {
        fixPiece();
    }
    drawBoard();
}

function moveLeft() {
    if (!isCollision(currentPiece, offsetX - 1, offsetY)) {
        offsetX--;
    }
    drawBoard();
}

function moveRight() {
    if (!isCollision(currentPiece, offsetX + 1, offsetY)) {
        offsetX++;
    }
    drawBoard();
}

function rotatePiece() {
    const rotatedPiece = rotateMatrix(currentPiece);
    if (!isCollision(rotatedPiece, offsetX, offsetY)) {
        currentPiece = rotatedPiece;
    }
    drawBoard();
}

// Função para rotacionar a matriz da peça
function rotateMatrix(matrix) {
    return matrix[0].map((_, i) => matrix.map(row => row[i]).reverse());
}

// Inicializa o jogo
setInterval(moveDown, 1000); // Move a peça para baixo a cada segundo

document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowLeft':
            moveLeft();
            break;
        case 'ArrowRight':
            moveRight();
            break;
        case 'ArrowDown':
            moveDown();
            break;
        case 'ArrowUp':
            rotatePiece();
            break;
    }
});
