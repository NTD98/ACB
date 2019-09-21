import { Component, OnInit } from '@angular/core';
import {LoginService} from '../module/login/login.service';

@Component({
  selector: 'app-signupbeneficiaryaccount',
  templateUrl: './signupbeneficiaryaccount.component.html',
  styleUrls: ['./signupbeneficiaryaccount.component.css']
})
export class SignUpBeneficiaryAccountComponent implements OnInit {
  
  constructor(private loginService:LoginService) { }
  

  ngOnInit() {
  }

}
