import { OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import {
	Component,
	ViewChild,
	AfterViewInit,
	ElementRef
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { FormGroup, FormControl } from '@angular/forms';

// import { editorConfig } from '../../../src/';

@Component({
	selector: 'app-quilleditor',
	templateUrl: './quilleditor.component.html',
	styleUrls: ['./quilleditor.component.css']
})
export class QuilleditorComponent implements AfterViewInit {
	 data : string;
	// public config: ;
	@ViewChild('demoForm') demoForm?: NgForm;
	@ViewChild('editor') editor;

	// public Editor = ClassicEditor;
	public Editor = DecoupledEditor;

    public onReady( editor ) {
        editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
        );
    }
	public model = {
        editorData: '<p style="text-align:center;"><strong>INDERPRASTHA ENGINEERING COLLEGE,GHAZIABAD</strong></p><p style="text-align:center;"><span style="background-color:transparent;color:#00000a;"><strong>Dept. of Information Technology</strong></span></p><p style="text-align:center;"><span style="background-color:transparent;color:#00000a;"><strong>Second Sessional Examination (Even Semester 2019-20)</strong></span></p><p style="text-align:center;"><span style="background-color:transparent;color:#000000;"><strong>Deep Learning (RCS086)</strong></span></p><p><span style="background-color:transparent;color:#00000a;">Max. Marks: 45 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Times: 60 Minutes</span></p><p style="text-align:center;"><span style="background-color:transparent;color:#00000a;"><strong><u>SECTION- A</u></strong></span></p><p><span style="background-color:transparent;color:#00000a;"><strong>Q1. Attempt all parts. Write answer of each part in short. (10*2.5=25)</strong>&nbsp;&nbsp;&nbsp;&nbsp;</span></p><ol><li><span style="background-color:transparent;color:#00000a;">Differentiate shallow and deep neural networks.</span></li><li><span style="background-color:transparent;color:#00000a;">Differentiate deep learning with machine learning by an example.</span></li><li><span style="background-color:transparent;color:#00000a;">Differentiate PCA, LDA and manifolds dimensional reduction techniques.</span></li><li><span style="background-color:transparent;color:#00000a;">Explain why dropout in a neural network act as a regularizer.</span></li><li><span style="background-color:transparent;color:#00000a;">Define VC Dimension with an example.</span></li><li><span style="background-color:transparent;color:#00000a;">Explain Semi Supervised Learning.</span></li><li><span style="background-color:transparent;color:#00000a;">Define Batch Normalization and hyper parameter optimization.</span></li><li><span style="background-color:transparent;color:#00000a;">Compare VGG and Inception Pre trained Networks.</span></li><li><span style="background-color:transparent;color:#00000a;">Define Auto Encoder with an example.</span></li><li><span style="background-color:transparent;color:#00000a;">Explain Generative Adversarial Networks(GAN).</span></li></ol><p><span style="background-color:transparent;color:#00000a;">OR</span></p><ol><li><span style="background-color:transparent;color:#00000a;">Explain Supervised Learning with example.</span></li></ol><p style="text-align:center;"><span style="background-color:transparent;color:#00000a;"><strong><u>SECTION- B</u></strong></span></p><p><span style="background-color:transparent;color:#00000a;"><strong>Q1. Attempt all parts. Write answer of each part in short. (10*2=20)</strong>&nbsp;&nbsp;&nbsp;</span></p><ol><li><span style="background-color:transparent;color:#00000a;">A common method to accelerate the training of Generative Adversarial Networks (GANs) is to update the Generator k (≥ 1) times for every 1 time you update the Discriminator.</span></li><li><span style="background-color:transparent;color:#00000a;">True ii. False &nbsp; &nbsp; &nbsp; iii. It depends on the architecture of the GAN.</span></li><li><span style="background-color:transparent;color:#00000a;">The input image has been converted into a matrix of size 256 X 256 and a kernel/filter of size 3x3 with a stride of 1 and no padding. What will be the size of the convoluted matrix?</span></li></ol><p style="margin-left:3pt;">&nbsp;</p><p>&nbsp;</p>'
    };

	public onChange( { editor }: ChangeEvent ) {
         this.data = editor.getData();
		console.log( this.data );
		
    }
	exportAsPDF(data)
      {
		console.log( this.data );
        let pdata = document.getElementById('MyDIv');  
        html2canvas().then(canvas => {
          const contentDataURL = canvas.toDataURL('image/png')  
          let pdf = new jspdf('l', 'cm', 'a4'); //Generates PDF in landscape mode
          // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
          pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);  
          pdf.save('Filename.pdf');   
        }); 
      }

	public isPreviewActive: boolean;

	public previewModel: string;


	onSubmit() {
		alert(`Form submit, model: ${JSON.stringify(this.model)}`);
	}

	reset() {
		this.demoForm!.reset();
	}

	get editorData() {
		return this.demoForm!.controls.editorData;
	}

	// ngAfterViewInit() {
	// 	var el;
	// 	this.editor.dataChange.subscribe((value) => {
	// 		// this.editorConfig(this.config);
	// 		if (!this.isPreviewActive) {

	// 			this.previewModel = value;
	// 			// el = document.getElementById('styling')
	// 			el = document.createElement('html');

	// 			el.innerHtml = this.previewModel;
	// 			console.log("el",el);
	// 			console.log("after el",el);

				
	// 		}
	// 	});
	// }

	
	ngOnInit() {



	}



}
