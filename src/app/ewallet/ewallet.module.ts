import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EwalletComponent } from './ewallet.component'
import { RouterModule } from '@angular/router';
import { LinkwalletComponent } from './linkwallet/linkwallet.component';
import { RechargewalletComponent } from './rechargewallet/rechargewallet.component';
const routes = [
  { path:'', component: EwalletComponent },
  {path:'linkwallet',component:LinkwalletComponent},
  {path:'rechargewallet',component:RechargewalletComponent}
];
@NgModule({
  declarations: [EwalletComponent, LinkwalletComponent, RechargewalletComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class EWalletModule {
  public static routes = routes;
}
