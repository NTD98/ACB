import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
@Component({
  selector: 'app-transfertocardacb',
  templateUrl: './transfertocardacb.component.html',
  styleUrls: ['./transfertocardacb.component.css']
})
export class TransferToCardACBComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
