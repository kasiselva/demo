import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MasterService {

   constructor(private http: HttpClient) { }
   private headers = new HttpHeaders({ 'Content-Type': 'application/json'});

   loginUrl = 'http://localhost:3000/master';
   

   public getMasterList(): Observable<any> {
     return this.http.get(this.loginUrl);
   }
   public saveMaster(data) {
    return this.http.post(this.loginUrl,data);
  }
  public updateMaster(data) {
    const url = `${"http://localhost:3000/master"}/${data.id}`;
      return this.http.put(url,JSON.stringify(data), {headers: this.headers})
  }
  public deleteMaster(id) {
    const url = `${"http://localhost:3000/master"}/${id}`;
      return this.http.delete(url, {headers: this.headers})
  }
}