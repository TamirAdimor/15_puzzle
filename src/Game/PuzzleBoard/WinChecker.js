
class WinChecker {
    isWin(board) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.width; j++) {
                if (board.cells[i][j].id !==  board.getCellIdentifier(i, j)) {
                    return false;
                }
            }
        }
        return true;
    }
}