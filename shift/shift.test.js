import { shift } from './shift';

describe('Given the function shift', () => {
  describe('When receive an empty array', () => {
    test('should throw a message error ', () => {
      //Arrange
      const EmptyArray = [];

      //Act
      //Expect
      expect(() => shift(EmptyArray)).toThrow(
        TypeError('Invalid array length')
      );
    });
  });

  describe('When receive an undefined array', () => {
    test('should return a message Error ', () => {
      //Arrange
      let undefArray;

      //Act

      //Expect
      expect(() => shift(undefArray)).toThrow(TypeError);
    });
  });

  describe('When receive an array with Strings or Numbers', () => {
    test('should delete the first item and return it', () => {
      //Arrange
      const firstArr = [10, 20, 30, 40, 50];
      const returnedItem = 10;
      //Act
      const result = shift(firstArr);
      //Expect
      expect(result).toBe(returnedItem);
    });
  });

  describe('When receive an array with Strings or Numbers', () => {
    test('should delete the First item modifying the array length and content', () => {
      //Arrange
      const array = ['a', 'b', 'c', 'd', 'e'];
      const changedArray = ['b', 'c', 'd', 'e'];
      const changedArrayLength = changedArray.length;
      //Act
      const usingShiftFunction = shift(array);
      const arrayResult = array.length;
      //Expect
      expect(arrayResult).toStrictEqual(changedArrayLength);
      expect(array).toEqual(changedArray);
    });
  });

  describe('When receive a Number or a String, ', () => {
    test('should throw a message error ', () => {
      //Arrange
      const numberVariable = 123;
      const stringVariable = 'Hello';
      //Act
      //Expect
      expect(() => shift(numberVariable)).toThrow(TypeError);
      expect(() => shift(stringVariable)).toThrow(TypeError);
    });
  });

  describe('When receive an array with one value which is the primitive NaN', () => {
    test('should delete the item and return it ', () => {
      //Arrange
      const array = [NaN];
      const returnedValue = NaN;
      //Act
      const result = shift(array);
      //Expect
      expect(result).toStrictEqual(returnedValue);
    });
  });

  describe('When receive an array with Numbers and the First item is the primitive NaN', () => {
    test('should delete the item and return it ', () => {
      //Arrange
      const array = [NaN, 1, 2, 3, 4];
      const returnedValue = NaN;
      //Act
      const result = shift(array);
      //Expect
      expect(result).toStrictEqual(returnedValue);
    });
  });

  describe('When receive an array with Strings and the last item is the primitive NaN', () => {
    test('should delete the item and return it ', () => {
      //Arrange
      const array = [NaN, 'a', 'b', 'c'];
      const returnedValue = NaN;
      //Act
      const result = shift(array);
      //Expect
      expect(result).toStrictEqual(returnedValue);
    });
  });
});
