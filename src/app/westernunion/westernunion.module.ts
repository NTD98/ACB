import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WesternUnionComponent } from './westernunion.component'
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
const routes = [
  { path:'', component: WesternUnionComponent },
  { path:'signup', component: SignupComponent },
];
@NgModule({
  declarations: [WesternUnionComponent, SignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class WesternUnionModule {
  public static routes = routes;
}
