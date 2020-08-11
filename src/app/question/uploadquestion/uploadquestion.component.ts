import { Component, OnInit, Optional, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { MessageService } from '../../services/message.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  local_data: any;
  subject_id: any;
  unitIncludes: any;
  units: any;
  subjects : any

  
  

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private commonServices: CommonService,
    private messageService: MessageService,
    @Optional() @Inject (MAT_DIALOG_DATA) public data:any
  ) { 
    if(data && data.obj.id){
      this.local_data = data.obj
    }else { this.local_data = [null]}
  }

  ngOnInit() {
    this.questionUploadForm = this.formBuilder.group({
      subject_id: [this.local_data.subject_id,Validators.required],
      unit_id:[this.local_data.unit_id],
      courseOutcome:[this.local_data.courseOutcome,Validators.required],
      topic_id:[this.local_data.topic_id],
      answerType:[this.local_data.answerType,Validators.required],
      type:[this.local_data.type,Validators.required],
      difficultyLevel:[this.local_data.difficultyLevel,Validators.required],
      question:[this.local_data.question,Validators.required]
    });
    this.getSubjectList();

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

get form() { return this.questionUploadForm.controls; }
onQuestionUpload(){
  if(this.questionUploadForm.invalid){
    this.messageService.openSnackBar("Some Fields Are Required",null)
     return
  }
  
  console.log("Before submitstudent",this.questionUploadForm.value);
  this.commonServices.postData("upload-question",this.questionUploadForm.value)
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