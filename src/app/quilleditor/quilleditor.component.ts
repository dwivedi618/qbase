import { OnInit } from '@angular/core';
import * as $ from "jquery";
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
import { CommonService } from '../services/common.service';
import { MessageService } from '../services/message.service';

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
		
		editorData: `<p style="text-align:center;">
		<strong>INDERPRASTHA ENGINEERING COLLEGE,GHAZIABAD</strong>
		</p>
		<p style="text-align:center;">
		<span style="background-color:transparent;color:#00000a;">
		<strong>Dept. of Information Technology</strong>
		</span>
		</p>
		<p style="text-align:center;">
		<span style="background-color:transparent;color:#00000a;">
		<strong>Second Sessional Examination (Even Semester 2019-20)</strong>
		</span></p><p style="text-align:center;">
		<span style="background-color:transparent;color:#000000;">
		<strong>Deep Learning (RCS086)</strong></span></p><p>
		<span style="background-color:transparent;color:#00000a;">Max. Marks: 45 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
		 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
		  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
		   Times: 60 Minutes</span></p>
		<p style="text-align:center;"><span style="background-color:transparent;color:#00000a;"><strong>
		<u>SECTION- A</u>
		</strong></span></p><p>
		<span style="background-color:transparent;color:#00000a;"
		><strong>Q1. Attempt all parts. Write answer of each part in short. (10*2.5=25)</strong>
		&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
		<ol>
		<li>
		<span style="background-color:transparent;color:#00000a;">
		Differentiate shallow and deep neural networks.</span>
		</li>
		<li>
		<span style="background-color:transparent;color:#00000a;">
		Differentiate deep learning with machine learning by an example.</span>
		</li>
		<li>
		<span style="background-color:transparent;color:#00000a;">
		Differentiate PCA, LDA and manifolds dimensional reduction techniques.</span>
		</li>
		<li>
		<span style="background-color:transparent;color:#00000a;">
		Explain why dropout in a neural network act as a regularizer.</span>
		</li>
		<li><span style="background-color:transparent;color:#00000a;">
		Define VC Dimension with an example.</span>
		</li>
		<li>
		<span style="background-color:transparent;color:#00000a;">
		Explain Semi Supervised Learning.</span>
		</li>
		<li>
		<span style="background-color:transparent;color:#00000a;">
		Define Batch Normalization and hyper parameter optimization.</span>
		</li>
		<li>
		<span style="background-color:transparent;color:#00000a;">
		Compare VGG and Inception Pre trained Networks.</span>
		</li>
		<li>
		<span style="background-color:transparent;color:#00000a;">
		Define Auto Encoder with an example.</span>
		</li>
		<li><span style="background-color:transparent;color:#00000a;">
		Explain Generative Adversarial Networks(GAN).</span>
		</li>
		
		</ol>
		<p><span style="background-color:transparent;color:#00000a;">
		OR</span></p>
		<ol>
		<li>
		<span style="background-color:transparent;color:#00000a;">
		Explain Supervised Learning with example.</span></li></ol><p style="text-align:center;"><span style="background-color:transparent;color:#00000a;"><strong><u>SECTION- B</u></strong></span></p><p><span style="background-color:transparent;color:#00000a;"><strong>Q1. Attempt all parts. Write answer of each part in short. (10*2=20)</strong> &nbsp;&nbsp;&nbsp;&nbsp;</span></p><ol><li><span style="background-color:transparent;color:#00000a;">Differentiate deep learning with machine learning by an example.</span></li><li><span style="background-color:transparent;color:#00000a;">Differentiate PCA, LDA and manifolds dimensional reduction techniques.</span></li><li><span style="background-color:transparent;color:#00000a;">Explain why dropout in a neural network act as a regularizer.</span></li><li><span style="background-color:transparent;color:#00000a;">Define VC Dimension with an example.</span></li><li><span style="background-color:transparent;color:#00000a;">Explain Semi Supervised Learning.&nbsp;</span></li></ol><p style="margin-left:3pt;">&nbsp;</p><p>&nbsp;</p>
		</span></li></ol><p style="text-align:center;"><span style="background-color:transparent;color:#00000a;"><strong><u>SECTION- C</u></strong></span></p><p><span style="background-color:transparent;color:#00000a;"><strong>Q3. Attempt any Three parts. Write answer of each part in ling. (10*2=20)</strong> &nbsp;&nbsp;&nbsp;&nbsp;</span></p><ol><li><span style="background-color:transparent;color:#00000a;">Differentiate deep learning with machine learning by an example.</span></li><li><span style="background-color:transparent;color:#00000a;">Differentiate PCA, LDA and manifolds dimensional reduction techniques.</span></li><li><span style="background-color:transparent;color:#00000a;">Explain why dropout in a neural network act as a regularizer.</span></li><li><span style="background-color:transparent;color:#00000a;">Define VC Dimension with an example.</span></li><li><span style="background-color:transparent;color:#00000a;">Explain Semi Supervised Learning.&nbsp;</span></li></ol><p>&nbsp;</p>`
    };

	// public onChange( { editor }: ChangeEvent ) {
    //      this.data = editor.getData();
	// 	console.log( this.data );
		
    // }
	exportAsPDF()
      {
		  
		console.log("fromdf", this.data );
		let pdata = document.getElementById('editorData') ;  
		console.log("editor data from pdf :",pdata.innerHTML);
		let pdf = new jspdf('p', 'cm', 'a4');
		pdf.save('Filename.pdf');   
		
        
      }

	public isPreviewActive: boolean;

	public previewModel: string;


	onTemplateSubmit() {

		// alert(`Form submit, model: ${JSON.stringify(this.model.editorData)}`);
		html2canvas(document.querySelector(".ck-content"),{backgroundColor: '#FFFFFF'}).then(canvas => {
			
			this.demoForm.value.thumbnail = canvas.toDataURL();
			console.log("---canvas-------->>>>>>>>>>>>",this.demoForm.value.thumbnail);
			// document.body.appendChild(canvas)
			console.log("before template upload",this.demoForm.value);
			this.commonService.postData("upload-template",this.demoForm.value)
		.subscribe((result) => {
		  console.log("result",result);
		  //html2canvas();
		  this.messageService.openSnackBar("Template  Added SuccessFully",null)
		},(error) => {
		  console.log("error",error);
		});
      
    });
	}


	get form() {return this.demoForm!.controls.editorData}

	ngAfterViewInit() {
		var doc = new jspdf();
		  $('#cmd').click(function(){
			var html=$(".ck-content").html();
			console.log("html-----------------",html)
			   doc.fromHTML(html,15,15, {
				  'width': 170,
				//   'elementHandlers': specialElementHandlers
			   });
			doc.save("Test.pdf");
		  });
	}

	constructor(
		private commonService : CommonService,
		private messageService : MessageService
	){}
	ngOnInit() {

		

	}



}
