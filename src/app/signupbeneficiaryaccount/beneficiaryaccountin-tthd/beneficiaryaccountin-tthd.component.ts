import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../module/login/login.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-beneficiaryaccountin-tthd',
  templateUrl: './beneficiaryaccountin-tthd.component.html',
  styleUrls: ['./beneficiaryaccountin-tthd.component.css']
})
export class BeneficiaryaccountinTTHDComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
