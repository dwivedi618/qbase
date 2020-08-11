import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-paper',
  templateUrl: './add-paper.component.html',
  styleUrls: ['./add-paper.component.css']
})
export class AddPaperComponent implements OnInit {
  name : any;
  constructor(
    public dialogRef: MatDialogRef<AddPaperComponent>,
  ) { }

  ngOnInit(): void {
  }
  save(name){
    console.log("document name",name)
    if(this.name){
      this.dialogRef.close({event :"success",data : name})
    }
  }
}
