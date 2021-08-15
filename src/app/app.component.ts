import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/components/auth.service';

import { User } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: User | undefined;
  error: void;
  loggedIn=true;
  constructor(private authService: AuthService,private router:Router){}
  ngOnInit(){
  }
  logout(){
    this.loggedIn=false
    this.authService.logout(username, password);
    this.router.navigateByUrl('/login')
    this.openInNewTab();
  }
  openInNewTab(){
const win =window.open();
win?.focus();
} 
}
function username(username: any, password: any) {
  throw new Error('Function not implemented.');
}

function password(username: any, password: any) {
  throw new Error('Function not implemented.');
}

