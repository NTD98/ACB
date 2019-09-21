import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpBeneficiaryAccountComponent } from './signupbeneficiaryaccount.component'
import { RouterModule } from '@angular/router';
const routes = [
  { path:'', component: SignUpBeneficiaryAccountComponent },
];
@NgModule({
  declarations: [SignUpBeneficiaryAccountComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class SignUpBeneficiaryAccountModule {
  public static routes = routes;
}
