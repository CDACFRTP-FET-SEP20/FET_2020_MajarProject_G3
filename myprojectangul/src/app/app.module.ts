import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';


import { BtComponent } from './components/bt/bt.component';


import { GkComponent } from './components/gk/gk.component';
import { LtComponent } from './components/lt/lt.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { CategoryComponent } from './components/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
 
    
    BtComponent,
 

 

 
    GkComponent,
 
    LtComponent,
    QuestionsComponent,
    CategoryComponent
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
