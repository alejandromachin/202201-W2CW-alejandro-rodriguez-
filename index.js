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
