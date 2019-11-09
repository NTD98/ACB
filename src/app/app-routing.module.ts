import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './module/home/home.component';
import {LoginComponent} from './module/login/login.component';
import {SearchInformationModule} from './searchinformation/searchinformation.module';
import {CardServiceModule} from './cardservice/cardservice.module';
import {OnlineInvestmentDepositModule} from './onlineinvestmentdeposit/onlineinvestmentdeposit.module';
import {OnlineLoanModule} from './onlineloan/onlineloan.module';
import {OnlineTransactionModule} from './onlinetransaction/onlinetransaction.module';
import {SellCurrencyForACB} from './sellcurrencyforacb/sellcurrencyforacb.module';
import {ServicePaymentModule} from './servicepayment/servicepayment.module';
import {SignUpBeneficiaryAccountModule} from './signupbeneficiaryaccount/signupbeneficiaryaccount.module';
import {SignUpOnlineModule} from './signuponline/signuponline.module';
import {SmsBankingModule} from './smsbanking/smsbanking.module';
import {TermDepositModule} from './termdeposit/termdeposit.module';
import {TransferModule} from './transfer/transfer.module';
import {UltilitiesModule} from './ultilities/utilities.module';
import {WesternUnionModule} from './westernunion/westernunion.module';
import {EWalletModule} from './ewallet/ewallet.module';
import {BlueDiamondModule} from './bluediamond/bluediamond.module';
import {TransfersuccessComponent} from './module/transfersuccess/transfersuccess.component';
import {PayservicesuccessComponent } from './module/payservicesuccess/payservicesuccess.component';
import {NotifyComponent} from './module/notify/notify.component';
import { from } from 'rxjs';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'transfersuccess',component:TransfersuccessComponent},
  {path:'paysersuccess',component:PayservicesuccessComponent},
  {path:'notify',component:NotifyComponent},
  {path:'searchinformation',loadChildren:'./searchinformation/searchinformation.module#SearchInformationModule'},
  {path:'cardservice',loadChildren:'./cardservice/cardservice.module#CardServiceModule'},
  {path:'onlineinvestmentdeposit',loadChildren:'./onlineinvestmentdeposit/onlineinvestmentdeposit.module#OnlineInvestmentDepositModule'},
  {path:'onlineloan',loadChildren:'./onlineloan/onlineloan.module#OnlineLoanModule'},
  {path:'onlinetransaction',loadChildren:'./onlinetransaction/onlinetransaction.module#OnlineTransactionModule'},
  {path:'sellcurrencyforacb',loadChildren:'./sellcurrencyforacb/sellcurrencyforacb.module#SellCurrencyForACB'},
  {path:'servicepayment',loadChildren:'./servicepayment/servicepayment.module#ServicePaymentModule'},
  {path:'signupbeneficiaryaccount',loadChildren:'./signupbeneficiaryaccount/signupbeneficiaryaccount.module#SignUpBeneficiaryAccountModule'},
  {path:'signuponline',loadChildren:'./signuponline/signuponline.module#SignUpOnlineModule'},
  {path:'smsbanking',loadChildren:'./smsbanking/smsbanking.module#SmsBankingModule'},
  {path:'termdeposit',loadChildren:'./termdeposit/termdeposit.module#TermDepositModule'},
  {path:'transfer',loadChildren:'./transfer/transfer.module#TransferModule'},
  {path:'ultilities',loadChildren:'./ultilities/utilities.module#UltilitiesModule'},
  {path:'westernunion',loadChildren:'./westernunion/westernunion.module#WesternUnionModule'},
  {path:'ewallet',loadChildren:'./ewallet/ewallet.module#EWalletModule'},
  {path:'bluediamond',loadChildren:'./bluediamond/bluediamond.module#BlueDiamondModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
