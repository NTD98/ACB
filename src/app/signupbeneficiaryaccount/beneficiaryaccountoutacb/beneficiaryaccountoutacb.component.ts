import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../module/login/login.service';

@Component({
  selector: 'app-beneficiaryaccountoutacb',
  templateUrl: './beneficiaryaccountoutacb.component.html',
  styleUrls: ['./beneficiaryaccountoutacb.component.css']
})
export class BeneficiaryaccountoutacbComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
