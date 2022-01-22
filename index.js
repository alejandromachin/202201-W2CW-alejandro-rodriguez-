const rows = 20;
const columns = 20;

const gameboard = () => {
  const board = document.querySelector(".board");
  const table = document.createElement("table");

  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < columns; j++) {
      const cells = document.createElement("td");
      cells.setAttribute("alive", false);
      row.appendChild(cells);
    }
    table.appendChild(row);
  }
  board.appendChild(table);
};

window.onload = () => {
  gameboard();
};

const newArray = () => {
  const cellArray = [];

  for (let i = 0; i < rows; i++) {
    cellArray.push([]);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      cellArray[j].push(false);
    }
  }
  return cellArray;
};
const arrayToPlayWith = newArray();
console.log(arrayToPlayWith);

// eslint-disable-next-line no-unused-vars
const arrayPrueba = [
  [true, false, true, false, true],
  [true, false, true, true, false],
  [true, true, false, false, true],
  [true, false, true, false, true],
  [false, true, true, false, true],
  [false, false, true, false, true],
];

// eslint-disable-next-line no-unused-vars
const deadOrAlive = (i, j) => {
  if (arrayToPlayWith[i][j] === true) {
    let aliveNeighbours = 0;
    if (arrayToPlayWith[i][j + 1] === true) {
      aliveNeighbours++;
    }
    if (arrayToPlayWith[i][j - 1] === true) {
      aliveNeighbours++;
    }
    if (arrayToPlayWith[i + 1][j] === true) {
      aliveNeighbours++;
    }
    if (arrayToPlayWith[i - 1][j] === true) {
      aliveNeighbours++;
    }
    if (aliveNeighbours === 2 || aliveNeighbours === 3) {
      arrayToPlayWith[i][j] = false;
    }
  }

  // Any live cell with two or three live neighbours survives.
  // Any dead cell with three live neighbours becomes a live cell.
  // All other live cells die in the next generation. Similarly, all other dead cells stay dead.
};
