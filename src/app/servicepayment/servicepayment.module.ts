import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicePaymentComponent } from './servicepayment.component'
import { RouterModule } from '@angular/router';
const routes = [
  { path:'', component: ServicePaymentComponent },
];
@NgModule({
  declarations: [ServicePaymentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class ServicePaymentModule {
  public static routes = routes;
}
