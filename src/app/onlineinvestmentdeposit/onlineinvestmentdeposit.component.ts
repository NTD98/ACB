import { Component, OnInit } from '@angular/core';
import {LoginService} from '../module/login/login.service';

@Component({
  selector: 'app-onlineinvestmentdeposit',
  templateUrl: './onlineinvestmentdeposit.component.html',
  styleUrls: ['./onlineinvestmentdeposit.component.css']
})
export class OnlineInvestmentDepositComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
