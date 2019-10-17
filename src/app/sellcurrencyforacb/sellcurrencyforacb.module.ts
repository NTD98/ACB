import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellCurrencyForACBComponent } from './sellcurrencyforacb.component'
import { RouterModule } from '@angular/router';
import { SellcurrencyComponent } from './sellcurrency/sellcurrency.component';
import { ListedtransactionComponent } from './listedtransaction/listedtransaction.component';
const routes = [
  { path:'', component: SellCurrencyForACBComponent },
  {path:'sellcurrency',component:SellcurrencyComponent},
  {path:'listedtransaction',component:ListedtransactionComponent}
];
@NgModule({
  declarations: [SellCurrencyForACBComponent, SellcurrencyComponent, ListedtransactionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class SellCurrencyForACB {
  public static routes = routes;
}
