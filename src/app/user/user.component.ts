import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, UserDialogComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  constructor(private dialog: MatDialog) {

  }

  openDialog() {
    this.dialog.open(UserDialogComponent);
  }
}
