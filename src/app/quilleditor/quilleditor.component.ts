import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-quilleditor',
  templateUrl: './quilleditor.component.html',
  styleUrls: ['./quilleditor.component.css']
})
export class QuilleditorComponent implements OnInit {
  
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: 'auto',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: 'auto',
      
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    sanitize: true,
    toolbarPosition: 'top',
    // toolbarHiddenButtons: [
    //   ['bold', 'italic'],
    //   ['fontSize']
    // ]
};
  //  editorForm: FormGroup;
   editorStyle = {
     width : '300px',
     height : '300px'
   }


  ngOnInit() {
    // this.editorForm = new FormGroup({
    //   'editor' : new FormControl(null)
    // })

 
    
  }

  
}
