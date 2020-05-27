import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

 path = new EventEmitter<any>();
  constructor() { }
  // public getPath = (path)=>{
  //   console.log("inside searchService::path",path);
  //   this.path = path;
  //   return path;
  // }
}
