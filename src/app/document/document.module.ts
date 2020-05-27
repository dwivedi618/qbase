import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplategalleryComponent } from './templategallery/templategallery.component';
import { DocumentComponent, Delete, Rename, Preview } from './document.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocumentRoutingModule } from './document-routing.module';
import { PaperGalleryComponent } from './paper-gallery/paper-gallery.component';

@NgModule({
  declarations: [ 
    DocumentComponent,
    Rename,
    Delete,
    Preview,
    TemplategalleryComponent,
    PaperGalleryComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,gu
    RouterModule,
    FormsModule,ReactiveFormsModule,
    DocumentRoutingModule
  ],
  entryComponents: [Rename,Delete,Preview],

})
export class DocumentModule { }
