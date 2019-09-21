import { Component, OnInit } from '@angular/core';
import {LoginService} from '../module/login/login.service';

@Component({
  selector: 'app-servicepayment',
  templateUrl: './servicepayment.component.html',
  styleUrls: ['./servicepayment.component.css']
})
export class ServicePaymentComponent implements OnInit {
  
  constructor(private loginService:LoginService) { }
  

  ngOnInit() {
  }

}
