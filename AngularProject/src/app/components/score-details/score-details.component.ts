import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/services/score.service';
import { Score } from 'src/app/models/score.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-score-details',
  templateUrl: './score-details.component.html',
  styleUrls: ['./score-details.component.scss']
})
export class ScoreDetailsComponent implements OnInit {

  maxScorer:Score={
    maxscore:0,
        usersc: {
            id:0,
            username:'',
            email:'',
            password:'',
            roleId:0
        }
   
  };



  constructor(private scoreService:ScoreService,
    private route: ActivatedRoute) { 

    }

  ngOnInit(): void {
    this.getScore(this.route.snapshot.params.id);
  }


//   getScore(id: string): void {
//     this.scoreService.get(id)
//       .subscribe(
//         data => {
          
//           console.log(data);
//         },
//         error => {
//           console.log(error);
//         });
// }
getScore(id:any): void {
  
  console.log(id);
  
  this.scoreService.get(id)
    .subscribe(
      data => {
      this.maxScorer=data;
        //console.log(data);
        console.log(this.maxScorer.usersc?.username);
        console.log( 'my data',data);
        
        
      },
      error => {
        console.log(error);
      });
}
}
