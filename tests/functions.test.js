const rows = 5;
const columns = 5;
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
const arrayToPlayWith = [
  [true, false, true, false, true],
  [true, false, true, true, false],
  [true, true, false, false, true],
  [true, false, true, false, true],
  [false, true, true, false, true],
  [false, false, true, false, true],
];

const coverArray = () => {
  for (let i = 0; i < arrayToPlayWith.length; i++) {
    for (let j = 0; j < arrayToPlayWith[i].length; j++) {
      arrayToPlayWith[i][j] = 0;
    }
  }
  return arrayToPlayWith;
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

describe("Given a function coverArray()", () => {
  describe("When it is called", () => {
    test("Then it should cover arrayToPlayWith and changes all values to 0", () => {
      const arrayExpected = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];

      const newArrayReturned = coverArray();

      expect(newArrayReturned).toEqual(arrayExpected);
    });
  });
});
