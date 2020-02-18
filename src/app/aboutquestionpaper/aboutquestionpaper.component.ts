import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

import {MatChipInputEvent} from '@angular/material';
import {FormBuilder, FormGroup, FormControl,Validators} from '@angular/forms';

export interface Session {
  name: string;
}

export interface Subject {
  value: string;
  viewSubject : string;
}
export interface Topic {
  topic: string;
  subTopic : string;
}

@Component({
  selector: 'app-aboutquestionpaper',
  templateUrl: './aboutquestionpaper.component.html',
  styleUrls: ['./aboutquestionpaper.component.css']
})
export class AboutquestionpaperComponent implements OnInit {
  selectedSubject : string;
  visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    readonly separatorKeysCodes: number[] = [ENTER, COMMA];
    sessions: Session[] = [
      {name: '2019-20'},
      
    ];
    subjects: Subject[] = [
      {value: 'Operating System',viewSubject: 'Operating System'},
      {value: 'Software Engineering',viewSubject : 'Software Engineering'},
      {value: 'Data Structure',viewSubject : 'Data Structure'},
      {value: 'Object oriented Technique',viewSubject : 'Object oriented Technique'},
      {value: 'Microprocessor',viewSubject : 'Microprocessor'},
      {value: 'Information Theory of Coding',viewSubject : 'Information Theory of Coding'},
    ];
   
    topicsOfUnit1 = ["Introduction", "array","linked lists"];
    topicsOfUnit2 = [ "Stacks", "Queues"];
    topicsOfUnit3 = ["trees", "Binary Trees", "Array and Linked Lists Repressentation Of binary Tree"];
    topicsOfUnit4 = [ "Graph Terminology","Sequencial and linked list representation of graph"];
    topicsOfUnit5 = ["Sequention serach","Binary Search","Hasing:Hash Function"];
    forthcntrl = new FormControl(new Set());

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;





  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.forthFormGroup = this._formBuilder.group({
      forthCtrl: ['', Validators.required]
    });
  }
  
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.sessions.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(session: Session): void {
    const index = this.sessions.indexOf(session);

    if (index >= 0) {
      this.sessions.splice(index, 1);
    }
  }

//sylbus
toggleChip = (chip: any) => {
  const addChip = () => { this.chips.add(chip); };
  const removeChip = () => { this.chips.delete(chip); };

  this.chips.has(chip) ? removeChip() : addChip();
}

get chips() { return this.forthcntrl.value; }

}
