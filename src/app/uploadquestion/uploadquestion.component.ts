import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { MessageService } from '../services/message.service';

export interface Type {
  value: string;
  viewValue : string;
}
export interface Subject {
  value: string;
  viewSubject : string;
}
export interface CourseOutcome {
  value: string;
  viewValue : string;
}
export interface DifficultyLevel {
  value: string;
  viewValue : string;
}
export interface AnswerType {
  value: string;
  viewValue : string;
}

@Component({
  selector: 'app-uploadquestion',
  templateUrl: './uploadquestion.component.html',
  styleUrls: ['./uploadquestion.component.scss']
})
export class UploadquestionComponent implements OnInit {
  questionUploadForm: FormGroup;
  isUploading = false;

  types: Type[] = [
    {value: 'Subjective',viewValue: 'Subjective'},  
  ];

  subjects: Subject[] = [
    {value: 'DBMS',viewSubject: 'DBMS'},
    {value: 'Software Engineering',viewSubject : 'Software Engineering'},
    {value: 'Data Structure',viewSubject : 'Data Structure'},
    {value: 'Object oriented Technique',viewSubject : 'Object oriented Technique'},
    {value: 'Microprocessor',viewSubject : 'Microprocessor'},
    {value: 'Information Theory of Coding',viewSubject : 'Information Theory of Coding'},
  ];

  courseOutcomes: CourseOutcome[] = [
    {value: 'CO1',viewValue: 'CO1'}, 
    {value: 'CO2',viewValue: 'CO2'},
    {value: 'CO3',viewValue: 'CO3'},
    {value: 'CO4',viewValue: 'CO4'},
    {value: 'CO5',viewValue: 'CO5'}, 
  ];
  difficultyLevels: DifficultyLevel[] = [
    {value: 'Knowledge',viewValue: 'Knowledge'}, 
    {value: 'Comprehensive',viewValue: 'Comprehensive'},
    {value: 'Application',viewValue: 'Application'},
    {value: 'Analysis',viewValue: 'Analysis'},
    {value: 'Synthesis',viewValue: 'Synthesis'}, 
    {value: 'Evaluation',viewValue: 'Evaluation'}, 
  ];

  answerTypes: AnswerType[] = [
    {value: 'Short',viewValue: 'Short'}, 
    {value: 'Medium',viewValue: 'Medium'},
    {value: 'Long',viewValue: 'Long'},
     
  ];


  
  

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.questionUploadForm = this.formBuilder.group({
      subject: ['',Validators.required],
      unit:[''],
      courseOutcome:['',Validators.required],
      topic:[''],
      answerType:['Medium',Validators.required],
      type:['subjective',Validators.required],
      difficultyLevel:['Analysis',Validators.required],
      question:['',Validators.required]

  });

}
get form() { return this.questionUploadForm.controls; }
onQuestionUpload(){
  if(this.questionUploadForm.invalid){
    this.messageService.openSnackBar("Some Fields Are Required",null)
     return
  }
  
  console.log("Before submitstudent",this.questionUploadForm.value);
  this.commonService.postData("upload-question",this.questionUploadForm.value)
    .subscribe((result) => {
      console.log("result",result);
      this.isUploading = false;
      this.messageService.openSnackBar("Question Added SuccessFully",null);

    },(error) => {
      this.isUploading = false;
      console.log("error",error);
      
    });
}
upload(){
  if(this.questionUploadForm.invalid){
    this.isUploading = false;
    
    return
  }
  this.isUploading = true;
}
}