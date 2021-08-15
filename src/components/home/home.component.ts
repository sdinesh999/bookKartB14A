import { Router } from '@angular/router';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SpaceValidator } from './spacevalidation';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formParentGroup!: FormGroup;

  constructor(private formChildGroup: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.myLoginForm();
  }


  myLoginForm(){
    this.formParentGroup = this.formChildGroup.group({
      user: this.formChildGroup.group({
        email: new FormControl('',[Validators.required,
                                  SpaceValidator.onlyContainSpace,
                                  Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$') ]),
        password: new FormControl('', [Validators.required])
      })
    })
  }

  get email(){
    return this.formParentGroup.get('user.email')
  }

  get password(){
    return this.formParentGroup.get('user.password')
  }


  login(){
     this.authService.executeAuthentication(this.formParentGroup.controls['user'].value.email,
                                                      this.formParentGroup.controls['user'].value.password).subscribe({
       next: (response: any) =>{
          this.router.navigateByUrl("/orders")
       },
       error: (err: any) =>{
           alert("Invalid Credentails")
       }
     })
  }



}
