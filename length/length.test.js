/* eslint-disable no-undef */
import { length } from './length';

describe('Give the function length', () => {
  describe('When recibe an array', () => {
    test('should return the length', () => {
      //Arrange
      const array = ['Naranja', 'Pera'];
      const arrayLength = 2;
      //Act
      const result = length(array);
      //Expect
      expect(result).toBe(arrayLength);
    });
  });
});
