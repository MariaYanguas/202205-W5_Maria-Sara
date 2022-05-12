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

  describe('When receive a Number or a String, instead of an Array ', () => {
    test('should throw a message error ', () => {
      //Arrange
      const numberVariable = 123;
      const stringVariable = 'Hello';
      const providedFunction = (currentValue) => currentValue < 10;
      //Act
      //Expect
      expect(() => every(numberVariable, providedFunction)).toThrow(TypeError);
      expect(() => every(stringVariable, providedFunction)).toThrow(TypeError);
    });
  });

  describe('When receive a Number or a String, instead of an Array ', () => {
    test('should throw a message error ', () => {
      //Arrange
      const numberVariable = 123;
      const stringVariable = 'Hello';
      const providedFunction = (currentValue) => currentValue > 10;
      //Act
      //Expect
      expect(() => every(numberVariable, providedFunction)).toThrow(TypeError);
      expect(() => every(stringVariable, providedFunction)).toThrow(TypeError);
    });
  });

  describe('When the array contains a NaN ', () => {
    test('should return false ', () => {
      //Arrange
      const atTheEnd = [2, 3, 60, NaN];
      const atTheBeginning = [NaN, 2, 3, 60];
      const expectedValue = false;
      const providedFunction = (currentValue) => currentValue < 10;

      //Act
      const resultEnd = every(atTheEnd, providedFunction);
      const resultBeginning = every(atTheBeginning, providedFunction);
      //Expect
      expect(resultEnd).toBe(expectedValue);
      expect(resultBeginning).toBe(expectedValue);
    });
  });
});
