import { Component, OnInit } from '@angular/core';
import {LoginService} from '../module/login/login.service';

@Component({
  selector: 'app-sellcurrencyforacb',
  templateUrl: './sellcurrencyforacb.component.html',
  styleUrls: ['./sellcurrencyforacb.component.css']
})
export class SellCurrencyForACBComponent implements OnInit {
  
  constructor(private loginService:LoginService) { }
  

  ngOnInit() {
  }

}
