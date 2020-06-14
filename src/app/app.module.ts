import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NgModule } from '@angular/core';



//CKEditorModule
// import {CKEditorModule} from 'ckeditor4-angular';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
// import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';



import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NavigationComponent } from './navigation/navigation.component';
import { SlidenavComponent } from './slidenav/slidenav.component';
import { SlidenavListComponent } from './slidenav/slidenav-list/slidenav-list.component';

import { PandoraBoxComponent } from './pandora-box/pandora-box.component';




import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PasswordrecoveryComponent } from './login/passwordrecovery/passwordrecovery.component';


import { UploadquestionComponent } from './uploadquestion/uploadquestion.component';

import { AboutComponent } from './about/about.component';

import { AboutquestionpaperComponent } from './aboutquestionpaper/aboutquestionpaper.component';


import { QuilleditorComponent } from './quilleditor/quilleditor.component';

// services
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { AlertService } from './services/alert.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { PaperInfoDetailedComponent } from './quilleditor/paper-info-detailed/paper-info-detailed.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './services/search.service';
import { CommonService } from './services/common.service';
import { MatTableResponsiveDirective } from './mat-table-responsive/mat-table-responsive.directive';





@NgModule({
  entryComponents: [PaperInfoDetailedComponent],

  declarations: [
    AppComponent,
    // NavigationComponent,
    SlidenavComponent,
    SlidenavListComponent,
    PandoraBoxComponent,
    LoginComponent,
    SignupComponent,
    // UploadquestionComponent,
    QuilleditorComponent,
    AboutComponent,
    AboutquestionpaperComponent,
    PasswordrecoveryComponent,
    PaperInfoDetailedComponent,
   
    MatTableResponsiveDirective,
    
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
    // EditorModule,
   
    
    
    
    AppRoutingModule,
   
    
  ],
  providers: [
    UserService,
    AuthenticationService,
    SearchService,
    CommonService,
    AlertService,
    AuthGuard,
    // { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
