import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

   constructor(private http: HttpClient) { }
   

   loginUrl = 'assets/dumydata/login.json';
   

   public getLoginList(): Observable<any> {
     return this.http.get(this.loginUrl);
   }
   login (product): Observable<any> {
    console.log(product);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<any>('http://deepsdeepak.xyz/api/login', JSON.stringify(product), httpOptions);
  }

  
   
}