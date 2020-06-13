import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home.component';
import { Home1Component } from './home1/home1.component';


const homeRoutes: Routes = [
  
  { path: '' , component : Home1Component
 
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
