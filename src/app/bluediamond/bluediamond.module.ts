import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlueDiamondComponent } from './bluediamond.component'
import { RouterModule } from '@angular/router';
const routes = [
  { path:'', component: BlueDiamondComponent },
];
@NgModule({
  declarations: [BlueDiamondComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class BlueDiamondModule {
  public static routes = routes;
}
