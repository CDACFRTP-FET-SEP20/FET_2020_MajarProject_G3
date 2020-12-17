import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Quize } from '../models/quize.model';

const baseUrl = 'http://localhost:8080/api/quizes';

@Injectable({
  providedIn: 'root'
})
export class QuizeService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Quize[]> {
    return this.http.get<Quize[]>(baseUrl);
  }

  findByTitle(quizname: any): Observable<Quize[]> {
    return this.http.get<Quize[]>(`${baseUrl}?quizname=${quizname}`);
  }
}

