import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicePaymentComponent } from './servicepayment.component'
import { RouterModule } from '@angular/router';
import { RechargedttdComponent } from './rechargedttd/rechargedttd.component';
import { RechargedttdafterComponent } from './rechargedttdafter/rechargedttdafter.component';
import { PaydtcdComponent } from './paydtcd/paydtcd.component';
import { PaybillComponent } from './paybill/paybill.component';
import { PaytrainticketComponent } from './paytrainticket/paytrainticket.component';
import { RechargegamecardComponent } from './rechargegamecard/rechargegamecard.component';
import { PayadslComponent } from './payadsl/payadsl.component';
import { PaytvComponent } from './paytv/paytv.component';
import { PayplaneticketComponent } from './payplaneticket/payplaneticket.component';
import { PayportsgComponent } from './payportsg/payportsg.component';
const routes = [
  { path:'', component: ServicePaymentComponent },
  { path:'rechargedttd', component:RechargedttdComponent},
  { path:'rechargedttdafter', component:RechargedttdafterComponent},
  { path:'paydtcd', component:PaydtcdComponent},
  { path:'paybill', component:PaybillComponent},
  { path:'paytrainticket', component:PaytrainticketComponent},
  { path:'rechargegamecard', component:RechargegamecardComponent},
  { path:'payadsl', component:PayadslComponent},
  { path:'paytv', component:PaytvComponent},
  { path:'payplaneticket', component:PayplaneticketComponent},
  { path:'payportsg', component:PayportsgComponent},
];
@NgModule({
  declarations: [ServicePaymentComponent, RechargedttdComponent, RechargedttdafterComponent, PaydtcdComponent, PaybillComponent, PaytrainticketComponent, RechargegamecardComponent, PayadslComponent, PaytvComponent, PayplaneticketComponent, PayportsgComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class ServicePaymentModule {
  public static routes = routes;
}
