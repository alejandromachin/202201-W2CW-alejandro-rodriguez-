const rows = 20;
const columns = 20;

// const myFunction = () => {
// };

// for (let i = 0; i < elements.length; i++) {
//   elements[i].addEventListener("click", myFunction, false);
// }

// const myFunction = function () {
//   document.getElementById(".toggle").style.background = "#ff006e";
// };

// Array.from(elements).forEach(function (element) {
//   element.addEventListener("click", myFunction);
// });
// const arrayCells = document.querySelectorAll(".cell");

// for (const cell of arrayCells) {
//   cell.addEventListener("click", () => {
//     document.getElementById(cell.id).style.background = "#ff006e";
//   });
// }
// arrayCells.addEventListener("click", () => {
//   document.getElementById(1_0).style.background = "#ff006e";
// });

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

function onClick() {
  const location = this.id.split("_");

  const rowLocation = Number(location[0]);
  const columnLocation = Number(location[1]);

  if (this.className === "alive") {
    this.setAttribute("class", "dead");
    arrayToPlayWith[rowLocation][columnLocation] = false;
  } else if (this.className === "dead") {
    arrayToPlayWith[rowLocation][columnLocation] = true;
    this.setAttribute("class", "alive");
  }
}
// function randomLiveOrDead() {
//   const location = this.id.split("_");

//   const rowLocation = Number(location[0]);
//   const columnLocation = Number(location[1]);

//   if (arrayToPlayWith[rowLocation][columnLocation] === true) {
//     this.setAttribute("class", "alive");
//     arrayToPlayWith[rowLocation][columnLocation] = false;
//   } else if (arrayToPlayWith[rowLocation][columnLocation] === false) {
//     this.setAttribute("class", "dead");
//   }
// }

const gameboard = () => {
  const board = document.querySelector(".board");
  const table = document.createElement("table");

  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < columns; j++) {
      const cells = document.createElement("td");

      cells.setAttribute("id", `${i}_${j}`);
      cells.addEventListener("click", onClick);
      row.appendChild(cells);
    }
    table.appendChild(row);
  }
  board.appendChild(table);
};

window.onload = () => {
  gameboard();
};

// CHANGES RANDOMLY THE STATUS OF EACH CELL TO LIVE OR DEAD

const randomAliveCells = () => {
  for (let i = 0; i < arrayToPlayWith.length; i++) {
    for (let j = 0; j < arrayToPlayWith[i].length; j++) {
      arrayToPlayWith[i][j] = Math.random() < 0.5;
      const cell = document.getElementById(`${i}_${j}`);
      if (arrayToPlayWith[i][j] === true) {
        cell.classList.add("alive");
      }
      if (arrayToPlayWith[i][j] === false) {
        cell.classList.add("dead");
      }
    }
  }
};
const start = document.getElementById("start");

start.addEventListener("click", () => {
  randomAliveCells();
});

const deadOrAlive = (i, j) => {
  let aliveNeighbors = 0;

  if (i === 0) {
    if (j === 0) {
      if (arrayToPlayWith[i][j + 1] === true) aliveNeighbors++;
      if (arrayToPlayWith[i + 1][j] === true) aliveNeighbors++;
    }
    if (j > 0 && j < columns) {
      if (arrayToPlayWith[i + 1][j] === true) aliveNeighbors++;
      if (arrayToPlayWith[i + 1][j - 1] === true) aliveNeighbors++;
      if (arrayToPlayWith[i + 1][j + 1] === true) aliveNeighbors++;
      if (arrayToPlayWith[i][j + 1] === true) aliveNeighbors++;
    }
    if (j === columns) {
      if (arrayToPlayWith[i][j - 1] === true) aliveNeighbors++;
      if (arrayToPlayWith[i + 1][j] === true) aliveNeighbors++;
      if (arrayToPlayWith[i + 1][j - 1] === true) aliveNeighbors++;
    }
  }

  // it does not evaluate the last collum

  if (j === columns && i > 0 && i < rows) {
    if (arrayToPlayWith[i - 1][j] === true) aliveNeighbors++;
    if (arrayToPlayWith[i - 1][j - 1] === true) aliveNeighbors++;
    if (arrayToPlayWith[i][j - 1] === true) aliveNeighbors++;
    if (arrayToPlayWith[i + 1][j - 1] === true) aliveNeighbors++;
    if (arrayToPlayWith[i + 1][j] === true) aliveNeighbors++;
  }

  // it does not evaluate de first column

  // if (j === 0 && i > 0 && i < rows) {
  //   if (arrayToPlayWith[i - 1][j] === true) aliveNeighbors++;
  //   if (arrayToPlayWith[i - 1][j + 1] === true) aliveNeighbors++;
  //   if (arrayToPlayWith[i][j + 1] === true) aliveNeighbors++;
  //   if (arrayToPlayWith[i + 1][j + 1] === true) aliveNeighbors++;
  //   if (arrayToPlayWith[i + 1][j] === true) aliveNeighbors++;
  // }

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
};

const coverArray = () => {
  for (let i = 0; i < arrayToPlayWith.length; i++) {
    for (let j = 0; j < arrayToPlayWith[i].length; j++) {
      const aliveNeighbors = deadOrAlive(i, j);
      const cell = document.getElementById(`${i}_${j}`);
      if (arrayToPlayWith[i][j] === true) {
        if (aliveNeighbors === 2 || aliveNeighbors === 3) {
          arrayToPlayWith[i][j] = true;
        } else {
          arrayToPlayWith[i][j] = false;
          cell.classList.add("dead");
        }
      }
      if (arrayToPlayWith[i][j] === false) {
        if (aliveNeighbors === 3) {
          arrayToPlayWith[i][j] = true;
          cell.classList.add("alive");
        }
      }
    }
  }
};

const loop = () => {
  const population = 0;
  while (population === 0) {
    coverArray();
  }
};

const empezar = document.getElementById("empezar");

empezar.addEventListener("click", () => {
  loop();
});

coverArray();
console.log(arrayToPlayWith);

// Any live cell with two or three live neighbours survives.
// Any dead cell with three live neighbours becomes a live cell.
// All other live cells die in the next generation. Similarly, all other dead cells stay dead.
