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
import { Action } from 'rxjs/internal/scheduler/Action';

export interface RenameData {
  templateName: string;
}
export interface Template {
  name:string;
  thumbnail: any;
  string: any;
}
export interface PreviewById {
  id: any;
  name:string;
  thumbnail: any;
  string: any;
}

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  [x: string]: any;
  templates: Template[];
  previewbyid: PreviewById[];

  thumbnail : any;
  templateName : string;
  constructor(
    private router : Router,
    public dialog: MatDialog,
    private dialogService : DialogService,
    public commonService: CommonService
  ) { }

  ngOnInit() {
    this.commonService.getData('get-template',{})
    .subscribe((result) => {
      console.log("templates",result.templates[1]);
      this.templates = result.templates;
      // html2canvas(this.templates[1].string).then((canvas) => {});
    },(error) => {
      console.log(error);
    });
  }
  onTemplateSelect(templateId,action){
    // this.dialogService.openDialog(AboutquestionpaperComponent);
    this.dialogService.openDialog(PaperInfoDetailedComponent,{});

    this.router.navigate(['/quilleditor',templateId,action])
    
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
        if(this.templateName !=undefined){
          this.commonService.putData('update-template',{ name:this.templateName,id:templateId })
          .subscribe((result)=>{

            console.log("rename successfull",result);
          })
        }
        console.log('The dialog was closed-----> New name',this.templateName,templateId);
      });
    }
    onDeleteSelect(templateId){
    
      const dialogRef = this.dialog.open(Delete, {
        width: '350px',
        data : {templateId:templateId,}
        
      });
      dialogRef.afterClosed().subscribe(result => {
        this.confirmation = result;
        console.log('The dialog was closed----->Delete:',this.confirmation,templateId);
if(this.confirmation ==true){
        console.log("delete granted",this.confirmation);
        this.commonService.deleteData('delete-template',{id : templateId})
        .subscribe((result)=>{
          const afterDelete = result;
          console.log("delete result",afterDelete);
        },
        )

}
else {console.log("delete canceled");}
      });
    }
    
    onTemplatePreview(templateId){
      this.commonService.getData('get-template',{id: templateId})
      .subscribe((result)=>{
        this.previewbyid = result.templates;
        console.log("result from Preview",this.preview)
        const dialogRef = this.dialog.open(Preview, {
          width: '100vw',height:'100vh',
          data: {
            id:this.previewbyid[0].id,
            name:this.previewbyid[0].name,
            thumbnail:this.previewbyid[0].thumbnail}
          
        });
        dialogRef.afterClosed().subscribe(result => {
          //this.templates = result;
          console.log('The dialog was closed-----> thumbnail',result);
        });
      },
      (error)=>{
        console.log("error during Image Priview")
      })
     
      
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

@Component({
  selector: 'preview',
  templateUrl: 'preview.html',
})
export class Preview  {
  isFitToScreen: boolean;

  constructor(  
    private logServices : DialogService,
    private router : Router,
    public dialogRef: MatDialogRef<Preview>,
    @Inject(MAT_DIALOG_DATA) public data: PreviewById
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onProceed(templateId,action){
   console.log(templateId,action);
   this.logServices.openDialog(PaperInfoDetailedComponent,{
     width:'100vw',height:'80vh'
   })
   

    this.router.navigate(['/quilleditor',templateId,action])
    this.dialogRef.close();
  }
  
  fitToScreen(){
    this.isFitToScreen = !this.isFitToScreen
    console.log("isFitToScreen",this.isFitToScreen)
  }
}
