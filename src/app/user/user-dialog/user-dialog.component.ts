import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {FormControl, FormGroup, ReactiveFormsModule,Validators,FormsModule, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-user-dialog',
  standalone: true,
  imports: [MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.scss'
})
export class UserDialogComponent {
  userFormGroup: FormGroup;
  userFormControl = new FormControl();


  constructor(private fb: FormBuilder,) {
    this.userFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3), Validators.pattern('^[a-zA-ZäöüÄÖß0-9]+(\.[a-zA-ZäöüÄÖß0-9]+)*@[a-zA-ZäöüÄÖß0-9]+\.[a-zA-Z]{2,}$')]),
    });
  }

}
