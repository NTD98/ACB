import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
@Component({
  selector: 'app-rechargewallet',
  templateUrl: './rechargewallet.component.html',
  styleUrls: ['./rechargewallet.component.css']
})
export class RechargewalletComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
