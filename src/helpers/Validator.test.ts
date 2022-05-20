import { Validator } from './Validator';

describe('Required fields method should:', () => {

  let validator;

  beforeEach(() => {
    validator = new Validator();
  })

  test('throw error if there is any missing required field in object', () => {
    const requiredFields = ['banana', 'orange', 'apple'];
    const givenObject = {banana: 2, apple: 10};
    const result = () => {
      validator.throwErrorIfMissingRequiredFields(requiredFields, givenObject);
    }
    expect(result).toThrowError();
  })

  test('not throw error if all required fields exist in object', () => {
    const requiredFields = ['banana', 'orange', 'apple'];
    const givenObject = {banana: 2, orange: 5, apple: 10};
    const result = () => {
      validator.throwErrorIfMissingRequiredFields(requiredFields, givenObject);
    }
    expect(result).not.toThrowError();
  })

})
