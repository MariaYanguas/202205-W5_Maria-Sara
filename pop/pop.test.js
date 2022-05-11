import { pop } from './pop';

describe('Given the function pop', () => {
  describe('When receive an empty array', () => {
    test('should return an empty array ', () => {
      //Arrange
      const EmptyArray = [];

      //Act
      //Expect
      expect(() => pop(EmptyArray)).toThrow(RangeError);
    });
  });

  describe('When receive an undefined array', () => {
    test('should return a message Error ', () => {
      //Arrange
      let undefArray;

      //Act

      //Expect
      expect(() => pop(undefArray)).toThrow(TypeError);
    });
  });

  describe('When receive an array with Strings or Numbers', () => {
    test('should delete the last item and return it ', () => {
      //Arrange
      const array = ['a', 'b', 'c', 'd', 'e'];
      const lastItem = 'e';
      //Act
      const result = pop(array);
      //Expect
      expect(result).toStrictEqual(lastItem);
    });
  });

  describe('When receive an array with Strings or Numbers', () => {
    test('should delete the last item modifying the array length and content', () => {
      //Arrange
      const array = ['a', 'b', 'c', 'd', 'e'];
      const changedArray = ['a', 'b', 'c', 'd'];
      const changedArrayLength = changedArray.length;
      //Act
      const usingPopFunction = pop(array);
      const arrayResult = array.length;
      //Expect
      expect(arrayResult).toStrictEqual(changedArrayLength);
      expect(array).toEqual(changedArray);
    });
  });

  describe('When receive a Number', () => {
    test('should throw a message error ', () => {
      //Arrange
      const numberVariable = 123;
      //Act
      //Expect
      expect(() => pop(numberVariable)).toThrow(
        TypeError("Can't use pop on a number")
      );
    });
  });

  describe('When receive an array with one value which is the primitive NaN', () => {
    test('should delete the item and return it ', () => {
      //Arrange
      const array = [NaN];
      const returnedValue = NaN;
      //Act
      const result = pop(array);
      //Expect
      expect(result).toStrictEqual(returnedValue);
    });
  });

  describe('When receive an array with Numbers and the last item is the primitive NaN', () => {
    test('should delete the item and return it ', () => {
      //Arrange
      const array = [1, 2, 3, 4, NaN];
      const returnedValue = NaN;
      //Act
      const result = pop(array);
      //Expect
      expect(result).toStrictEqual(returnedValue);
    });
  });

  describe('When receive an array with Strings and the last item is the primitive NaN', () => {
    test('should delete the item and return it ', () => {
      //Arrange
      const array = ['a', 'b', 'c', NaN];
      const returnedValue = NaN;
      //Act
      const result = pop(array);
      //Expect
      expect(result).toStrictEqual(returnedValue);
    });
  });

  describe('When receive a String', () => {
    test('should throw a message error ', () => {
      //Arrange
      const stringVariable = 'Hola';
      //Act

      //Expect
      expect(() => pop(...stringVariable)).toThrow(
        TypeError("Can't use pop on a string")
      );
    });
  });
});
