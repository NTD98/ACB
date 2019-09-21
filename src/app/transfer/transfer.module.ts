import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferComponent } from './transfer.component'
import { RouterModule } from '@angular/router';
const routes = [
  { path:'', component: TransferComponent },
];
@NgModule({
  declarations: [TransferComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class TransferModule {
  public static routes = routes;
}
