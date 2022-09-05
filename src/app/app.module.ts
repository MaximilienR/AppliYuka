import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ErrorComponent } from './component/error/error.component';
import { StartComponent } from './component/start/start.component';
import { HomeComponent } from './component/home/home.component';
import { TitleService } from './service/title.service';
import { LoginComponent } from './component/login/login.component';
import { SubscribeComponent } from './component/subscribe/subscribe.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ScanneComponent } from './component/scanne/scanne.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    ErrorComponent,
    StartComponent,
    HomeComponent,
    LoginComponent,
    SubscribeComponent,
    FooterComponent,
    ScanneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
