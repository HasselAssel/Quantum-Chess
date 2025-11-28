document.getElementById("btn").onclick = async function () {
    const response = await fetch("/hello");
    const data = await response.json();
    document.getElementById("output").innerText = data.message;
};

const board = document.getElementById("board");

class ChessBoard {
    constructor(boardElement) {
        this.boardElement = boardElement;
        this.squares = []; // 2D array of squares
        this.initBoard();
    }

    initBoard() {
        for (let row = 0; row < 8; row++) {
            this.squares[row] = [];
            for (let col = 0; col < 8; col++) {
                const square = document.createElement("div");
                square.classList.add("square");
                square.classList.add((row + col) % 2 === 0 ? "white" : "black");
                square.dataset.row = row;
                square.dataset.col = col;

                square.addEventListener("click", () => {
                    console.log(`Clicked square: ${row}, ${col}`);
                });

                this.boardElement.appendChild(square);
                this.squares[row][col] = square;
            }
        }
    }

    placePiece(row, col, symbol) {
        const square = this.squares[row][col];
        square.innerHTML = `<span class="piece">${symbol}</span>`;
    }

    removePiece(row, col) {
        const square = this.squares[row][col];
        square.innerHTML = "";
    }
}

// Initialize
const chess = new ChessBoard(board);

// Example: place some "pieces" (dots for now)
chess.placePiece(0, 0, "●"); // example white rook
chess.placePiece(0, 1, "●");
chess.placePiece(7, 7, "●"); // example black rook
