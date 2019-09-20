import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInformationComponent } from './searchinformation.component';
import { RouterModule } from '@angular/router';
const routes = [
  { path:'', component: SearchInformationComponent },
];
@NgModule({
  declarations: [SearchInformationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class SearchInformationModule {
  public static routes = routes;
}
