
class HTMLDisplayer {
    constructor() {
        this.game = new Game();
        this.game.init();
        this.setInputListeners();
        this.displayBoard();
    }

    setInputListeners() {
        document.addEventListener('keydown', e => {
            let isWin;
            switch (e.code) {
            case "ArrowUp":
                isWin = this.game.makeTurn(Directions.UP);
                break;
            case "ArrowDown":
                isWin = this.game.makeTurn(Directions.DOWN);
                break;
            case "ArrowRight":
                isWin = this.game.makeTurn(Directions.RIGHT);
                break;
            case "ArrowLeft":
                isWin = this.game.makeTurn(Directions.LEFT);
                break;
            }
            this.displayBoard();
            if (isWin) {
                this.handleWin();
            }
        });
    }

    handleWin() {
        document.getElementById("win-title").className = "";
    }

    displayBoard() {
        this.clearBoard();

        for (let i = 0; i < this.game.board.length; i++) {
            let row = document.createElement("div");
            row.className = "row";
            for (let j = 0; j < this.game.board.width; j++) {
                let element = document.createElement("div");
                element.className = "cell";
                let cellId = this.game.board.cells[i][j].id;
                element.innerHTML = cellId === this.game.board.length * this.game.board.width - 1 ? "" : cellId + 1;
                row.appendChild(element);
            }
            (document.getElementsByClassName("board")[0]).appendChild(row);
        }
    }

    clearBoard() {
        (document.getElementsByClassName("board")[0]).innerHTML = "";
    }

}
