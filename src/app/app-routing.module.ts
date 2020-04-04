import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DocumentComponent } from './document/document.component';
import { TemplategalleryComponent } from './templategallery/templategallery.component';
import { QuilleditorComponent } from './quilleditor/quilleditor.component';
import { QuestionComponent } from './question/question.component';
import { AboutquestionpaperComponent } from './aboutquestionpaper/aboutquestionpaper.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { ReportingComponent } from './reporting/reporting.component';
import { BarChartComponent } from './reporting/bar-chart/bar-chart.component';
import { ProfileComponent } from './profile/profile.component';
import { ResumeComponent } from './resume/resume.component';
import { UploadquestionComponent } from './uploadquestion/uploadquestion.component';
import { SlidenavComponent } from './dashboard/slidenav/slidenav.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  
  { path: '' , component : SlidenavComponent,
  children:[
    { path: 'document' ,canActivate: [AuthGuard], component : DocumentComponent },
    { path : 'tpg', component :TemplategalleryComponent },
    { path: 'quilleditor' , component : QuilleditorComponent },
    { path: 'question', component : QuestionComponent },
    { path: 'aboutquestionpaper' ,component : AboutquestionpaperComponent},
    { path: 'preloader', component : PreloaderComponent },
    { path: 'reporting', component : ReportingComponent },
    { path : 'profile',component : ProfileComponent},
    { path : 'resume' , component : ResumeComponent },
    { path : 'uploadquestion' , component : UploadquestionComponent},
  ]
  },
  { path: 'about' , component : AboutComponent },
  { path: "login" ,component:LoginComponent},
  { path: "signup" ,component:SignupComponent},
  { path: "**" ,component:LoginComponent},

  
  ];
  
  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
