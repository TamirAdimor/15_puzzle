
class Board {
    constructor(length, width) {
        this.length = length;
        this.width = width;
        this.cells = [];

        for (let i = 0; i < length; i++) {
            let row = [];
            for (let j = 0; j < width; j++) {
                row.push(this.getCellIdentifier(i, j));
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
        return this.cells;
    }

}
