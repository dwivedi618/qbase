import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-quilleditor',
  templateUrl: './quilleditor.component.html',
  styleUrls: ['./quilleditor.component.css']
})
export class QuilleditorComponent implements OnInit {
  
  
  //  editorForm: FormGroup;
  //  editorStyle = {
  //    width : '300px',
  //    height : '300px'
  //  }

  //  config = {
  //    toolbar : [
  //     ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  //     ['blockquote', 'code-block'],
  
  //     [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  //     [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  //     [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  //     [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  //     [{ 'direction': 'rtl' }],                         // text direction
  
  //     [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  //     [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
  //     [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  //     [{ 'font': [] }],
  //     [{ 'align': [] }],
  
  //     ['clean'],                                         // remove formatting button
  
  //     ['link', 'image', 'video']                         // link and image, video
  //    ]
  //  }

  ngOnInit() {
    // this.editorForm = new FormGroup({
    //   'editor' : new FormControl(null)
    // })
    
  }

  
}
