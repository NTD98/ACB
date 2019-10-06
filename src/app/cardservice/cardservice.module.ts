import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardServiceComponent } from './cardservice.component';
import { RouterModule } from '@angular/router';
import { CardinfoComponent } from './cardinfo/cardinfo.component';
import { CardbackinfoComponent } from './cardbackinfo/cardbackinfo.component';
import { LockunlockcardComponent } from './lockunlockcard/lockunlockcard.component';
import { EcomerceserviceComponent } from './ecomerceservice/ecomerceservice.component';
const routes = [
  { path:'', component: CardServiceComponent },
  { path:'cardinfo', component: CardinfoComponent },
  { path:'cashbackinfo', component: CardbackinfoComponent },
  { path:'lockunlockcard', component: LockunlockcardComponent },
  { path:'ecomerceservice', component: EcomerceserviceComponent },
];
@NgModule({
  declarations: [CardServiceComponent, CardinfoComponent, CardbackinfoComponent, LockunlockcardComponent, EcomerceserviceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class CardServiceModule {
  public static routes = routes;
}
