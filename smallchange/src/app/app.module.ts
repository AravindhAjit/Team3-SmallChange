import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { ButtonComponent } from './atoms/button/button.component';
import { FormLabelComponent } from './atoms/form-label/form-label.component';
import { HeaderTextComponent } from './atoms/header-text/header-text.component';
import { LinkComponent } from './atoms/link/link.component';
import { LogoComponent } from './atoms/logo/logo.component';
import { NavBarLinkComponent } from './atoms/nav-bar-link/nav-bar-link.component';
import { ParagraphTextComponent } from './atoms/paragraph-text/paragraph-text.component';
import { TextBoxPasswordComponent } from './atoms/text-box-password/text-box-password.component';
import { TextBoxStandardComponent } from './atoms/text-box-standard/text-box-standard.component';
import { FooterBarComponent } from './molecules/footer-bar/footer-bar.component';
import { HeaderBarComponent } from './molecules/header-bar/header-bar.component';
import { NavBarComponent } from './molecules/nav-bar/nav-bar.component';
import { PageTitleComponent } from './molecules/page-title/page-title.component';
import { PasswordFormControlComponent } from './molecules/password-form-control/password-form-control.component';
import { UsernameFormControlComponent } from './molecules/username-form-control/username-form-control.component';
import { LoginFormComponent } from './organisms/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TradePageComponent } from './pages/trade-page/trade-page.component';
import { TradeButtonComponent } from './atoms/trade-button/trade-button.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from 'ng-mat-carousel';
import { MatSelectModule, } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import { EditPreferenceComponent } from './organisms/edit-preference/edit-preference.component';
import { AppRoutingModule } from './app-routing.module';
import { RegPageComponent } from './pages/reg-page/reg-page.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeComponent } from './atoms/home/home.component';
import { FlipCardComponent } from './atoms/flip-card/flip-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from '@angular/material/grid-list';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TradeHistoryComponent } from './organisms/trade-history/trade-history.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';
import { PieSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationAnnotationService,
  AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts';
import { RoboadvisorComponent } from './pages/roboadvisor/roboadvisor.component';
import { PopupComponent } from './organisms/popup/popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MatSliderModule} from '@angular/material/slider';
import { ActivityPageComponent } from './pages/activity-page/activity-page.component';
import { FundPopupComponent } from './organisms/fund-popup/fund-popup.component';
import { HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular';
import { NgApexchartsModule } from 'ng-apexcharts';
import { StatsComponent } from './organisms/stats/stats.component';
import { SellpopupComponent } from './sellpopup/sellpopup.component';



@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FormLabelComponent,
    HeaderTextComponent,
    LinkComponent,
    LogoComponent,
    NavBarLinkComponent,
    ParagraphTextComponent,
    TextBoxPasswordComponent,
    TextBoxStandardComponent,
    FooterBarComponent,
    HeaderBarComponent,
    NavBarComponent,
    PageTitleComponent,
    PasswordFormControlComponent,
    UsernameFormControlComponent,
    LoginFormComponent,
    LoginPageComponent,
    TradePageComponent,
    TradeButtonComponent,
    EditPreferenceComponent,
    RegPageComponent,
    HomePageComponent,
    HomeComponent,
    FlipCardComponent,
    PortfolioPageComponent,
    TradeHistoryComponent,
    RoboadvisorComponent,
    PopupComponent,
    ActivityPageComponent,
    FundPopupComponent,
    StatsComponent,
    SellpopupComponent,
    
    
  ],



 imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatCarouselModule.forRoot(),
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatTabsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    AccumulationChartModule,
    MatDialogModule,
    NgxSliderModule, 
    BrowserModule,
    HttpClientModule,
    MatSliderModule,
    HighchartsChartModule,
    NgApexchartsModule
 ],
  providers: [PieSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationDataLabelService,
    AccumulationAnnotationService],
  bootstrap: [AppComponent]
})
export class AppModule { }