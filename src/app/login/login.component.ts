import { Component, OnInit } from '@angular/core';
import { NgForm,FormBuilder, Validators, FormGroup, FormControl, FormGroupDirective  } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';
import { validation } from '../validation';
import { ErrorStateMatcher } from '@angular/material/core';

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
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm: FormGroup;

  returnUrl: string;
  loading: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthenticationService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      numberInput: ['', [Validators.required, validation.numberValidator]]
   });
  
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  
  onLogin(form: NgForm) {
    console.log(form.value.email );

    this.loading = true;
    this.returnUrl = '/document'
    this.authService.login(form.value.email, form.value.password)
    .pipe(first())
    .subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([this.returnUrl]);
        }); 
        //this.router.navigate([this.returnUrl]);
        //window.location.reload();
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );

  }

}
