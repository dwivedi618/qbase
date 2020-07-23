import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { Home1Component } from './home1/home1.component';
import { UploadquestionComponent } from '../question/uploadquestion/uploadquestion.component';
import { QuestionComponent } from '../question/question.component';
import { AboutquestionpaperComponent } from '../aboutquestionpaper/aboutquestionpaper.component';
import { QuilleditorComponent } from '../quilleditor/quilleditor.component';


const homeRoutes: Routes = [
  
  { path: '' , component : Home1Component,
  children : [
    
      { path : 'uploadquestion' , component : UploadquestionComponent},
      { path: 'question', component:QuestionComponent},
      { path: 'aboutquestionpaper' ,component : AboutquestionpaperComponent},

      { path: 'profile', loadChildren : '../profile/profile.module#ProfileModule'},
      { path: 'document' , loadChildren : '../document/document.module#DocumentModule' },
      { path: 'quilleditor/:action' , component : QuilleditorComponent },
      { path: 'quilleditor/:id/:action' , component : QuilleditorComponent },


    
  ]
  
 
  },

 

  
  ];
@NgModule({
  declarations: [],
  imports: [ 
    CommonModule,   
    RouterModule,
    RouterModule.forChild(homeRoutes),
],

})
export class HomeRoutingModule { }
