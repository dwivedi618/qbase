import {SelectionModel} from '@angular/cdk/collections';
import {Component,OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { CommonService } from '../services/common.service';

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

  questions: Question[];
  displayedColumns: string[] = ['select','question','subject','unit','topic','courseOutcome','difficultyLevel','type', 'answerType','action'];
  // columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource = new MatTableDataSource<Question>(this.questions);
  selection = new SelectionModel<Question>(true, []);
  isLoading=  true;

  


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
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Question): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.question + 1}`;
  }

  // filtering

  
  public doFilter = (value: string) => {
      this.dataSource.filter = value.trim().toLocaleLowerCase();
    }

    // sorting
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    
  constructor(
    private commonService: CommonService
  ) {}
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {
    this.commonService.getData('get-question',{})
    .subscribe((result) => {
      this.questions = result.questions;
      let temp : any[];
      this.isLoading= false;
     
      console.log("INSIDE question resssuullt",this.questions);

    },(error) => {
      console.log("INSIDE question eerroor",error);
    })
  }

  
}
