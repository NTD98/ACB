import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './module/login/login.component';
import { SearchInformationComponent } from './searchinformation/searchinformation.component';
import { HeaderComponent } from './_template/header/header.component';
import { FooterComponent } from './_template/footer/footer.component';
import {ErrorInterceptor} from './_helpers/error.interceptor';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoginService } from '../app/module/login/login.service';
import { AccountService } from './_services/account.services';
import { HomeComponent } from './module/home/home.component';
import { TransfersuccessComponent } from './module/transfersuccess/transfersuccess.component';
import { PayservicesuccessComponent } from './module/payservicesuccess/payservicesuccess.component';
import { NotifyComponent } from './module/notify/notify.component';
import { from } from 'rxjs';
import { SignupComponent } from './module/signup/signup.component';
import { ChangepasssuccessComponent } from './module/changepasssuccess/changepasssuccess.component';


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
    SignupComponent,
    ChangepasssuccessComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    AccountService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
