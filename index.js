const rows = 20;
const columns = 20;

function gameboard() {
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
}

window.onload = function () {
  gameboard();
};
