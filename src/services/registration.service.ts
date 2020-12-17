import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

const httpOptionsPlain = {
  headers: new HttpHeaders({
    'Accept': 'text/plain',
    'Content-Type': 'text/plain'
  }),
  'responseType': 'text'
};

@Injectable({
  providedIn: 'root'
})
export class RegistrationService 
{

  constructor(private _http : HttpClient) { }
  signup(regObject  : any) : Observable<any[]>
  {
    console.log(regObject);
    console.log(this._http.post("http://localhost:8080/api/user",regObject));
    
    return this._http.post<any[]>("http://localhost:8080/api/user",regObject);
  
  }
}
