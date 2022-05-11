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
      //const returnedValue = [];
      //Act
      //const result2 = ;
      //Expect
      expect(() => pop(undefArray)).toThrow(TypeError);
    });
  });

  describe('When receive an array', () => {
    test('should delete the last item and return it ', () => {
      //Arrange
      const array = ['a', 'b', 'c', 'd', 'e'];
      const lastItem = ['e'];
      //Act
      const result = pop(array);
      //Expect
      expect(result).toStrictEqual(lastItem);
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
});
