import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../module/login/login.service';
@Component({
  selector: 'app-paytrainticket',
  templateUrl: './paytrainticket.component.html',
  styleUrls: ['./paytrainticket.component.css']
})
export class PaytrainticketComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
