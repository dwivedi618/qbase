import { Component, OnInit } from '@angular/core';
import {DomSanitizer,SafeHtml} from '@angular/platform-browser'
import { DialogService } from '../services/dialog.service';
import { CommonService } from '../services/common.service';
import { getTreeNoValidDataSourceError } from '@angular/cdk/tree';
// import { get } from 'http';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  templates: any;
  constructor(
    private dialogService : DialogService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.commonService.getData('get-template')
    .subscribe((result) => {
      console.log("templates",result.templates[1]);
      this.templates = result.templates;
      html2canvas(this.templates[1].string).then((canvas) => {});
    },(error) => {
      console.log(error);
    });
    ;
  }
  onTemplateSelect(){
    
   this.dialogService.openDialog();
  }

}
