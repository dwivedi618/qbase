import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule,} from '@angular/router'

import { QuestionComponent } from './question.component';


 const questionRoutes : Routes = [
 { path:'',component:QuestionComponent},
 
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    

    RouterModule.forChild(questionRoutes)
    
  ],
  exports:[
    RouterModule
  ]
})
export class QuestionRoutingModule { }
