import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { AlertService } from '../services/alert.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from '../models/user';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide = true;//this variable resposible for hide and show password on userend
  submitted = false;
  signUpForm : FormGroup;
  user: User = {
    id: 322,
    email: "dfsdfdsf",
    password: "dfsdfdsf",
    name: "fdsfd"
  };

  returnUrl: string;
  

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,//alert msg after sign up
    private router: Router,
    private messageService : MessageService, 
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      name : ['',Validators.required],
      email : ['',[Validators.required, Validators.email]],
      password : ['',Validators.required,]
    });
  }
  get f() { return this.signUpForm.controls; }

  onSignUp() {
    this.submitted = true;
    console.log("--------------->>>>>>>>>>>",this.f.email.value);
    this.user.email = this.f.email.value;
    this.user.password = this.f.password.value;
    this.user.name = this.f.name.value;
    this.returnUrl = '/login';

    this.userService.signup(this.user)
    .pipe(first())
    .subscribe(
      data => {
        console.log("signup test",data)
        // this.openSnackBar(data.message,'done');
        this.alertService.success('Signup successfully', true);
        this.messageService.openSnackBar('Signup successfully',null);
        this.router.navigate([this.returnUrl]);
        
      },
      error => {
        this.messageService.openSnackBar('Oops Somthing went wrong',null);
        
      }
    );
  }
  getErrorMessage() {
    if (this.f.email.hasError('required')) {
      return 'Email Required';
    }
    // if(this.f.name.hasError('required')){return 'User Full Name Required';}
    // if(this.f.password.hasError('required')){return 'Password Required'}
    return this.f.email.hasError('email') ? 'Not a valid email' : '';
  }
  //alert after sign up
  // alert msg
  openSnackBar(message: string,action:string) {
    this.snackBar.open(message,'Done' ,{
      duration: 3000
    });
  }

}
