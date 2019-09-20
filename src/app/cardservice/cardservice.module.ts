import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardServiceComponent } from './cardservice.component';
import { RouterModule } from '@angular/router';
const routes = [
  { path:'', component: CardServiceComponent },
];
@NgModule({
  declarations: [CardServiceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class CardServiceModule {
  public static routes = routes;
}
