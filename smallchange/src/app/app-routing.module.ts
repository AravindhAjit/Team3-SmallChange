import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { ActivityPageComponent } from './pages/activity-page/activity-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { PreferencesPageComponent } from './pages/preferences-page/preferences-page.component';
import { TradePageComponent } from './pages/trade-page/trade-page.component';

const routes: Routes = [
  { path: '',  component:  AppComponent },
  { path: 'activity', component: ActivityPageComponent},
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'portfolio', component: PortfolioPageComponent },
  { path: 'preference', component: PreferencesPageComponent },
  { path: 'trade', component: TradePageComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
