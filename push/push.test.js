import { push } from './push';

describe('Given the function push', () => {
  describe('When recibe a new item', () => {
    test('should return the new length', () => {
      //Arrange
      const arrayInitial = ['Naranja', 'Pera'];
      const newItems = ['Limón'];
      const length = 3;
      //Act
      const result = push(arrayInitial, ...newItems);
      //Expect
      expect(result).toEqual(length);
    });
  });
});
