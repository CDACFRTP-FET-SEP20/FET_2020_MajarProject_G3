import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreDetailsComponent } from './components/score-details/score-details.component';
import { SearchQuizComponent } from './components/search-quiz/search-quiz.component';
import { ListFilterPipePipe } from './list-filter-pipe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
@NgModule({
  declarations: [
    AppComponent,
    
    ScoreDetailsComponent,
    SearchQuizComponent,
    ListFilterPipePipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgMatSearchBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
