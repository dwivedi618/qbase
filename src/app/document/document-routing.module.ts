import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentComponent } from './document.component';
import { TemplategalleryComponent } from './templategallery/templategallery.component';
import { PaperGalleryComponent } from './paper-gallery/paper-gallery.component';

const docRoutes: Routes = [
  { path:'',component:DocumentComponent,
  children:[
    {path:'template-gallery',component:TemplategalleryComponent},
    {path:'paper-gallery',component:PaperGalleryComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(docRoutes)],
  exports: [
    RouterModule,
  ]
})
export class DocumentRoutingModule { }
