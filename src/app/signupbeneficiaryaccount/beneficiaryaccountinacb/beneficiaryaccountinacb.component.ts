import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../module/login/login.service';

@Component({
  selector: 'app-beneficiaryaccountinacb',
  templateUrl: './beneficiaryaccountinacb.component.html',
  styleUrls: ['./beneficiaryaccountinacb.component.css']
})
export class BeneficiaryaccountinacbComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
