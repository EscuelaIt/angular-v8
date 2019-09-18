import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';

import { MyValidators } from '@utils/validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  emailField: FormControl;
  nameField: FormControl;

  constructor() {
    this.emailField = new FormControl('', [
      Validators.minLength(10),
      Validators.required
    ]);
    this.emailField.valueChanges
    .pipe(
      debounceTime(350),
    )
    .subscribe(value => {
      console.log(this.emailField.valid, value);
    });

    this.nameField = new FormControl('', [
      Validators.required,
      MyValidators.isNicolas,
    ]);
  }

  ngOnInit() {
  }

  getValue() {
    console.log(this.nameField.value);
  }


}
