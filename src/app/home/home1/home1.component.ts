import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})
export class Home1Component implements OnInit {
  options: FormGroup;
  primaryLink: string = 'document'
  isOpened  = true;
  constructor(
    fb: FormBuilder,
    private router : Router) 
    {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }
  ngOnInit(){
    this.router.navigate(['./document']);
  }
openSubLinks(subLink){
  this.primaryLink = subLink;
  console.log("primary link",this.primaryLink);
  if( this.primaryLink == 'document'){
    this.router.navigate(['./document']);
  }
  if( this.primaryLink == 'add'){
    this.router.navigate(['./question']);
  }
  // this.router.navigate([this.primaryLink])
}
toggleIcon(){
  this.isOpened = !this.isOpened;
}

}