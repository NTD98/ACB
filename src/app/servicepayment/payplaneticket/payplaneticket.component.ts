import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../module/login/login.service';
@Component({
  selector: 'app-payplaneticket',
  templateUrl: './payplaneticket.component.html',
  styleUrls: ['./payplaneticket.component.css']
})
export class PayplaneticketComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
