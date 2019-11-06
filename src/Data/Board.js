
class Board {
    constructor(length, width, Cell = SimpleCell) {
        this.length = length;
        this.width = width;
        this.cells = [];

        for (let i = 0; i < length; i++) {
            let row = [];
            for (let j = 0; j < width; j++) {
                let identifier = this.getCellIdentifier(i, j);
                row.push(new Cell(identifier));
            }
            this.cells.push(row);
        }
    }

    getCellIdentifier(i, j) {
        return i * this.width + j;
    }

    switchCells([firstCellRow, firstCellCol], [secondCellRow, secondCellCol]) {
        let tempCell = this.cells[firstCellRow][firstCellCol];
        this.cells[firstCellRow][firstCellCol] = this.cells[secondCellRow][secondCellCol];
        this.cells[secondCellRow][secondCellCol] = tempCell;
    }

}
