import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';

import { MatDialog } from '@angular/material/dialog';
import { FileUploadComponent } from './file-upload/file-upload.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username: any;
  user: any;
  email = "youremail@amzclutter.com";
  first_name: "amz";
  name = "amz Clutter";
  user_type = "user";
  
  profileImageForm: FormGroup;
  imagePreview: string;
  

  constructor(
    private dialog : MatDialog,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.profileImageForm = this.formBuilder.group({
      image : [''],
    })
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    if (this.user) {
      this.email = this.user.email;
      this.name = this.user.name;
      console.log("Welcome:", this.name);
    }
    //profile image from user name
    // if(!this.imagePreview){
    // const intials = this.name.split(' ').map(name => name[0]).join('').toUpperCase();
    // document.getElementById('profile').innerHTML = intials;
    // console.log("profile if image not available:", intials);
    // }


    this.route.params.subscribe((result) => {
      this.username = result.name;
      console.log("username :", this.username)
    })
  }
  changeProfile() {
    console.log("change profile");
    
      const dialogRef = this.dialog.open(FileUploadComponent, {
        width: '100%!important',
        maxWidth: '90vw',
        minWidth: '70vw',
        // height: '70vh',
        // position: {right:'0px'},
        disableClose: true,
        data: {
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.imagePreview = result;
        console.log('Cropped Image', this.imagePreview);
      });
    }
  
  // onImagePicked(event : Event){
  //   const file = (event.target as HTMLInputElement).files[0];
  //   this.getBase64(file);
  //   this.profileImageForm.patchValue({image : file});
  //   this.profileImageForm.get('image').updateValueAndValidity();
  //   const reader = new FileReader();
  //   reader.onload = ()=>{
  //     this.imagePreview = reader.result as string;
  //   }
  //   reader.readAsDataURL(file);
  // }
  // getBase64(file) {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     console.log(reader.result);
  //     this.imagePreview = reader.result as string;
  //   };
  //   reader.onerror = (error) => {
  //     console.log('Error: ', error);
  //   };
  // }
  
}
