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
const routes: Routes = [{path:'home',component : HomeComponent},
{path:'signUp',component : RegistrationComponent},
{path:'aboutUs',component: AboutUsComponent},
{path:'login',component: LoginComponent},
{path:'contact',component : ContactUsComponent},
{path:'team',component : OurteamComponent},
{path:'dashboard',component : DashboardComponent,canActivate: [AuthServiceService]},
{path:'forgetpwd',component : UpdatePasswordComponent},
// { path:"",component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
