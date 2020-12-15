import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService 
{

  constructor(private _http : HttpClient) { }
  signup(regObject  : any) : Observable<any[]>
  {
    console.log(regObject);
    return this._http.post<any[]>("http://localhost:8080/api/user",regObject);
  }
}
