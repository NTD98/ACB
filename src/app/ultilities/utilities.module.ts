import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltilitiesComponent } from './ultilities.component'
import { RouterModule } from '@angular/router';
import { ChangeaccountbalanceComponent } from './changeaccountbalance/changeaccountbalance.component';
import {ActivatedisableaccountComponent} from './activatedisableaccount/activatedisableaccount.component';
import {AutomaticnotificationComponent} from './automaticnotification/automaticnotification.component';
import {ChangepasswordComponent} from './changepassword/changepassword.component';
import {ChangeusernameComponent} from './changeusername/changeusername.component';
import {DisableaccountstatusComponent} from './disableaccountstatus/disableaccountstatus.component';
import {SignupctkmComponent} from './signupctkm/signupctkm.component';
import { FormsModule,ReactiveFormsModule, FormControlDirective  } from '@angular/forms';
const routes = [
  { path:'', component: UltilitiesComponent },
  {path:'changeaccountbalance',component:ChangeaccountbalanceComponent},
  {path:'automaticnotification',component:AutomaticnotificationComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'changeusername',component:ChangeusernameComponent},
  {path:'disableaccountstatus',component:DisableaccountstatusComponent},
  {path:'signupctkm',component:SignupctkmComponent},
  {path:'activatedisableaccount',component:ActivatedisableaccountComponent},
];
@NgModule({
  declarations: [UltilitiesComponent, ChangeaccountbalanceComponent ,AutomaticnotificationComponent, ChangepasswordComponent,ChangeusernameComponent,DisableaccountstatusComponent,ChangeaccountbalanceComponent,SignupctkmComponent,ActivatedisableaccountComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  
})

export class UltilitiesModule {
  public static routes = routes;
}
