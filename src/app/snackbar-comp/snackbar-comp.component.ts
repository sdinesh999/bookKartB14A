import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-snackbar-comp',
  templateUrl: './snackbar-comp.component.html',
  styleUrls: ['./snackbar-comp.component.scss']
})
export class SnackbarCompComponent implements OnInit {

  constructor(private snackBarService:SnackbarService) { }

  ngOnInit(): void {
  }

  popup(message:any, action:any) {
    this.snackBarService.openSnackBar(message, action);
  }

}
