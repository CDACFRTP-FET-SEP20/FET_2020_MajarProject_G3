import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchQuizComponent } from './components/search-quiz/search-quiz.component';
import { ScoreDetailsComponent } from './components/score-details/score-details.component';

const routes: Routes = [

  { path: 'quizes', component: SearchQuizComponent },
  { path: 'scr/:id', component: ScoreDetailsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }