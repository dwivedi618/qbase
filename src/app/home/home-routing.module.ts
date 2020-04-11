import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home.component';


const routes: Routes = [
  
  { path: '' , component : HomeComponent
 
  },
 

  
  ];
@NgModule({
  declarations: [],
  imports: [ 
    CommonModule,   
    RouterModule,
    RouterModule.forChild(routes),
],

})
export class HomeRoutingModule { }
