import { AbstractControl } from '@angular/forms';

export class MyValidators {

  static isNicolas(control: AbstractControl) {
    const value = control.value;
    if (value !== 'nicolas') {
      return { isNicolas: true };
    }
    return null;
  }

}
