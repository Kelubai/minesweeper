const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = []
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let row = [];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
}

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = []
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let row = [];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(null);
    }
    board.push(row);
  }
//looking for adjacent bombs
const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  const neighborOffsets = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ];
  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;
  neighborOffsets.forEach(offset => {
    const neigborRowIndex = rowIndex + offset[0];
    const neigborColumnIndex = columnIndex + offset[1];
    if (neighborRowIndex >= 0 &&
    neighborRowIndex <= numberOfRows &&
    neighborColumnIndex >= 0 &&
    neighborColumnIndex <= nummberOfColumns) {
      if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
        numberOfBombs++;
      }
    }
  });
  return numberOfBombs;
}

//Flipping the tiles
const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
  if (playerBoard[rowIndex][columnIndex] !== ' ') {
    console.log('This tile has already been flipped!');
    return;
  } else if (bombBoard[rowIndex][columnIndex] !== 'B') {
    playerBoard[rowIndex][columnIndex] = 'B';
  } else {
    playerBoard[rowIndex][columnIndex] =
    getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
}
  //Placing the bombs
  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
//Checks if bomb has already been placed
    if (board[randomRowIndex][randomColumnIndex] !== 'B') {
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++;
    }
  }
  return board;
}

//Printing the board
const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
}

playerBoard = generatePlayerBoard(3, 4);

bombBoard = generateBombBoard(3, 4, 5);
/*
console.log('Player Board: ');

printBoard(playerBoard);

console.log('Bomb Board: ');

printBoard(bombBoard);
*/
flipTile(playerBoard, bombBoard, 0, 0);

console.log('Updated Player Board:');

printBoard(playerBoard);
