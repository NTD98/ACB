import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineInvestmentDepositComponent } from './onlineinvestmentdeposit.component'
import { RouterModule } from '@angular/router';
const routes = [
  { path:'', component: OnlineInvestmentDepositComponent },
];
@NgModule({
  declarations: [OnlineInvestmentDepositComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class OnlineInvestmentDepositModule {
  public static routes = routes;
}
