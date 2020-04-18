import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private http: HttpClient
  ) { }

  getData(route,params){
    console.log(params);
    return this.http.get<any>(`${environment.apiUrl}/${route}`,{
      params: params
    });
  }

  getDataById(route){
    return this.http.get<any>(`${environment.apiUrl}/student/get-student-details`);
  }

  postData(route,data){
    return this.http.post<any>(`${environment.apiUrl}/${route}`,data);

  }

  putData(){

  }

  patchData(){

  }

  deleteData(){

  }
}
