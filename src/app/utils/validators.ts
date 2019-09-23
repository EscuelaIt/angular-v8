import { AbstractControl } from '@angular/forms';

export class MyValidators {

  static isNicolas(control: AbstractControl) {
    const value = control.value;
    if (value !== 'nicolas') {
      return { isNicolas: true };
    }
    return null;
  }

  static isValidPassword(form: AbstractControl) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (confirmPassword.value !== password.value) {
      return { passwordNotValid: true };
    }
    return null;
  }

}
