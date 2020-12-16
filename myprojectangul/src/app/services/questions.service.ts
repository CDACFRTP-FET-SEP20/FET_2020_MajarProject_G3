import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/questions.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
// const question = 'http://localhost:8080/api/questions';

@Injectable({
  providedIn: 'root'
})

export class QuestionsService {
  private questionUrl = 'http://localhost:8080/api/questions/addQuestion';
  constructor(private http: HttpClient) { }
  
  
  addQuestion (question: Question): Observable<Question> {
    console.log(question, "This is a question")

   return this.http.post<Question>(this.questionUrl, question, httpOptions);

 }

 getQuizName(){
  return this.http.get('http://localhost:8080/api/questions/getQuizName')
}

// getCategoryName(){
//   return this.http.get('http://localhost:8080/api/questions/getCategoryName')
// }
getTypeName(){
  return this.http.get('http://localhost:8080/api/questions/getTypeName')
}
  // getAll(): Observable<Questions[]> {
  //   return this.http.get<Questions[]>(question);
  // }

  // create(data: any): Observable<any> {
  //   return this.http.post(question, data);
  // }
}
