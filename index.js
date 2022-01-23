// numbers of rows and columns to play with. They has to be the same.
const rows = 20;
const columns = 20;

// generates a random bidimentional array
const newArray = () => {
  const bidimentionalArray = [];

  for (let i = 0; i < rows; i++) {
    bidimentionalArray.push([]);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      bidimentionalArray[j].push(false);
    }
  }
  return bidimentionalArray;
};

const arrayToPlayWith = newArray();

// function to activate the cells on click,
// it's called from the addEventListener given in gameboard funtion

const onClick = () => {
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
};

const gameboard = () => {
  const board = document.querySelector(".board");
  const table = document.createElement("table");

  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < columns; j++) {
      const cells = document.createElement("td");
      cells.classList.add("dead");

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
        cell.classList.remove("dead");

        cell.classList.add("alive");
      }
      if (arrayToPlayWith[i][j] === false) {
        cell.classList.add("dead");
      }
    }
  }
};
const random = document.getElementById("random");

random.addEventListener("click", () => {
  randomAliveCells();
});

const deadOrAlive = (i, j) => {
  let aliveNeighbors = 0;

  if (i === 0) {
    if (j === 0) {
      if (arrayToPlayWith[i][j + 1] === true) aliveNeighbors++;
      if (arrayToPlayWith[i + 1][j] === true) aliveNeighbors++;
      if (arrayToPlayWith[i + 1][j + 1] === true) aliveNeighbors++;
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
  setTimeout(() => {
    for (let i = 0; i < arrayToPlayWith.length; i++) {
      for (let j = 0; j < arrayToPlayWith[i].length; j++) {
        const aliveNeighbors = deadOrAlive(i, j);

        const cell = document.getElementById(`${i}_${j}`);

        if (arrayToPlayWith[i][j] === true) {
          if (aliveNeighbors === 2 || aliveNeighbors === 3) {
            arrayToPlayWith[i][j] = true;
          } else {
            arrayToPlayWith[i][j] = false;
            cell.classList.remove("alive");
            cell.classList.add("dead");
          }
        }
        if (arrayToPlayWith[i][j] === false) {
          if (aliveNeighbors === 3) {
            arrayToPlayWith[i][j] = true;
            cell.classList.remove("dead");

            cell.classList.add("alive");
          }
        }
      }
    }
    coverArray();
  }, 500);
};

const loop = () => {
  coverArray();
};

const start = document.getElementById("start");

start.addEventListener("click", () => {
  document.querySelector(".replay").style.display = "flex";
  document.querySelector(".play").style.display = "none";
  loop();
});

const replay = document.getElementById("replay");
replay.addEventListener("click", () => {
  window.location.reload();
});
