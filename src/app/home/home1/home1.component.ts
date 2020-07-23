import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})
export class Home1Component implements OnInit {
  options: FormGroup;
  primaryLink: string = 'document'
  isOpened  = true;
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }
  ngOnInit(){
    
  }
openSubLinks(subLink){
  this.primaryLink = subLink;
  console.log("primary link",this.primaryLink);
}
toggleIcon(){
  this.isOpened = !this.isOpened;
}

}