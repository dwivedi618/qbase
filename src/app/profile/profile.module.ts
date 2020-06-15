import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { MaterialModule } from '../material.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [ ProfileComponent, FileUploadComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule,]
})
export class ProfileModule { }
