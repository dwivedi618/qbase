import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Routes, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  dataSource: any;
  pathOfOpenedComponent:any

  constructor(
    private route : ActivatedRoute,
    private searchService : SearchService
  ) { }
  public doFilter = (value: string) => {
    console.log("value in search:",value);
      this.dataSource.filter = value.trim().toLocaleLowerCase();
    }
    ngOnInit() {
      
      this.searchService.path.subscribe((result)=>{
        this.pathOfOpenedComponent= result
      })
      console.log("Inside search ::path from ngOnInit::",this.pathOfOpenedComponent);
      
    }
        ngOnchanges(){
          this.pathOfOpenedComponent = this.searchService.path
          console.log("Inside NgOnChange search ::path from ngOnInit::",this.pathOfOpenedComponent);
        }
  
  
}
