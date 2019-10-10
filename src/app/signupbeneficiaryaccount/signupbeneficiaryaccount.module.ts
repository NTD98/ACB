import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpBeneficiaryAccountComponent } from './signupbeneficiaryaccount.component'
import { RouterModule } from '@angular/router';
import {BeneficiaryaccountinTTHDComponent} from './beneficiaryaccountin-tthd/beneficiaryaccountin-tthd.component';
import {BeneficiaryaccountinacbComponent} from './beneficiaryaccountinacb/beneficiaryaccountinacb.component';
import {BeneficiaryaccountoutacbComponent} from './beneficiaryaccountoutacb/beneficiaryaccountoutacb.component';
import {BeneficiarycardComponent} from './beneficiarycard/beneficiarycard.component';

const routes = [
  { path:'', component: SignUpBeneficiaryAccountComponent },
  {path:'beneficiaryaccountintthd', component:BeneficiaryaccountinTTHDComponent},
  {path:'beneficiaryaccountinacb', component:BeneficiaryaccountinacbComponent},
  {path:'beneficiaryaccountoutacb', component:BeneficiaryaccountoutacbComponent},
  {path:'beneficiarycard', component:BeneficiarycardComponent},
];
@NgModule({
  declarations: [SignUpBeneficiaryAccountComponent,BeneficiaryaccountinTTHDComponent,
    BeneficiaryaccountinacbComponent,
    BeneficiaryaccountoutacbComponent,
    BeneficiarycardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    
  ],
  
})

export class SignUpBeneficiaryAccountModule {
  public static routes = routes;
}
