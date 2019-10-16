import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineLoanComponent } from './onlineloan.component'
import { RouterModule } from '@angular/router';
import { PaydebtComponent } from './paydebt/paydebt.component';
import { ListloantransactionComponent } from './listloantransaction/listloantransaction.component';
import { SignuppaydebtComponent } from './signuppaydebt/signuppaydebt.component';
import { LiquidatedebtaccountComponent } from './liquidatedebtaccount/liquidatedebtaccount.component';
const routes = [
  { path:'', component: OnlineLoanComponent },
  {path:'paydebt',component:PaydebtComponent},
  {path:'listloantransaction',component:ListloantransactionComponent},
  {path:'signuppaydebt',component:SignuppaydebtComponent},
  {path:'liquidatedebtaccount',component:LiquidatedebtaccountComponent},
];
@NgModule({
  declarations: [OnlineLoanComponent, PaydebtComponent, ListloantransactionComponent, SignuppaydebtComponent, LiquidatedebtaccountComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class OnlineLoanModule {
  public static routes = routes;
}
