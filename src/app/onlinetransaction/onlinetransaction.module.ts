import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
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
    FormsModule,
    ReactiveFormsModule,
  ],
  
})

export class OnlineTransactionModule {
  public static routes = routes;
}
