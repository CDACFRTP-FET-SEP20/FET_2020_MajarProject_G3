import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Tutorial } from "../models/tutorial.model";
import { Category } from '../models/category.model';

const baseUrl = "http://localhost:8080/api/quizes";


const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class TutorialService {
  private baseUrl1 = "http://localhost:8080/api/quizes/addQuize";

  constructor(private http: HttpClient) {}

  // getAll(): Observable<Tutorial[]> {
  //   return this.http.get<Tutorial[]>(baseUrl);
  // }

  get(id: any): Observable<Tutorial> {
    return this.http.get(`${baseUrl}/${id}`);
  }


 
  addQuize(question: Tutorial): Observable<Tutorial> {
    console.log(question, "This is a question");

    return this.http.post<Tutorial>(this.baseUrl1, question, httpOptions);
  }

  getCategoryName() {
    return this.http.get("http://localhost:8080/api/quizes/getCategoryName");
  }

  // getbtquize(categoryid: any){
  //   return this.http.get('http://localhost:8080/api/quizes/${categoryid}')
  // }

  // getQuize(id: any): Observable<Tutorial> {
  //   return this.http.get(`${baseUrl}/${id}`);
  // }
}
