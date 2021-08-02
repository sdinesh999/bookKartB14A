import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookKartB14A';
input = "0";
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
