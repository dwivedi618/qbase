import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild, Inject, Optional } from '@angular/core';

import { CommonService } from '../services/common.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UploadquestionComponent } from './uploadquestion/uploadquestion.component';
import { SearchComponent } from '../search/search.component';
import { SearchService } from '../services/search.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface Question {
  question: string;
  subject: string;
  unit: string;
  topic: string;
  courseOutcome: string;
  difficultyLevel: string;
  type: string;
  answerType: string;
  action: any;

}


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['select','question', 'subject', 'unit', 'topic', 'courseOutcome', 'difficultyLevel', 'type', 'answerType', 'action'];
  visible = true;
  checked = false;
  selectable = true;
  removable = true;
  addOnBlur = true;
  chipForm: FormGroup;
  chips = new Set();
  selectedQuestion = new Set();
  // columnsToDisplay: string[] = this.displayedColumns.slice();

  isLoading = true;
  selection: any;
  public path: any;
  displayNoRecords: boolean;
  selectedQuestionList = [];
  local_data: any;
  subject_id: any;
  units: any;
  componentRef: any;
  method: any;

  // sorting
  constructor(
    private router: Router,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    private fB: FormBuilder,
    private commonService: CommonService,
    private searchService: SearchService,
    public dialogRef: MatDialogRef<QuestionComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    if(data){
      this.local_data = { ...data.obj };
      if(this.local_data.subject_id){
        this.subject_id = this.local_data.subject_id
      }
      if(this.local_data.units){
        this.units = this.local_data.units
      }
      if(this.local_data.componentRef){
        this.componentRef = this.local_data.componentRef
      }
      if(this.local_data.method){
        this.method = this.local_data.method
      }
    }
   
   
    console.log("local data : ", this.local_data);
    
  }
  ngOnInit() {
    this.dataSource = new MatTableDataSource(); // create new object
    this.getAllQuestions();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.chipForm = this.fB.group({
      chipValue: ['']
    });
    // send path to SearchComponent
    console.log("Inside QuestionComponent::path::", this.route);
    console.log("Inside QuestionComponent::path::", window.location);

    this.path = this.route.url
    // this.searchService.path.emit(this.path);//send path to SearchService
    // gethhing all questio from database
   
  }
getAllQuestions(){
  this.isLoading = true;

  this.commonService.getData('get-question', {})
  .subscribe((result) => {
    const data = result.questions;
    this.dataSource.data = data
    this.selection = new SelectionModel<Question>(true, []);
    console.log("datasource======: ", this.dataSource.data);
    let temp: any[];
    this.isLoading = false;
  }, (error) => {
    console.log("error", error);
  })
}

  get form1() { return this.chipForm.controls; }


  toggleChip = (chip: any) => {
    console.log("selected chip : ", chip);
    const addChip = () => { this.chips.add(chip) };
    const removeChip = () => { this.chips.delete(chip); };

    this.chips.has(chip) ? removeChip() : addChip();
    console.log("this.chips : ", Array.from(this.chips));
  }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
  
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      this.isAllSelected() ?
      this.clearSelectedQuestion() : this.selectAllQuestion()
    }
    selectAllQuestion(){
      this.dataSource.data.forEach(row => this.selection.select(row));
        console.log("Master Selection", this.dataSource.data);
        this.selectedQuestionList = this.dataSource.data;
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
      console.log("value in search:", this.dataSource);
      this.dataSource.filter = value.trim().toLocaleLowerCase();
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
      if (this.dataSource.filteredData.length == 0) {
        console.log("No matching records found")
        this.displayNoRecords = true;
      } else this.displayNoRecords = false;
  
    }
  selectedRow(row) {
    this.selection.toggle(row);
    const addQuestion = () => { this.selectedQuestion.add(row); console.log("add Called") };
    const removeQuestion = () => { this.selectedQuestion.delete(row); console.log("remove Called") };
    this.selectedQuestion.has(row) ? removeQuestion() : addQuestion();
    this.selectedQuestionList = Array.from(this.selectedQuestion)
    console.log("selected Question List: ", this.selectedQuestionList);
    // if( action !='select'){
    //   console.log("action edit ------->",row.id,action)
    //   this.router.navigate(['/edit',row.id])
    // }
  }
  clearSelectedQuestion(){
    this.selectedQuestionList = [];
    this.selectedQuestion.clear();
    this.selection.clear();
    console.log("selected Question List: ", this.selectedQuestionList);
  }
  sendQuestionToSection(section){
  if(section){
    this.dialogRef.close({
      section : section,
      questionList : this.selectedQuestionList
    })
  }
 
  }
  openDialog(action,obj) {
    obj.action = action;
    console.log("action and data--->", action, obj);
    const dialogRef = this.dialog.open(UploadquestionComponent, {
      width: '50rem',
      height : '70vh',
      maxHeight: '100vh',
      maxWidth: '100vw',

      data: { obj }
    });
    dialogRef.afterClosed().subscribe(result => {

      if (result.event == 'Update') {
        // this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });


  }
  
  
  deleteRowData(row_obj) {
    this.dataSource.data = this.dataSource.data.filter((value, key) => {
      // return value.id != row_obj.id;
    });
  }

}
