import { Routes } from '@angular/router';
import { LandingPpageComponent } from './landing-ppage/landing-ppage.component';
import { LoginComponent } from './Authentic/login/login.component';
import { RegisterloginComponent } from './Authentic/registerlogin/registerlogin.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path:'',component:LandingPpageComponent},
    {path:'login',component:LoginComponent},
    {path:'registerlogin',component:RegisterloginComponent},
    {path:'home',component:HomeComponent}
];
