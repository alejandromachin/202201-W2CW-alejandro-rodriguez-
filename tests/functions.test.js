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
