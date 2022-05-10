import { shift } from './shift';

describe('Given the function shift', () => {
  describe('When receive an array', () => {
    test('should return the first item', () => {
      //Arrange
      const firstArr = [10, 20, 30, 40, 50];
      const returnedItem = 10;
      //Act
      const result = shift(firstArr);
      //Expect
      expect(result).toBe(returnedItem);
    });
  });
});
