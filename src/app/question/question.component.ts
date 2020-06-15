import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

import { CommonService } from '../services/common.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UploadquestionComponent } from '../uploadquestion/uploadquestion.component';
import { SearchComponent } from '../search/search.component';
import { SearchService } from '../services/search.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
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
  visible = true;
  checked = false;
  selectable = true;
  removable = true;
  addOnBlur = true;
  chipForm: FormGroup;
  chips = new Set();
  selectedQuestion = new Set();
  questions: Question[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource = new MatTableDataSource<Question>();
  displayedColumns: string[] = ['select', 'question', 'subject', 'unit', 'topic', 'courseOutcome', 'difficultyLevel', 'type', 'answerType', 'action'];
  // columnsToDisplay: string[] = this.displayedColumns.slice();

  isLoading = true;
  selection: any;

  public path: any;





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
      this.dataSource.data.forEach(row => this.selection.select(row));
    console.log("thsoi iosd dayta gsdkjfgljk", this.dataSource);
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

  // sorting


  constructor(
    private router: Router,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    private fB: FormBuilder,
    private commonService: CommonService,
    private searchService: SearchService,
  ) { }
  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {
    this.dataSource = new MatTableDataSource(); // create new object
    // this.getLaps();
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
    this.commonService.getData('get-question', {})
      .subscribe((result) => {
        this.questions = result.questions;
        this.dataSource = new MatTableDataSource<Question>(this.questions);
        this.selection = new SelectionModel<Question>(true, []);
        console.log("datasource======: ", this.dataSource.data);
        let temp: any[];
        this.isLoading = false;

        console.log("INSIDE question resssuullt", this.questions);

      }, (error) => {
        console.log("INSIDE question eerroor", error);
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
  selectedRow(row) {
    this.selection.toggle(row);
    const addQuestion = () => { this.selectedQuestion.add(row); console.log("add Called") };
    const removeQuestion = () => { this.selectedQuestion.delete(row); console.log("remove Called") };
    this.selectedQuestion.has(row.id) ? removeQuestion() : addQuestion();
    console.log("selected Question : ", Array.from(this.selectedQuestion));
    // if( action !='select'){
    //   console.log("action edit ------->",row.id,action)
    //   this.router.navigate(['/edit',row.id])
    // }

  }
  openDialog(action, data) {
    console.log("action and data--->", action, data);
    const dialogRef = this.dialog.open(UploadquestionComponent, {
      width: '100vw', height: '80vh',
      data: data
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
