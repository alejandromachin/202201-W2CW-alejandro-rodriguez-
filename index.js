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

const numberOfCells = 400;
const newArray = () => {
  const myArray = [];
  while (myArray.length < numberOfCells) {
    myArray.push(false);
  }

  const linea1 = [];
  for (let k = 0; k < 20; k++) {
    linea1.push(myArray[k]);
  }

  const linea2 = [];
  for (let k = 20; k < 40; k++) {
    linea2.push(myArray[k]);
  }

  const linea3 = [];
  for (let k = 40; k < 60; k++) {
    linea3.push(myArray[k]);
  }
  const linea4 = [];
  for (let k = 60; k < 80; k++) {
    linea4.push(myArray[k]);
  }
  const linea5 = [];
  for (let k = 80; k < 100; k++) {
    linea5.push(myArray[k]);
  }
  const linea6 = [];
  for (let k = 100; k < 120; k++) {
    linea6.push(myArray[k]);
  }
  const linea7 = [];
  for (let k = 120; k < 140; k++) {
    linea7.push(myArray[k]);
  }
  const linea8 = [];
  for (let k = 140; k < 160; k++) {
    linea8.push(myArray[k]);
  }
  const linea9 = [];
  for (let k = 160; k < 180; k++) {
    linea9.push(myArray[k]);
  }
  const linea10 = [];
  for (let k = 180; k < 200; k++) {
    linea10.push(myArray[k]);
  }
  const linea11 = [];
  for (let k = 200; k < 220; k++) {
    linea11.push(myArray[k]);
  }
  const linea12 = [];
  for (let k = 220; k < 240; k++) {
    linea12.push(myArray[k]);
  }
  const linea13 = [];
  for (let k = 240; k < 260; k++) {
    linea13.push(myArray[k]);
  }
  const linea14 = [];
  for (let k = 260; k < 280; k++) {
    linea14.push(myArray[k]);
  }
  const linea15 = [];
  for (let k = 280; k < 300; k++) {
    linea15.push(myArray[k]);
  }
  const linea16 = [];
  for (let k = 300; k < 320; k++) {
    linea16.push(myArray[k]);
  }
  const linea17 = [];
  for (let k = 320; k < 340; k++) {
    linea17.push(myArray[k]);
  }
  const linea18 = [];
  for (let k = 340; k < 360; k++) {
    linea18.push(myArray[k]);
  }
  const linea19 = [];
  for (let k = 360; k < 380; k++) {
    linea19.push(myArray[k]);
  }
  const linea20 = [];
  for (let k = 380; k < 400; k++) {
    linea20.push(myArray[k]);
  }

  const board = [
    linea1,
    linea2,
    linea3,
    linea4,
    linea5,
    linea6,
    linea7,
    linea8,
    linea9,
    linea10,
    linea11,
    linea12,
    linea13,
    linea14,
    linea15,
    linea16,
    linea17,
    linea18,
    linea19,
    linea20,
  ];

  return board;
};

const prueba = newArray();
console.log(prueba);
