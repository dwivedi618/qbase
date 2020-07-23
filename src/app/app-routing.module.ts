import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { QuilleditorComponent } from './quilleditor/quilleditor.component';

import { AboutquestionpaperComponent } from './aboutquestionpaper/aboutquestionpaper.component';


import { UploadquestionComponent } from './question/uploadquestion/uploadquestion.component';
import { SlidenavComponent } from './slidenav/slidenav.component';
import { AuthGuard } from './auth.guard';
import { QuestionComponent } from './question/question.component';





const routes: Routes = [
  
  { path : '', loadChildren: './home/home.module#HomeModule'},
  // { path: 'sidenav' ,canActivate: [AuthGuard], component : SlidenavComponent,
  { path: 'sidenav' , component : SlidenavComponent,

  children:[
    
   
   
  

  
    
    { path : 'edit/:id' , component : UploadquestionComponent},

  ]
  },
  { path: 'about' , component : AboutComponent },
  { path: "login" ,component:LoginComponent},
  { path: "signup" ,component:SignupComponent},
  { path: "**" ,component:LoginComponent},

  
  ];
  
  @NgModule({
  imports: [

  RouterModule.forRoot(routes)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
