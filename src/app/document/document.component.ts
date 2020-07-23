import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { DialogService } from '../services/dialog.service';
import { CommonService } from '../services/common.service';
import { getTreeNoValidDataSourceError } from '@angular/cdk/tree';
// import { get } from 'http';
import html2canvas from 'html2canvas';
import { Router, ActivatedRoute } from '@angular/router';
import { AboutquestionpaperComponent } from '../aboutquestionpaper/aboutquestionpaper.component';
import { PaperInfoDetailedComponent } from '../quilleditor/paper-info-detailed/paper-info-detailed.component';
import { Action } from 'rxjs/internal/scheduler/Action';
// import { template } from '@angular/core/src/render3';
import { SearchService } from '../services/search.service';
import { QuilleditorComponent } from '../quilleditor/quilleditor.component';

export interface RenameData {
  templateName: string;
}
export interface Template {
  id: any;
  name: string;
  thumbnail: any;
  string: any;
}
export interface PreviewById {
  id: any;
  name: string;
  thumbnail: any;
  string: any;
}

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  [x: string]: any;
  selected = "Recents";
  onEmpty = false;
  isLoading = true;
  templates: Template[];
  previewbyid: PreviewById[];

  thumbnail: any;
  templateName: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private dialogService: DialogService,
    public commonService: CommonService,
    private searchService: SearchService
  ) { }

  ngOnInit() {


    this.commonService.getData('get-template', [])
      .subscribe((result) => {
        this.isLoading = false;
        this.templates = result.templates;
        console.log("templates", (this.templates));
        if (this.templates.length <= 0) {
          this.onEmpty = true;
          this.onEmptyMessage = "No template Created yet!!";
          console.log("message :", this.onEmptyMessage);
        }
        // html2canvas(this.templates[1].string).then((canvas) => {});
      }, (error) => {
        console.log(error);
      });
    console.log("Inside DocumentComponent::path::", this.route.snapshot.url[0].path);
    this.searchService.path.emit(this.route.snapshot.url[0].path);//sending path to searchService
  }
  onTemplateSelect(templateId, action) {

    // this.dialogService.openDialog(AboutquestionpaperComponent);
    this.dialogService.openDialog(PaperInfoDetailedComponent, {
      data : {templateId : templateId }
    });
const dialogRef = this.dialog.open(QuilleditorComponent,{
  maxHeight:'100vh',
  maxWidth:'100vw',
  height:'100vh',
  width:'100vw',
  data : { templateId: templateId,action:action}
})
    // this.router.navigate(['/quilleditor', templateId, action])

  }
  onEditSelect(templateId, action) {
    // this.router.navigate(['/quilleditor', templateId, action])
    const dialogRef = this.dialog.open(QuilleditorComponent,{
      maxHeight:'100vh',
      maxWidth:'100vw',
      height:'100vh',
      width:'100vw',
      data : { templateId: templateId,action:action}
    })
  }
  onRenameSelect(templateId, templateName) {
    const dialogRef = this.dialog.open(Rename, {
      width: '350px',
      disableClose: true,
      data: { name: templateName }
    });
    dialogRef.afterClosed().subscribe(result => {
      const newName = result;
      if (newName != undefined && newName != "") {
        this.commonService.putData('update-template', { name: newName, id: templateId })
          .subscribe((result) => {
            console.log("newName", newName)
            var updatedTemplates = this.templates.filter(function (p) {
              return p.id == templateId;
            })
            console.log("after rename length of template+++++++=>", this.templates.length)
            for (let i = 0; i < this.templates.length; i++) {
              console.log("i======>>", i);
            }
            // this.templates = updatedTemplates;
            console.log("rename successfull updated template::::>>>>after Rename", updatedTemplates);
          })
      }
      console.log('The dialog was closed-----> New name', this.templateName, templateId);
    });
  }
  onDeleteSelect(templateId, templateName) {

    const dialogRef = this.dialog.open(Delete, {
      width: '350px',
      disableClose: true,
      data: { templateId: templateId, templateName: templateName }

    });
    dialogRef.afterClosed().subscribe(result => {
      this.confirmation = result;
      console.log('The dialog was closed----->Delete:', this.confirmation, templateId);
      if (this.confirmation == true) {
        console.log("delete granted", this.confirmation);
        this.commonService.deleteData('delete-template', templateId)
          .subscribe((result) => {
            var updatedTemplates = this.templates.filter(function (p) {
              return p.id != templateId;
            });
            console.log(" updated template ", updatedTemplates);
            this.templates = updatedTemplates;
            if (this.templates.length <= 0) {
              this.onEmpty = true;
            }
            const afterDelete = result;
            console.log("delete result", afterDelete);
          },
          )

      }
      else { console.log("delete canceled"); }
    });
  }

  onTemplatePreview(templateId) {
    this.commonService.getData('get-template', { id: templateId })
      .subscribe((result) => {
        this.previewbyid = result.templates;
        console.log("result from Preview", this.preview)
        const dialogRef = this.dialog.open(Preview, {
          width: '100vw',
          maxHeight : '100vh',
          maxWidth: '100vw',
          height: '100vh',
           disableClose: true,
          data: {
            id: this.previewbyid[0].id,
            name: this.previewbyid[0].name,
            thumbnail: this.previewbyid[0].thumbnail
          }

        });
        dialogRef.afterClosed().subscribe(result => {
          //this.templates = result;
          console.log('The dialog was closed-----> thumbnail', result);
        });
      },
        (error) => {
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
    @Inject(MAT_DIALOG_DATA) public data: RenameData) { }

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
    @Inject(MAT_DIALOG_DATA) public data: Delete) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onYesClick(templateId) {
    console.log("Delete granted id:", templateId);
  }


}

@Component({
  selector: 'preview',
  templateUrl: 'preview.html',
})
export class Preview {
  isFitToScreen: boolean;

  constructor(
    private logServices: DialogService,
    private router: Router,
    private dialog : MatDialog,
    public dialogRef: MatDialogRef<Preview>,
    @Inject(MAT_DIALOG_DATA) public data: PreviewById
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onProceed(templateId, action) {
    action = 'paper-generation';
    const dialogRef = this.dialog.open(QuilleditorComponent,{
      maxHeight:'100vh',
      maxWidth:'100vw',
      height:'100vh',
      width:'100vw',
      data : { templateId: templateId,action:action}
    })

    // this.router.navigate(['/quilleditor', templateId, action])
    this.dialogRef.close();
  }

  fitToScreen() {
    this.isFitToScreen = !this.isFitToScreen
    console.log("isFitToScreen", this.isFitToScreen)
  }
}
