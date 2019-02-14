import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MasterService {

   constructor(private http: HttpClient) { }
   private headers = new HttpHeaders({ 'Content-Type': 'application/json'});

   loginUrl = 'http://localhost:4000/master';
   

   public getMasterList(): Observable<any> {
     return this.http.get(this.loginUrl);
   }
   public saveMaster(data) {
    return this.http.post(this.loginUrl,data);
  }
  public deleteMaster(id) {
    const url = `${"http://localhost:4000/master"}/${id}`;
      return this.http.delete(url, {headers: this.headers})
  }
}