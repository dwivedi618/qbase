import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { Home1Component } from './home1/home1.component';
import { UploadquestionComponent } from '../uploadquestion/uploadquestion.component';


const homeRoutes: Routes = [
  
  { path: '' , component : Home1Component,
  children : [
    
      { path : 'uploadquestion' , component : UploadquestionComponent},

    
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
