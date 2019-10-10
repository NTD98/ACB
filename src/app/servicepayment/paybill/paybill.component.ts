import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../module/login/login.service';
@Component({
  selector: 'app-paybill',
  templateUrl: './paybill.component.html',
  styleUrls: ['./paybill.component.css']
})
export class PaybillComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
