import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { QuillModule } from 'ngx-quill';
import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';


import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceLoginComponent } from './service-login/service-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './dashboard/navigation/navigation.component';
import { SlidenavComponent } from './dashboard/slidenav/slidenav.component';
import { QuestionComponent } from './question/question.component';
import { AvatarComponent } from './dashboard/avatar/avatar.component';
import { SlidenavListComponent } from './dashboard/slidenav/slidenav-list/slidenav-list.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { SearchComponent } from './dashboard/navigation/search/search.component';
import { PandoraBoxComponent } from './pandora-box/pandora-box.component';
import { ReportingComponent } from './reporting/reporting.component';
import { ProfileComponent } from './profile/profile.component';
import { from } from 'rxjs';
import { BarChartComponent } from './reporting/bar-chart/bar-chart.component';
import { PieChartComponent } from './reporting/pie-chart/pie-chart.component';
import { LineChartComponent } from './reporting/line-chart/line-chart.component';
import { DoughnutChartComponent } from './reporting/doughnut-chart/doughnut-chart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UploadComponent } from './upload/upload.component';
import { RandumComponent } from './randum/randum.component';
import { DocumentComponent } from './document/document.component';
import { QuilleditorComponent } from './quilleditor/quilleditor.component';



const appRoutes:Routes = [
  { path: '' , component : DashboardComponent },
  { path: 'document' , component : DocumentComponent },
  { path: 'quilleditor' , component : QuilleditorComponent },
  { path: 'login' , component : LoginComponent },
  { path: 'signup',component : SignupComponent },
  { path: 'question', component : QuestionComponent },
  { path: 'preloader', component : PreloaderComponent },
  { path: 'reporting', component : ReportingComponent },
 
  { path: 'bar-chart', component : BarChartComponent },

  { path : 'profile',component : ProfileComponent},
  { path : 'randum',component : RandumComponent },


];

@NgModule({
  entryComponents: [UploadComponent],

  declarations: [
    AppComponent,
    ServiceLoginComponent,
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
    RandumComponent,
    DocumentComponent,
    QuilleditorComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    // QuillModule,
   
    
    
    
    AppRoutingModule,
    // QuillModule.forRoot(
      
    // ),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
