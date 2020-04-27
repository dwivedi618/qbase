import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NgModule } from '@angular/core';



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

import { SearchComponent } from './dashboard/navigation/search/search.component';
import { PandoraBoxComponent } from './pandora-box/pandora-box.component';




import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PasswordrecoveryComponent } from './login/passwordrecovery/passwordrecovery.component';


import { UploadComponent } from './upload/upload.component';
import { UploadquestionComponent } from './uploadquestion/uploadquestion.component';

import { AboutComponent } from './about/about.component';

import { AboutquestionpaperComponent } from './aboutquestionpaper/aboutquestionpaper.component';
import { TemplategalleryComponent } from './templategallery/templategallery.component';
import { DocumentComponent, Rename, Delete, Preview } from './document/document.component';
import { QuilleditorComponent } from './quilleditor/quilleditor.component';
import { ResumeComponent } from './resume/resume.component';

// services
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { AlertService } from './services/alert.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { PaperInfoDetailedComponent } from './paper-info-detailed/paper-info-detailed.component';




@NgModule({
  entryComponents: [UploadComponent,Rename,Delete,Preview,PaperInfoDetailedComponent],

  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    SlidenavComponent,
    
    AvatarComponent,
    SlidenavListComponent,
   
    SearchComponent,
    PandoraBoxComponent,

    LoginComponent,
    SignupComponent,
    UploadComponent,
    UploadquestionComponent,
    
    DocumentComponent,
    Rename,
    Delete,
    Preview,
    QuilleditorComponent,
    ResumeComponent,
    AboutComponent,
    AboutquestionpaperComponent,
    TemplategalleryComponent,
    PasswordrecoveryComponent,
    PaperInfoDetailedComponent,
    // HomeComponent,
    
    
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
    AlertService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
