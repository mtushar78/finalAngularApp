import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  url = "http://localhost:8080/infos";
  url2 = "http://localhost:8080/setLoginInfos";

  constructor(private http: HttpClient) {
   }

   // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('light_app:123456')
    })
  }
   getResponse(){
    return this.http.get(this.url,this.httpOptions);
  }
  insertNewUser(post){
    return this.http.post(this.url2,post, this.httpOptions);
  }
  // getStatements(id){
  //   return this.http.get("http://localhost:8080/statements/"+id,this.httpOptions);
  // }
  // insertNewStatement(data){
  //   return this.http.post("http://localhost:8080/statements/", data,this.httpOptions);
  // }
  // deleteStatement(id){
  //   return this.http.get("http://localhost:8080/delete/statements/"+id,this.httpOptions);
  // }
  // getTypesByEmail(id){
  //   return this.http.get("http://localhost:8080/types/"+id,this.httpOptions);
  // }
  // getCategoriesByEmail(id){
  //   return this.http.get("http://localhost:8080/category/"+id,this.httpOptions);
  // }
  // getCategoriesAmount(id){
  //   return this.http.get("http://localhost:8080/category-amount/"+id,this.httpOptions);
  // }
  // getTypeAmount(id){
  //   return this.http.get("http://localhost:8080/type-amount/"+id,this.httpOptions);
  // }
  // insertNewCategory(id,data){
  //   return this.http.post("http://localhost:8080/category/"+id,data,this.httpOptions);
  // }
  // insertNewType(id,data){
  //   return this.http.post("http://localhost:8080/types/"+id,data,this.httpOptions);
  // }

}
