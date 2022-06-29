import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from '../alert.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  form!: FormGroup;
  submitted = false;
  loading = false;
  constructor(private formBuilder: FormBuilder,private authService:AuthService,private router:Router,private alertService:AlertService,private route:ActivatedRoute) { }

  ngOnInit(): void {this.form = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
});
  }
  get username(){
    return this.form.get('user.username')
  }

  get password(){
    return this.form.get('user.password')
  }
  
  get f() { return this.form.controls; }
    onSubmit() {
      
      console.log(this.form.value)
        this.submitted = true;
        this.alertService.clear();
        if (this.form.invalid) {
         return;
      }

      this.loading = true;
      this.authService.login(this.f.username.value, this.f.password.value)
          .pipe(first())
          .subscribe({
              next: () => {
                  // get return url from query parameters or default to home page
                  const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
                  this.router.navigateByUrl('/home');
              },
              error: (error: string) => {
                  this.alertService.error(error);
                  this.loading = false;
              }
          });
        }
onLogin(){
console.log(this.form.value)
if(this.submitted){
  console.log("sccessful");

}else{
    console.log("unsccessful")
  }
}
ngOnDestroy() {
  this.unsubscribe$.next();
  this.unsubscribe$.complete();
}
}

 
 

    
function v() {
  throw new Error('Function not implemented.');
}

