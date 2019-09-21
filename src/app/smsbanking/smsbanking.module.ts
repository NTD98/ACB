import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmsBankingComponent } from './smsbanking.component'
import { RouterModule } from '@angular/router';
const routes = [
  { path:'', component: SmsBankingComponent },
];
@NgModule({
  declarations: [SmsBankingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class SmsBankingModule {
  public static routes = routes;
}
