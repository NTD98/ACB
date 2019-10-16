import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
@Component({
  selector: 'app-paydebt',
  templateUrl: './paydebt.component.html',
  styleUrls: ['./paydebt.component.css']
})
export class PaydebtComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
