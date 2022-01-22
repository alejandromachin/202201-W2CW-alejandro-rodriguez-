const rows = 20;
const columns = 20;

const gameboard = () => {
  const world = document.querySelector(".world");
  const table = document.createElement("table");

  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");
    tr.setAttribute("alive", false);
    for (let j = 0; j < columns; j++) {
      const cells = document.createElement("td");

      tr.appendChild(cells);
    }
    table.appendChild(tr);
  }
  world.appendChild(table);
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

const prueba = newArray(50, 50);
console.log(prueba);
