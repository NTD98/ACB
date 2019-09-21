import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermDepositComponent } from './termdeposit.component'
import { RouterModule } from '@angular/router';
const routes = [
  { path:'', component: TermDepositComponent },
];
@NgModule({
  declarations: [TermDepositComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class TermDepositModule {
  public static routes = routes;
}
