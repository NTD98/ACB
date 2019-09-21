import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellCurrencyForACBComponent } from './sellcurrencyforacb.component'
import { RouterModule } from '@angular/router';
const routes = [
  { path:'', component: SellCurrencyForACBComponent },
];
@NgModule({
  declarations: [SellCurrencyForACBComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class SellCurrencyForACB {
  public static routes = routes;
}
