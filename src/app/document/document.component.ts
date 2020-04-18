import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DomSanitizer,SafeHtml} from '@angular/platform-browser'
import { DialogService } from '../services/dialog.service';
import { CommonService } from '../services/common.service';
import { getTreeNoValidDataSourceError } from '@angular/cdk/tree';
// import { get } from 'http';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { template } from '@angular/core/src/render3';
import { AboutquestionpaperComponent } from '../aboutquestionpaper/aboutquestionpaper.component';
import { PaperInfoDetailedComponent } from '../paper-info-detailed/paper-info-detailed.component';

export interface RenameData {
  templateName: string;
}

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  [x: string]: any;
  templates: any;
  templateName : string;
  constructor(
    private router : Router,
    public dialog: MatDialog,
    private dialogService : DialogService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.commonService.getData('get-template',{})
    .subscribe((result) => {
      console.log("templates",result.templates[1]);
      this.templates = result.templates;
      html2canvas(this.templates[1].string).then((canvas) => {});
    },(error) => {
      console.log(error);
    });
  }
  onTemplateSelect(templateId){
    // this.dialogService.openDialog(AboutquestionpaperComponent);
    this.dialogService.openDialog(PaperInfoDetailedComponent);

    this.router.navigate(['/quilleditor',templateId])
    
  }
  onEditSelect(templateId,action){
    this.router.navigate(['/quilleditor',templateId,action])
  }
  onRenameSelect(templateId){
    
      const dialogRef = this.dialog.open(Rename, {
        width: '350px',
        data: {name:this.templateName}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        this.templateName = result;
        console.log('The dialog was closed-----> New name',this.templateName,templateId);
      });
    }
    onDeleteSelect(templateId){
    
      const dialogRef = this.dialog.open(Delete, {
        width: '350px',
        
      });
      // dialogRef.afterClosed().subscribe(result => {
      //   this.templateId = result;
      //   console.log('The dialog was closed----->Delete:',templateId);
      // });
    }
  }
 

  



@Component({
  selector: 'rename',
  templateUrl: 'rename.html',
})
export class Rename {

  constructor(
    
    public dialogRef: MatDialogRef<Rename>,
    @Inject(MAT_DIALOG_DATA) public data: RenameData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'delete',
  templateUrl: 'delete.html',
})
export class Delete {

  constructor(
    
    public dialogRef: MatDialogRef<Delete>,
    @Inject(MAT_DIALOG_DATA) public data: Delete) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onYesClick(templateId){
    console.log("Delete granted id:",templateId);
  }

 
}
