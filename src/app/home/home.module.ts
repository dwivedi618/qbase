import { MaterialModule } from '../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { Home1Component } from './home1/home1.component';



@NgModule({
  declarations: [ Home1Component],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    EditorModule
  ],
  exports: [
    HomeRoutingModule
  ]
})
export class HomeModule { }
