import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  returnUrl: string;
  loading: boolean;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  
  }
  
  onLogin(form: NgForm) {
    console.log(form.value.email );

    this.loading = true;
    this.returnUrl = '/about'
    this.authService.login(form.value.email, form.value.password)
    .pipe(first())
    .subscribe(
      data => {
        console.log(data);
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      }
    );

  }

}
