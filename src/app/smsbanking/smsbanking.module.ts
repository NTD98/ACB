import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmsBankingComponent } from './smsbanking.component'
import { RouterModule } from '@angular/router';
import { ChangelimitComponent } from './changelimit/changelimit.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { SignupsmsbankingComponent } from './signupsmsbanking/signupsmsbanking.component';
const routes = [
  { path:'', component: SmsBankingComponent },
  {path:'changelimit',component:ChangelimitComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'signupsmsbanking',component:SignupsmsbankingComponent},
];
@NgModule({
  declarations: [SmsBankingComponent, ChangelimitComponent, ChangepasswordComponent, SignupsmsbankingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class SmsBankingModule {
  public static routes = routes;
}
