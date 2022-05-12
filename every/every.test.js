import { every } from './every';

describe('Given the function every', () => {
  describe('When receive the array of numbers: [56, 26, 16, 19, 14] ', () => {
    test('should return true using the function (currentValue) => currentValue > 10 ', () => {
      //Arrange
      const array = [56, 26, 16, 19, 14];
      const providedFunction = (currentValue) => currentValue > 10;
      const expectedResult = true;
      //Act
      const result = every(array, providedFunction);
      //Expect
      expect(result).toBe(expectedResult);
    });
  });

  describe('When receive the array of numbers: [56, 26, 16, 19, 14] ', () => {
    test('should return true using the function (currentValue) => currentValue < 10 ', () => {
      //Arrange
      const array = [56, 26, 16, 19, 14];
      const providedFunction = (currentValue) => currentValue < 10;
      const expectedResult = false;
      //Act
      const result = every(array, providedFunction);
      //Expect
      expect(result).toBe(expectedResult);
    });
  });

  describe('When receive an empty array', () => {
    test('should return true using a function that compares is if > or <  than any number ', () => {
      //Arrange
      const array = [];
      const providedFunction = (currentValue) => currentValue < 10;
      const expectedResult = true;
      //Act
      const result = every(array, providedFunction);
      //Expect
      expect(result).toBe(expectedResult);
    });
  });
});
