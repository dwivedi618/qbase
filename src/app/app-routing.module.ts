import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DocumentComponent } from './document/document.component';
import { TemplategalleryComponent } from './templategallery/templategallery.component';
import { QuilleditorComponent } from './quilleditor/quilleditor.component';

import { AboutquestionpaperComponent } from './aboutquestionpaper/aboutquestionpaper.component';


import { UploadquestionComponent } from './uploadquestion/uploadquestion.component';
import { SlidenavComponent } from './slidenav/slidenav.component';
import { AuthGuard } from './auth.guard';




const routes: Routes = [
  
  { path: '' ,canActivate: [AuthGuard], component : SlidenavComponent,
  children:[
    { path: 'document' , component : DocumentComponent },
    { path : 'tpg', component :TemplategalleryComponent },
    { path : 'home', loadChildren: './home/home.module#HomeModule'},
   
   
    { path: 'quilleditor/:action' , component : QuilleditorComponent },
    
    { path: 'quilleditor/:id/:action' , component : QuilleditorComponent },

    { path: 'question', loadChildren: './question/question.module#QuestionModule'},
    { path: 'aboutquestionpaper' ,component : AboutquestionpaperComponent},
    
    
    { path : 'profile',loadChildren: './profile/profile.module#ProfileModule'},
    
    { path : 'uploadquestion' , component : UploadquestionComponent},
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
