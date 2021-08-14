import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar:MatSnackBar) { }

  openSnackBar(message: any, action: any) {
    this.snackbar.open(message, action, { duration: 2000,
      verticalPosition:'top',
      horizontalPosition:'center' 
    });
  }
}
