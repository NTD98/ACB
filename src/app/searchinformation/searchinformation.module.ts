import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchInformationComponent } from './searchinformation.component';
import { RouterModule } from '@angular/router';
import { AccountinfoComponent } from './accountinfo/accountinfo.component';
const routes = [
  { path:'', component: SearchInformationComponent },
  { path:'accountinfo', component:AccountinfoComponent}
];
@NgModule({
  declarations: [SearchInformationComponent, AccountinfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  
})

export class SearchInformationModule {
  public static routes = routes;
}
