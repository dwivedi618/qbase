import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question.component';

import { QuestionRoutingModule } from './question-routing.module';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [QuestionComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    QuestionRoutingModule,
    RouterModule
  ],
  exports:[
    QuestionRoutingModule,
    ReactiveFormsModule
  ]
})
export class QuestionModule { }
