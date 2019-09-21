import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineLoanComponent } from './onlineloan.component'
import { RouterModule } from '@angular/router';
const routes = [
  { path:'', component: OnlineLoanComponent },
];
@NgModule({
  declarations: [OnlineLoanComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class OnlineLoanModule {
  public static routes = routes;
}
