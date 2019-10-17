import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
@Component({
  selector: 'app-sellcurrency',
  templateUrl: './sellcurrency.component.html',
  styleUrls: ['./sellcurrency.component.css']
})
export class SellcurrencyComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
