import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltilitiesComponent } from './ultilities.component'
import { RouterModule } from '@angular/router';
const routes = [
  { path:'', component: UltilitiesComponent },
];
@NgModule({
  declarations: [UltilitiesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class UltilitiesModule {
  public static routes = routes;
}
