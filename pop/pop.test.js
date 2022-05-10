import { pop } from './pop';

describe('Given the function pop', () => {
  describe('When receive an empty array', () => {
    test('should return an empty array ', () => {
      //Arrange
      const EmptyArray = [];
      const returnedValue = [];
      //Act
      const result2 = pop(EmptyArray);
      //Expect
      expect(result2).toStrictEqual(returnedValue);
    });
  });

  describe('When receive an undefined array', () => {
    test('should return a message Error ', () => {
      //Arrange
      const EmptyArray
        //const returnedValue = [];
        //Act
        //const result2 = ;
        //Expect
        expect(() => pop(EmptyArray)).toThrow(SyntaxError
        );
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
      const message = 'MEEEC';
      //Act
      const result = pop(stringVariable);
      //Expect
      expect(result).toStrictEqual(message);
    });
  });

  describe('When receive a Number', () => {
    test('should throw a message error ', () => {
      //Arrange
      const numberVariable = 123;
      const lastItem = ['e'];
      //Act
      const result = pop(numberVariable);
      //Expect
      expect(result).toStrictEqual(lastItem);
    });
  });
});
