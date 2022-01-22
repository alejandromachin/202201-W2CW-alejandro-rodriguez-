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

const deadOrAlive = (i, j) => {
  let aliveNeighbors = 0;
  if (arrayToPlayWith[i][j] === true) {
    if (i - 1 >= 0) {
      if (arrayToPlayWith[i - 1][j] === true) aliveNeighbors++;
    }
    if (i - 1 >= 0 && j - 1 >= 0) {
      if (arrayToPlayWith[i - 1][j - 1] === true) aliveNeighbors++;

      if (i - 1 >= 0 && j + 1 < columns) {
        if (arrayToPlayWith[i - 1][j + 1] === true) aliveNeighbors++;

        if (j - 1 >= 0) {
          if (arrayToPlayWith[i][j - 1] === true) aliveNeighbors++;
        }
        if (j + 1 < columns) {
          if (arrayToPlayWith[i][j + 1] === true) aliveNeighbors++;
        }
        if (i + 1 < rows) {
          if (arrayToPlayWith[i + 1][j] === true) aliveNeighbors++;
        }
        if (i + 1 < rows && j - 1 >= 0) {
          if (arrayToPlayWith[i + 1][j - 1] === true) aliveNeighbors++;
        }
        if (i + 1 < rows && j + 1 < columns) {
          if (arrayToPlayWith[i + 1][j + 1] === true) aliveNeighbors++;
        }
      }
    }
    return aliveNeighbors;
  }
};

const coverArray = () => {
  for (let i = 0; i < arrayToPlayWith.length; i++) {
    for (let j = 0; j < arrayToPlayWith[i].length; j++) {
      const aliveNeighbors = deadOrAlive(i, j);
      if (aliveNeighbors > 2) {
        arrayToPlayWith[i][j] = false;
      }
    }
  }
};

coverArray();
console.log(arrayToPlayWith);

// Any live cell with two or three live neighbours survives.
// Any dead cell with three live neighbours becomes a live cell.
// All other live cells die in the next generation. Similarly, all other dead cells stay dead.
