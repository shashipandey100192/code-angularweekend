import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralapiService {

  constructor(private http:HttpClient) { }

 mypath ="https://jsonplaceholder.typicode.com/posts";

  mygetdata()
  {
    return this.http.get(this.mypath);
  }

  // getsingledata(id:any)
  // {
  //   let ids = id;
  //   return this.http.get(this.mypath+"/"+ids);
  // }


  getsingledata(id:any):Observable<any>
  {
    let ids = id;
    return this.http.get(this.mypath+"/"+ids);
  }


  mydelete(id:number):Observable<any>
  {
    return this.http.delete(`${this.mypath}/${id}`);
  }

  





}
