import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-user-dialog',
  standalone: true,
  imports: [MatInputModule, ReactiveFormsModule],
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.scss'
})
export class UserDialogComponent {
  userFormGroup: FormGroup;
  userFormControl = new FormControl();


  constructor() {
    this.userFormGroup = new FormGroup({
      fistname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-ZäöüÄÖß]{3,}$')]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-ZäöüÄÖß]{3,}$')]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3), Validators.pattern('^[a-zA-ZäöüÄÖß0-9]+(\.[a-zA-ZäöüÄÖß0-9]+)*@[a-zA-ZäöüÄÖß0-9]+\.[a-zA-Z]{2,}$')]),
      birthdate: new FormControl('', [Validators.required, Validators.pattern('^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.[0-9]{4}$')]),
    });
  }

}
