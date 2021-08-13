import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: User | undefined;
  error: void;
  constructor(private authService: AuthService,private router:Router){}
  ngOnInit(){
  }
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login')
  }
}
