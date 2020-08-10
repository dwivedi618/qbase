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
    return this.http.get<any>(`${environment.apiUrl}/${route}`);
  }

  postData(route,data){
    return this.http.post<any>(`${environment.apiUrl}/${route}`,data);

  }

  putData(route,data){
    return this.http.put<any>(`${environment.apiUrl}/${route}`,data);

  }

  patchData(route,data){
    return this.http.patch<any>(`${environment.apiUrl}/${route}`,data);
  }

  deleteData(route,templateId){
    return this.http.delete<any>(`${environment.apiUrl}/${route}/` + templateId);
  }
  uploadTemplateQuestion(newQuestion){
    return this.http.post<any>(`${environment.apiUrl}/upload-template-question/`,newQuestion);
  }
}
