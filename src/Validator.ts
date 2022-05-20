import { SliderOptions } from './models';

export class Validator {

  validateObjectForRequiredFields(requiredFieldNames: string[], givenObject: Partial<SliderOptions>) {
    requiredFieldNames.forEach((fieldName: string) => {
      if (!(fieldName in givenObject)) {
        throw new Error(`Missing required property error: '${fieldName}' property was not provided.`);
      }
    })
  }

}
