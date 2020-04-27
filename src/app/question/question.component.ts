import {SelectionModel} from '@angular/cdk/collections';
import {Component,OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { CommonService } from '../services/common.service';
import { FormGroup, FormBuilder } from '@angular/forms';

export interface Question {
  question: string;
  subject: string;
  unit:string;
  topic: string;
  courseOutcome:string;
  difficultyLevel: string;
  type:string;
  answerType:string;
  action:any;

}


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  visible = true;
  checked = false;
    selectable = true;
    removable = true;
    addOnBlur = true;
  chipForm:FormGroup;
  chips = new Set();
  selectedQuestion = new Set();
  questions: Question[];
  displayedColumns: string[] = ['select','question','subject','unit','topic','courseOutcome','difficultyLevel','type', 'answerType','action'];
  // columnsToDisplay: string[] = this.displayedColumns.slice();
 
  isLoading=  true;
  selection: any;
  dataSource: any;

  


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row) );
        console.log("thsoi iosd dayta gsdkjfgljk",this.dataSource);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Question): string {

    if (!row) {
      
      return ` ${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    

    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.question + 1} `;
  }

  // filtering

  
  public doFilter = (value: string) => {
      this.dataSource.filter = value.trim().toLocaleLowerCase();
    }

    // sorting
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    
  constructor(
    private fB: FormBuilder,
    private commonService: CommonService
  ) {}
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {
    this.chipForm = this.fB.group({
      chipValue : ['']
    });
    this.commonService.getData('get-question',{})
    .subscribe((result) => {
      this.questions = result.questions;
      this.dataSource = new MatTableDataSource<Question>(this.questions);
      this.selection = new SelectionModel<Question>(true, []);
      console.log("datasource======: ",this.dataSource);
      let temp : any[];
      this.isLoading= false;
     
      console.log("INSIDE question resssuullt",this.questions);

    },(error) => {
      console.log("INSIDE question eerroor",error);
    })
  }


get form1() { return this.chipForm.controls; }


toggleChip = (chip:any) => {
  console.log("selected chip : ",chip);
  const addChip = () => { this.chips.add(chip)};
  const removeChip = () => { this.chips.delete(chip); };
  
  this.chips.has(chip) ? removeChip() : addChip();
  console.log("this.chips : " ,Array.from(this.chips));
} 
selectedRow(row){
  this.selection.toggle(row);
  
  const addQuestion = () => { this.selectedQuestion.add(row); console.log("add Called")};
  const removeQuestion = () => { this.selectedQuestion.delete(row); console.log("remove Called") };
  
  this.selectedQuestion.has(row.id) ? removeQuestion() : addQuestion();
  console.log("selected Question : " ,Array.from(this.selectedQuestion));
  
}

}
