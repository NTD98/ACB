import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EwalletComponent } from './ewallet.component'
import { RouterModule } from '@angular/router';
const routes = [
  { path:'', component: EwalletComponent },
];
@NgModule({
  declarations: [EwalletComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class EWalletModule {
  public static routes = routes;
}
