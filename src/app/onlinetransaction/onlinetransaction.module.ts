import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineTransactionComponent } from './onlinetransaction.component'
import { RouterModule } from '@angular/router';
const routes = [
  { path:'', component: OnlineTransactionComponent },
];
@NgModule({
  declarations: [OnlineTransactionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class OnlineTransactionModule {
  public static routes = routes;
}
