import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  

  constructor(
    public dialogRef: MatDialogRef<FileUploadComponent>,
  ) { }

  ngOnInit(): void {
  }
imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }
  imageLoaded() {
      // show cropper
      console.log("// show cropper");
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  setProfile(){
    console.log("setprofile");
    this.dialogRef.close( this.croppedImage );
  }
}
