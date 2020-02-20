import { Component, OnInit } from '@angular/core';

export interface Subject {
  value: string;
  viewSubject : string;
}

@Component({
  selector: 'app-uploadquestion',
  templateUrl: './uploadquestion.component.html',
  styleUrls: ['./uploadquestion.component.css']
})
export class UploadquestionComponent implements OnInit {

  subjects: Subject[] = [
    {value: 'Operating System',viewSubject: 'Operating System'},
    {value: 'Software Engineering',viewSubject : 'Software Engineering'},
    {value: 'Data Structure',viewSubject : 'Data Structure'},
    {value: 'Object oriented Technique',viewSubject : 'Object oriented Technique'},
    {value: 'Microprocessor',viewSubject : 'Microprocessor'},
    {value: 'Information Theory of Coding',viewSubject : 'Information Theory of Coding'},
  ];

  Units= ["Unit 1", "Unit 2","Unit 3","Unit 4","Unit 5"];

  constructor() { }

  ngOnInit() {
  }

}
