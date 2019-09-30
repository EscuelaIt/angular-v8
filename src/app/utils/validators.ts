import { AbstractControl } from '@angular/forms';
import { TodoService } from '../website/todo/services/todo.service';

import { map } from 'rxjs/operators';

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

  static hasTodo(service: TodoService) {
    return (control: AbstractControl) => {
      const title = control.value;
      return service.hasTodo(title).pipe(
        map(hasTodo => {
          if (hasTodo) {
            return { hasTodo: true };
          }
          return null;
        })
      );
    };
  }

}
