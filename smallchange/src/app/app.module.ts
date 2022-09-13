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

import { AppRoutingModule } from './app-routing.module';
import { RegPageComponent } from './pages/reg-page/reg-page.component';
import { FormsModule } from '@angular/forms';

import { TradePageComponent } from './pages/trade-page/trade-page.component';
import { TradeButtonComponent } from './atoms/trade-button/trade-button.component';
import { PreferencesPageComponent } from './pages/preferences-page/preferences-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from 'ng-mat-carousel';
import { MatSelectModule, } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import { EnterPreferenceComponent } from './organisms/enter-preference/enter-preference.component';
import { EditPreferenceComponent } from './organisms/edit-preference/edit-preference.component';
import { TradeBuyComponent } from './organisms/trade-buy/trade-buy.component';
import { TradeSellComponent } from './organisms/trade-sell/trade-sell.component';

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
    RegPageComponent,
    TradePageComponent,
    TradeButtonComponent,
    PreferencesPageComponent,
    EnterPreferenceComponent,
    EditPreferenceComponent,
    TradeBuyComponent,
    TradeSellComponent,
    PortfolioPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    MatCarouselModule.forRoot(),
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatTabsModule,
    FormsModule,
    MatTableModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
