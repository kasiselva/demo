import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MasterService {

   constructor(private http: HttpClient) { }
   private headers = new Headers({ 'Content-Type': 'application/json'});

   loginUrl = 'http://localhost:4000/master';
   

   public getMasterList(): Observable<any> {
     return this.http.get(this.loginUrl);
   }
}