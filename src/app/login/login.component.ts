import { Component, OnInit } from '@angular/core';
import { NgForm,FormBuilder, Validators, FormGroup, FormControl, FormGroupDirective  } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';
import { validation } from '../validation';
import { ErrorStateMatcher } from '@angular/material/core';

import { MessageService } from '../services/message.service';
import { MatSnackBar } from '@angular/material/snack-bar';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm: FormGroup;

  returnUrl: string;
  loading: boolean;
  submitted = false;

  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private router: Router,
    private messageService : MessageService,
    private authService: AuthenticationService,
    private alertService: AlertService
  ) { }

  

  ngOnInit() {
    this.loginForm = this.fb.group({
      email : ['',[Validators.required,Validators.email]],
      password : ['',Validators.required]
     
   });
  
  }
  get form() { return this.loginForm.controls; }
 

  matcher = new MyErrorStateMatcher();

  
  
  onLoginSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
     this.messageService.openSnackBar('Please ! Provide Required Data',null);
     return;
     console.log("form Invalid");
 }
    console.log(this.form.email.value);

    this.loading = true;
    this.returnUrl = '/document'
    this.authService.login(this.form.email.value, this.form.password.value)
    .pipe(first())
    .subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([this.returnUrl]);
        }); 
        this.messageService.openSnackBar(data.message,null);
        //this.router.navigate([this.returnUrl]);
        //window.location.reload();
      },
      error => {
        // this.alertService.error(error);
        this.messageService.openSnackBar('Email Or Password Incorrect',null);
        this.loading = false;
      }
    );

  }


}
