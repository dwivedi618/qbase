import { Component, OnInit } from '@angular/core';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
    InlineEditor
    .create( document.querySelector( '#editor' ) )
    .then( editor => {
        // window.editor = editor;
    } )
    .catch( error => {
        console.error( 'There was a problem initializing the editor.', error );
    } );
  }
}