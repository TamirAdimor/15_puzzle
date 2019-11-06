
class BoardDisplayer {
    displayBoard(board) {
        (document.getElementsByClassName("board")[0]).innerHTML = "";

        for (let i = 0; i < board.length; i++) {
            let row = document.createElement("div");
            row.className = "row";
            for (let j = 0; j < board.width; j++) {
                let element = document.createElement("div");
                element.className = "cell";
                let cellId = board.cells[i][j].id;
                element.innerHTML = cellId === board.length * board.width - 1 ? "" : cellId + 1;
                row.appendChild(element);
            }
            (document.getElementsByClassName("board")[0]).appendChild(row);
        }
    }
}