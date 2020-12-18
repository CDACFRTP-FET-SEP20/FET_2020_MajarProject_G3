import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quize }  from '../models/Search.model';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-quiz',
  templateUrl: './search-quiz.component.html',
  styleUrls: ['./search-quiz.component.scss']
})
export class SearchQuizComponent implements OnInit {
  quizes?: Quize[];
  quizname='';
  
  constructor(private quizeService: SearchService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.searchTitle();
  
  }

  
  searchTitle(): void {
    this.quizeService.findByTitle(this.quizname)
      .subscribe(
        (data : any) => {
          this.quizes = data;
          console.log(data);
        },
        (error : any) => {
          console.log(error);
        });
  }
  

}
