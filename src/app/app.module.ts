import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';


//CKEditorModule
// import {CKEditorModule} from 'ckeditor4-angular';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';



import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './dashboard/navigation/navigation.component';
import { SlidenavComponent } from './dashboard/slidenav/slidenav.component';
import { AvatarComponent } from './dashboard/avatar/avatar.component';
import { SlidenavListComponent } from './dashboard/slidenav/slidenav-list/slidenav-list.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { SearchComponent } from './dashboard/navigation/search/search.component';
import { PandoraBoxComponent } from './pandora-box/pandora-box.component';
import { ReportingComponent } from './reporting/reporting.component';

import { BarChartComponent } from './reporting/bar-chart/bar-chart.component';
import { PieChartComponent } from './reporting/pie-chart/pie-chart.component';
import { LineChartComponent } from './reporting/line-chart/line-chart.component';
import { DoughnutChartComponent } from './reporting/doughnut-chart/doughnut-chart.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PasswordrecoveryComponent } from './login/passwordrecovery/passwordrecovery.component';

import { ProfileComponent } from './profile/profile.component';
import { UploadComponent } from './upload/upload.component';
import { UploadquestionComponent } from './uploadquestion/uploadquestion.component';

import { AboutComponent } from './about/about.component';
import { QuestionComponent } from './question/question.component';
import { AboutquestionpaperComponent } from './aboutquestionpaper/aboutquestionpaper.component';
import { TemplategalleryComponent } from './templategallery/templategallery.component';
import { DocumentComponent } from './document/document.component';
import { QuilleditorComponent } from './quilleditor/quilleditor.component';
import { ResumeComponent } from './resume/resume.component';

// services
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { AlertService } from './services/alert.service';
import { HttpClientModule } from '@angular/common/http';



const appRoutes:Routes = [
  { path: '' , component : DashboardComponent },
  { path: 'about' , component : AboutComponent },

  { path: 'document' , component : DocumentComponent },
  { path : 'tpg', component :TemplategalleryComponent },
  { path: 'quilleditor' , component : QuilleditorComponent },
  { path: 'login' , component : LoginComponent },
  { path: 'signup',component : SignupComponent },
  { path: 'question', component : QuestionComponent },
  { path: 'aboutquestionpaper' ,component : AboutquestionpaperComponent},
  { path: 'preloader', component : PreloaderComponent },
  { path: 'reporting', component : ReportingComponent },
 
  { path: 'bar-chart', component : BarChartComponent },

  { path : 'profile',component : ProfileComponent},
  
  { path : 'resume' , component : ResumeComponent },
  { path : 'uploadquestion' , component : UploadquestionComponent},


];

@NgModule({
  entryComponents: [UploadComponent],

  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    SlidenavComponent,
    QuestionComponent,
    AvatarComponent,
    SlidenavListComponent,
    PreloaderComponent,
    SearchComponent,
    PandoraBoxComponent,
    ReportingComponent,
    ProfileComponent,
    BarChartComponent,
    PieChartComponent,
    LineChartComponent,
    DoughnutChartComponent,
    LoginComponent,
    SignupComponent,
    UploadComponent,
    UploadquestionComponent,
    
    DocumentComponent,
    QuilleditorComponent,
    ResumeComponent,
    AboutComponent,
    AboutquestionpaperComponent,
    TemplategalleryComponent,
    PasswordrecoveryComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    CKEditorModule,
   
    
    
    
    AppRoutingModule,
   
    
  ],
  providers: [
    UserService,
    AuthenticationService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
