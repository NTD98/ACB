import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineInvestmentDepositComponent } from './onlineinvestmentdeposit.component'
import { RouterModule } from '@angular/router';
import { OpenaccountComponent } from './openaccount/openaccount.component';
import { ListdeposittransactionComponent } from './listdeposittransaction/listdeposittransaction.component';
import { AutomaticdepositComponent } from './automaticdeposit/automaticdeposit.component';
import { CanceldepositComponent } from './canceldeposit/canceldeposit.component';
const routes = [
  { path:'', component: OnlineInvestmentDepositComponent },
  {path:'openaccount',component:OpenaccountComponent },
  {path:'listdeposittransaction',component: ListdeposittransactionComponent},
  {path:'automaticdeposit',component:AutomaticdepositComponent },
  {path:'canceldeposit',component:CanceldepositComponent },
];
@NgModule({
  declarations: [OnlineInvestmentDepositComponent, OpenaccountComponent, ListdeposittransactionComponent, AutomaticdepositComponent, CanceldepositComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class OnlineInvestmentDepositModule {
  public static routes = routes;
}
