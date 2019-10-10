import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../module/login/login.service';

@Component({
  selector: 'app-beneficiarycard',
  templateUrl: './beneficiarycard.component.html',
  styleUrls: ['./beneficiarycard.component.css']
})
export class BeneficiarycardComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
