import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ActivityPageComponent } from './pages/activity-page/activity-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { PreferencesPageComponent } from './pages/preferences-page/preferences-page.component';
import { TradePageComponent } from './pages/trade-page/trade-page.component';
import { RegPageComponent } from './pages/reg-page/reg-page.component'
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [

  { path: '', component: LoginPageComponent },
  { path: 'registration', component: RegPageComponent },

  { path: 'activity', component: ActivityPageComponent, canActivate:[AuthGuard]},
  { path: 'home', component: HomePageComponent },

  // { path: 'login', component: LoginPageComponent },
  
  { path: 'portfolio', component: PortfolioPageComponent, canActivate:[AuthGuard] },
  
  { path: 'preference', component: PreferencesPageComponent, canActivate:[AuthGuard] },
  
  { path: 'trade', component: TradePageComponent, canActivate:[AuthGuard] }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
