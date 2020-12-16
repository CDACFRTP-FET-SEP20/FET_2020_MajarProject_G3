import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';

import { BtComponent } from './components/bt/bt.component';
import { AppComponent } from './app.component';

import { GkComponent } from './components/gk/gk.component';
import { LtComponent } from './components/lt/lt.component';
import { CategoryComponent } from './components/category/category.component';
import { QuestionsComponent } from './components/questions/questions.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'add', component: AddTutorialComponent },
  { path:'bt/:id',component:BtComponent},
  { path:'categories',component:CategoryComponent},
  { path:'abc/:id',component:AppComponent},
  { path:'question/:quizname',component:QuestionsComponent}
  // {path:'mcq',component:McqbtComponent},
  // {path:'descriptive',component:McqdesComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
