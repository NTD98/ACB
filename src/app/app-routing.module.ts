import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './module/home/home.component';
import {LoginComponent} from './module/login/login.component';
import {SearchInformationModule} from './searchinformation/searchinformation.module';
import {CardServiceModule} from './cardservice/cardservice.module';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'searchinformation',loadChildren:'./searchinformation/searchinformation.module#SearchInformationModule'},
  {path:'cardservice',loadChildren:'./cardservice/cardservice.module#CardServiceModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
