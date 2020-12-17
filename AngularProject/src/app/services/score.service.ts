import { Injectable } from '@angular/core';
import { Score } from '../models/score.model';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/scr';
@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  // http: any;

  constructor(private http: HttpClient) { }
  
  get(id: any): Observable<Score> {
    return this.http.get(`${baseUrl}/${id}`);
  }
}


