import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
@Component({
  selector: 'app-transferinacb',
  templateUrl: './transferinacb.component.html',
  styleUrls: ['./transferinacb.component.css']
})
export class TransferInACBComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
