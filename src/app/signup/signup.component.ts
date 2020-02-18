import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { AlertService } from '../services/alert.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from '../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide = true;//this variable resposible for hide and show password on userend
  user: User = {
    id: 322,
    email: "dfsdfdsf",
    password: "dfsdfdsf",
    name: "fdsfd"
  };

  returnUrl: string;

  constructor(
    private _snackBar: MatSnackBar,//alert after sign up
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

//alert after sign up
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  onSignup(form: NgForm) {
    console.log("--------------->>>>>>>>>>>",form.value.email);
    this.user.email = form.value.email;
    this.user.password = form.value.password;
    this.user.name = form.value.name;
    this.returnUrl = '/login';

    this.userService.signup(this.user)
    .pipe(first())
    .subscribe(
      data => {
        console.log("signup test",data)
        this.alertService.success('Signup successfully', true);
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.alertService.error(error);
      }
    );
  }

}
