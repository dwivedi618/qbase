import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { Routes, RouterModule } from '@angular/router';
const editorRoutes : Routes = [
  { path:'',component:EditorComponent}
 ]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(editorRoutes)
  ]
})
export class EditorRoutingModule { }
