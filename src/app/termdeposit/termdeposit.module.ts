import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermDepositComponent } from './termdeposit.component'
import { RouterModule } from '@angular/router';
import { OpentermdepositComponent } from './opentermdeposit/opentermdeposit.component';
import { OptionalopentermonlineComponent } from './optionalopentermonline/optionalopentermonline.component';
import { UpdatedirectiveComponent } from './updatedirective/updatedirective.component';
import { FinalizationtermdepositComponent } from './finalizationtermdeposit/finalizationtermdeposit.component';
import { ListeddeposittransactionComponent } from './listeddeposittransaction/listeddeposittransaction.component';
import { DepositaccumulationComponent } from './depositaccumulation/depositaccumulation.component';
import { LittleangelComponent } from './littleangel/littleangel.component';
import { UserinfoComponent } from './littleangel/userinfo/userinfo.component';
import { SeeordeleteautomaticdepositComponent } from './littleangel/seeordeleteautomaticdeposit/seeordeleteautomaticdeposit.component';
import { SentmoneytoaccountComponent } from './littleangel/sentmoneytoaccount/sentmoneytoaccount.component';
import { AutomaticdepositComponent } from './littleangel/automaticdeposit/automaticdeposit.component';

const routes = [
  { path:'', component: TermDepositComponent },
  {path:'opentermdeposit',component:OpentermdepositComponent},
  {path:'updatedirective',component:UpdatedirectiveComponent},
  {path:'finalizationtermdeposit',component:FinalizationtermdepositComponent},
  {path:'listeddeposittransaction',component:ListeddeposittransactionComponent},
  {path:'depositaccumulation',component:DepositaccumulationComponent},
  {path:'optionalopentermonline',component:OptionalopentermonlineComponent},
  {path:'littleangel',component:LittleangelComponent},
  {path:'userinfo',component: UserinfoComponent},
  {path:'sentmoneytoaccount',component: SentmoneytoaccountComponent},
  {path:'automaticdeposit',component: AutomaticdepositComponent},
  {path:'seeordeletedeposit',component: SeeordeleteautomaticdepositComponent},
];
@NgModule({
  declarations: [TermDepositComponent, OpentermdepositComponent, OptionalopentermonlineComponent, UpdatedirectiveComponent, FinalizationtermdepositComponent, ListeddeposittransactionComponent, DepositaccumulationComponent, LittleangelComponent, UserinfoComponent, AutomaticdepositComponent, SentmoneytoaccountComponent, SeeordeleteautomaticdepositComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})

export class TermDepositModule {
  public static routes = routes;
}
