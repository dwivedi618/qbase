export class validation{
    // Validates numbers
static numberValidator(number): any {
    if (number.pristine) {
       return null;
    }
    const NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/;
    number.markAsTouched();
    if (NUMBER_REGEXP.test(number.value)) {
       return null;
    }
    return {
       invalidNumber: true
    };
 }
}