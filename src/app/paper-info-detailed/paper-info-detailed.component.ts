import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  styleUrls: ['./paper-info-detailed.component.css']
})
export class PaperInfoDetailedComponent implements OnInit {
  sectionA : FormGroup;
	sectionB : FormGroup;
	sectionC : FormGroup;
  isLoading = false;
  isReplacing = false;
  questionInSectionA : QuestionSectionA[] =[
		{ question:"Differentiate PCA, LDA and manifolds dimensional reduction techniques."},
		{ question:"what is data"},
		{ question:"what is information"},
		{ question:"what is linkedList"},

  ];
  step = 0;
  isQuestionLoading = true;
  setStep(index: number) {
	  this.step = index;
	}
  
	nextStep() {
	  this.step++;
	}
  
	prevStep() {
	  this.step--;
	}
  
  constructor(
    private fb : FormBuilder,

  ) { }

  ngOnInit() {
    this.sectionA = this.fb.group({
			generalInstructionA : [''],
			questionInA : [''],
		});
		this.sectionB = this.fb.group({
			generalInstructionB : [''],
			questionInB : [''],
		});
		this.sectionC = this.fb.group({
			generalInstructionC : [''],
			questionInC : [''],
		});
  }
  get formA() {return this.sectionA.controls}
  get formB() {return this.sectionB.controls}
  get formC() {return this.sectionB.controls}

  onSubmitSectionA(){
    console.log("Section A",this.sectionA.value);
}
onSubmitSectionB(){
 console.log("Section B",this.sectionB.value);
}
onSubmitSectionC(){
 console.log("Section C",this.sectionC.value);
 this.isLoading = true;//set false again when question Loaded
 this.isQuestionLoading = false
 // this.isLoading = false;//set false again when question Loaded inside subscribe result


}
onReplace(id){
	this.isReplacing = !this.isReplacing;
	console.log("id",id);
}
}
