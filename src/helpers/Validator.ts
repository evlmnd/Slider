export class Validator {

  throwErrorIfMissingRequiredFields(requiredFieldNames: string[], givenObject: {}): void {
    requiredFieldNames.forEach((fieldName: string) => {
      if (!(fieldName in givenObject)) {
        throw new Error(`Missing required property error: '${fieldName}' property was not provided.`);
      }
    })
  }

}
