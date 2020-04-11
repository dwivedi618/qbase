import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question.component';

import { QuestionRoutingModule } from './question-routing.module';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [QuestionComponent],
  imports: [
    CommonModule,
    MaterialModule,
    QuestionRoutingModule
  ],
  exports:[
    QuestionRoutingModule
  ]
})
export class QuestionModule { }
