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

const numberOfCells = 25;
const newArray = () => {
  const myArray = [];
  while (myArray.length < numberOfCells) {
    myArray.push(false);
  }

  const linea1 = [];
  for (let k = 0; k < 5; k++) {
    linea1.push(myArray[k]);
  }

  const linea2 = [];
  for (let k = 5; k < 10; k++) {
    linea2.push(myArray[k]);
  }

  const linea3 = [];
  for (let k = 10; k < 15; k++) {
    linea3.push(myArray[k]);
  }
  const linea4 = [];
  for (let k = 15; k < 20; k++) {
    linea4.push(myArray[k]);
  }
  const linea5 = [];
  for (let k = 20; k < 25; k++) {
    linea5.push(myArray[k]);
  }

  const board = [linea1, linea2, linea3, linea4, linea5];

  return board;
};

const prueba = newArray();
console.log(prueba);
