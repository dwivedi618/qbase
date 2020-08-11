import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home1Component } from './home1/home1.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from '../navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { UploadquestionComponent } from '../question/uploadquestion/uploadquestion.component';
import { QuestionComponent } from '../question/question.component';
import { AddPaperComponent } from '../add-paper/add-paper.component';




@NgModule({
  declarations: [
    Home1Component,
    NavigationComponent,
    SearchComponent,
    UploadquestionComponent,
    QuestionComponent,
    AddPaperComponent,
 
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    NavigationComponent,
    SearchComponent
  ],
  entryComponents : [
    AddPaperComponent
  ]
})
export class HomeModule { }
