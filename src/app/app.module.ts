import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './module/login/login.component';
import { SearchInformationComponent } from './searchinformation/searchinformation.component';
import { HeaderComponent } from './_template/header/header.component';
import { FooterComponent } from './_template/footer/footer.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoginService } from '../app/module/login/login.service';
import { HomeComponent } from './module/home/home.component';
import { TransfersuccessComponent } from './module/transfersuccess/transfersuccess.component';
import { PayservicesuccessComponent } from './module/payservicesuccess/payservicesuccess.component';
import { NotifyComponent } from './module/notify/notify.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TransfersuccessComponent,
    PayservicesuccessComponent,
    NotifyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
