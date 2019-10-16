import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
@Component({
  selector: 'app-liquidatedebtaccount',
  templateUrl: './liquidatedebtaccount.component.html',
  styleUrls: ['./liquidatedebtaccount.component.css']
})
export class LiquidatedebtaccountComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
