import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpOnlineComponent } from './signuponline.component'
import { RouterModule } from '@angular/router';
import { SignuplimitComponent } from './signuplimit/signuplimit.component';
import { SignuptpinComponent } from './signuptpin/signuptpin.component';
const routes = [
  { path:'', component: SignUpOnlineComponent },
  { path:'signuplimit', component: SignuplimitComponent },
  { path:'signuptpin', component: SignuptpinComponent },
];
@NgModule({
  declarations: [SignUpOnlineComponent, SignuplimitComponent, SignuptpinComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class SignUpOnlineModule {
  public static routes = routes;
}
