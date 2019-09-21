import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferComponent } from './transfer.component'
import { RouterModule } from '@angular/router';
import { TransferInACBComponent } from './transferinacb/transferinacb.component';
import { TransferOutACBComponent } from './transferoutacb/transferoutacb.component';
import { TransferToCardACBComponent } from './transfertocardacb/transfertocardacb.component';
import { FastTransferOutACBComponent } from './fasttransferoutacb/fasttransferoutacb.component';
import { TransferByCMNDComponent } from './transferby-cmnd/transferby-cmnd.component';
const routes = [
  { path:'', component: TransferComponent },
  {path:'transferinacb',component:TransferInACBComponent},
  {path:'transferoutacb',component:TransferOutACBComponent},
  {path:'transfertocardacb',component:TransferToCardACBComponent},
  {path:'transferbycmnd',component:TransferByCMNDComponent},
  {path:'fasttransferoutacb',component:FastTransferOutACBComponent},
];
@NgModule({
  declarations: [TransferComponent, TransferInACBComponent, TransferOutACBComponent, TransferToCardACBComponent, FastTransferOutACBComponent, TransferByCMNDComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class TransferModule {
  public static routes = routes;
}
