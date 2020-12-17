import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { AuthServiceService } from './auth-service.service';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ChartComponent } from './chart/chart.component';
import { AddQuizComponent } from './components/add-quiz/add-quiz.component';
import { DisplayQuizComponent } from './components/display-quiz/display-quiz.component';
import { CategoryComponent } from './components/category/category.component';
import { AddQuestionsComponent } from './components/add-questions/add-questions.component';
const routes: Routes = [{path:'home',component : HomeComponent},
{path:'signUp',component : RegistrationComponent},
{path:'aboutUs',component: AboutUsComponent},
{path:'login',component: LoginComponent},
{path:'contact',component : ContactUsComponent},
{ path: 'add', component: AddQuizComponent },
{ path:'bt/:id',component:DisplayQuizComponent},
// { path:'categories',component:CategoryComponent},
{ path:'abc/:id',component:AppComponent},
{ path:'question/:quizname',component:AddQuestionsComponent},
// {path:'team',component : OurteamComponent},
{path:'dashboard',component : DashboardComponent,canActivate: [AuthServiceService],
children:[
  //{path:"",component:UsrdashboardComponent},
  {path:"categories",component: CategoryComponent},
  
]},
{path:'forgetpwd',component : UpdatePasswordComponent},
{path:'chart',component : ChartComponent},
{path:'',component : HomeComponent},
{path:'**',component : HomeComponent},

// { path:"",component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
