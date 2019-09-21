import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpOnlineComponent } from './signuponline.component'
import { RouterModule } from '@angular/router';
const routes = [
  { path:'', component: SignUpOnlineComponent },
];
@NgModule({
  declarations: [SignUpOnlineComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class SignUpOnlineModule {
  public static routes = routes;
}
