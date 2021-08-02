import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-comp',
  templateUrl: './snackbar-comp.component.html',
  styleUrls: ['./snackbar-comp.component.scss']
})
export class SnackbarCompComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message:any, action:any) {
    
   
    this.snackBar.open(message, action);
  }

}
