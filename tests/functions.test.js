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

describe("Given a function newArray()", () => {
  describe("When it is called", () => {
    test("Then it should return an array of 5 false values", () => {
      const expectedArray = [false, false, false, false, false];

      const newArrayReturned = newArray();

      expect(newArrayReturned).toEqual(expectedArray);
    });
  });

  describe("When it is called", () => {
    test("Then it should return a bidimentional array of 5*5 false values", () => {
      const expectedArray = [
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ];

      const newArrayReturned = newArray();

      expect(newArrayReturned).toEqual(expectedArray);
    });
  });
});
