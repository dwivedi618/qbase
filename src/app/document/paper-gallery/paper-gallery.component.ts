import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ActivatedRoute, Router } from '@angular/router';

import { DialogService } from 'src/app/services/dialog.service';
import { SearchService } from 'src/app/services/search.service';
import { Rename, Delete, Preview } from '../document.component';
import { PaperInfoDetailedComponent } from 'src/app/quilleditor/paper-info-detailed/paper-info-detailed.component';
import { MatDialog } from '@angular/material/dialog';
import { QuilleditorComponent } from 'src/app/quilleditor/quilleditor.component';

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
  selector: 'app-paper-gallery',
  templateUrl: './paper-gallery.component.html',
  styleUrls: ['./paper-gallery.component.scss']
})
export class PaperGalleryComponent implements OnInit {
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
    this.getPaper();
  }
getPaper(){
  this.commonService.getData('get-template', [])
    .subscribe((result) => {
      this.isLoading = false;
      this.templates = result.templates;
      console.log("templates", (this.templates));
      if (this.templates.length <= 0) {
        this.onEmpty = true;
        this.onEmptyMessage = "No template Created yet!!";
        console.log("message :", this.onEmptyMessage);
      }else { 
        this.onEmpty = false;

       }
      // html2canvas(this.templates[1].string).then((canvas) => {});
    }, (error) => {
      console.log(error);
    });
};
  onTemplateSelect(templateId, action) {
    // this.dialogService.openDialog(AboutquestionpaperComponent);
    // this.dialogService.openDialog(PaperInfoDetailedComponent, {
    //   maxHeight : '100vh',
    //   minHeight : '50vh',
    // });
    const dialogRef = this.dialog.open(QuilleditorComponent,{
      maxHeight:'100vh',
      maxWidth:'100vw',
      height:'100vh',
      width:'100vw',
      data : { templateId: templateId,action:action}
    })
    dialogRef.afterClosed().subscribe(result => {
      this.getPaper();
    })
    // this.router.navigate(['/quilleditor', templateId, action])

  }
  onEditSelect(templateId, action) {
    // this.router.navigate(['/quilleditor', templateId, action])
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
          this.getPaper();

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
          this.getPaper();

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
            this.getPaper();
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
