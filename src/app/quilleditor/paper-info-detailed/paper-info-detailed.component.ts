import { Component, OnInit, Input, Optional, Inject, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonService } from '../../services/common.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface QuestionSectionA {
	question: string;
	// subject: string;
	// unit:string;
	// topic: string;
	// courseOutcome:string;
	// difficultyLevel: string;
	// type:string;
	// answerType:string;
	// action:any;
  }
@Component({
  selector: 'app-paper-info-detailed',
  templateUrl: './paper-info-detailed.component.html',
  styleUrls: ['./paper-info-detailed.component.scss']
})
export class PaperInfoDetailedComponent implements OnInit {
	@Input('id') templateId : any;
	
  sectionA : FormGroup;
	sectionB : FormGroup;
	sectionC : FormGroup;
  isLoadingA = false;
  isLoadingB = false;
  isLoadingC = false;
  subjects : any;
  subject_id : number;

  isReplacing = false;
//   subjects = [
// 	{value: 'Operating System',viewSubject: 'Operating System'},
// 	{value: 'Software Engineering',viewSubject : 'Software Engineering'},
// 	{value: 'Data Structure',viewSubject : 'Data Structure'},
// 	{value: 'Object oriented Technique',viewSubject : 'Object oriented Technique'},
// 	{value: 'Microprocessor',viewSubject : 'Microprocessor'},
// 	{value: 'Information Theory of Coding',viewSubject : 'Information Theory of Coding'},
//   ];
  questionInSectionA : QuestionSectionA[] =[
		{ question:"Differentiate PCA, LDA and manifolds dimensional reduction techniques."},
		{ question:"Differentiate deep learning with machine learning by an example."},
		{ question:"Differentiate PCA, LDA and manifolds dimensional reduction techniques."},
		{ question:"Explain why dropout in a neural network act as a regularizer"},

  ];

  questionInSectionB : QuestionSectionA[] =[
	{ question:"Differentiate PCA, LDA and manifolds dimensional reduction techniques."},
	{ question:"Differentiate deep learning with machine learning by an example."},
	{ question:"Differentiate PCA, LDA and manifolds dimensional reduction techniques."},
	{ question:"Explain why dropout in a neural network act as a regularizer"},

];


questionInSectionC : QuestionSectionA[] =[
	{ question:"Differentiate PCA, LDA and manifolds dimensional reduction techniques."},
	{ question:"Differentiate deep learning with machine learning by an example."},
	{ question:"Differentiate PCA, LDA and manifolds dimensional reduction techniques."},
	{ question:"Explain why dropout in a neural network act as a regularizer"},

];
  step = 0;

  fetchingQuestionA = true;
  fetchingQuestionB = true;
  fetchingQuestionC = true;
  
  @Output() refreshPaper = new EventEmitter();
	units: any;
	unit_id: any;
	unitIncludes = [];
//   @Output() minimize = new EventEmitter();

  constructor(
	private fb : FormBuilder,
	private commonServices : CommonService,
	@Optional() @Inject (MAT_DIALOG_DATA) public data :any

  ) { 
	  if(data){
		  this.templateId = data.templateId;
		  console.log("templateId from document : ",this.templateId)
	  }
  }

  ngOnInit() {
    this.sectionA = this.fb.group({
			questionInA : [''],
			subject_id : [this.subject_id]
		});
		this.sectionB = this.fb.group({
			questionInB : [''],
			subject_id : [this.subject_id]
		});
		this.sectionC = this.fb.group({
			
			questionInC : [''],
			subject_id : [this.subject_id]
		});
		console.log("from parent",this.templateId);
		this.getSubjectList();
		// this.getUnitList(1)
  }
  getSubjectList(){
	  this.commonServices.getSubject().subscribe(result => {
		  console.log("result",result)
		  this.subjects = result.data;
	  }),error => {
		  console.log("error",error);
	  }
  }
  onSubjectChange(event) {
    this.subject_id = event;
    console.log("value changes", this.subject_id);
    this.getUnitList(this.subject_id)
  }
  getUnitList(subject_id){
	this.commonServices.getUnit(subject_id).subscribe(result => {
		console.log("result",result)
		this.units = result.data;
	}),error => {
		console.log("error",error);
	}
}
onUnitChange(event) {
    this.unitIncludes  = [...event] 
    console.log("value changes", this.unitIncludes,event);
    
  }

  setStep(index: number) {
	  this.step = index;
	}
  
	nextStep() {
	  this.step++;
	}
  
	prevStep() {
	  this.step--;
	}
  

  get formA() {return this.sectionA.controls}
  get formB() {return this.sectionB.controls}
  get formC() {return this.sectionB.controls}
  
  onSubmitSectionA(){
	  console.log("Section A",this.sectionA.value);
	  this.isLoadingA = true;//set false again when question Loaded
	  this.fetchingQuestionA = false;

	  console.log("this.sectionA.value.questionInA: ",this.sectionA.value);
	  if(this.unitIncludes && this.unitIncludes.length == 1){
		//   this.unitIncludes.split(',')
		}
		console.log("this.unitInclude",this.unitIncludes)
	  this.commonServices.getData("get-section-question",{
		  section: "SECTION-A", 
		  templateId:this.templateId,
		  count: this.sectionA.value.questionInA,
		  subject_id:this.subject_id,
		  units : this.unitIncludes
		})
	  	.subscribe((result)=>{
		this.isLoadingA = false;
		  console.log("result from section",result);
		  this.questionInSectionA = result.queList;
		  console.log("questionInSectionA",this.questionInSectionA);
		  this.refreshPaper.emit('refresh');
		})
		
		
	}
	onSubmitSectionB(){
		console.log("Section B",this.sectionB.value);
 this.isLoadingB = true;//set false again when question Loaded
 this.fetchingQuestionB = false;
 console.log("this.sectionB.value.questionInB: ",this.sectionB.value.questionInB);
	this.commonServices.getData("get-section-question",{
		section: "SECTION-B",
		templateId:this.templateId,
		count: this.sectionB.value.questionInB,
		subject_id:this.subject_id,
		units : this.unit_id

	})
	.subscribe((result)=>{
		this.isLoadingB = false;
		console.log("result from section",result);
		this.questionInSectionB = result.queList;
		this.refreshPaper.emit('refresh');

	})
	
}
onSubmitSectionC(){
 console.log("Section C",this.sectionC.value);
 this.isLoadingC = true;//set false again when question Loaded
 this.fetchingQuestionC = false;
 console.log("this.sectionC.value.questionInC: ",this.sectionC.value.questionInC);
	this.commonServices.getData("get-section-question",{section: "SECTION-C",
	templateId:this.templateId,
	count: this.sectionC.value.questionInC,
	subject_id:this.subject_id,
	units : this.unit_id

})
	.subscribe((result)=>{
		this.isLoadingC = false;
		console.log("result from section",result);
		this.questionInSectionC = result.queList;
		this.refreshPaper.emit('refresh');

	})

 // this.isLoading = false;//set false again when question Loaded inside subscribe result


}
onReplace(id){
	this.isReplacing = !this.isReplacing;
	console.log("id",id);
}
}
