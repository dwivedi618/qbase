import { Component, OnInit } from '@angular/core';

export interface RenameData {
  templateName: string;
}
export interface Template {
  name:string;
  thumbnail: any;
  string: any;
}
export interface PreviewById {
  id: any;
  name:string;
  thumbnail: any;
  string: any;
}

@Component({
  selector: 'app-templategallery',
  templateUrl: './templategallery.component.html',
  styleUrls: ['./templategallery.component.scss']
})
export class TemplategalleryComponent implements OnInit {
isLoading = true;
  constructor() { }

  ngOnInit() {
  }

}
