import { Component, OnInit } from '@angular/core';
import { Quize } from 'src/app/models/quize.model';
import { QuizeService } from 'src/app/services/quize.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoreService } from 'src/app/services/score.service';
import { Score } from 'src/app/models/score.model';

@Component({
  selector: 'app-search-quiz',
  templateUrl: './search-quiz.component.html',
  styleUrls: ['./search-quiz.component.scss']
})
export class SearchQuizComponent implements OnInit {
  quizes?: Quize[];
  quizname='';
  //currentQuize?: Quize;
  //currentIndex = -1;

  
  // maxScorer?:Score[];
  constructor(private quizeService:QuizeService,private scoreService:ScoreService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
   // this.retrieveQuizes();
  
  }
  scoreRouting(id:any):void{
this.router.navigate(['/scr/'+id])
  }
  // setActiveQuize(quize: Quize, index: number): void {
  //   this.currentQuize = quize;
  //   console.log(this.currentQuize);  
  //   //this.currentIndex = index;
  //   // this.getScore(this.currentQuize.id)  
  // }

  // retrieveQuizes(): void {
  //   this.quizeService.getAll()
  //     .subscribe(
  //       data => {
  //         this.quizes = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
  
  searchTitle(): void {
    this.quizeService.findByTitle(this.quizname)
      .subscribe(
        data => {
          this.quizes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
  
}


