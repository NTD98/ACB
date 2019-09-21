import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WesternUnionComponent } from './westernunion.component'
import { RouterModule } from '@angular/router';
const routes = [
  { path:'', component: WesternUnionComponent },
];
@NgModule({
  declarations: [WesternUnionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class WesternUnionModule {
  public static routes = routes;
}
