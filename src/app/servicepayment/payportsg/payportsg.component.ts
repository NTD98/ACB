import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../module/login/login.service';
@Component({
  selector: 'app-payportsg',
  templateUrl: './payportsg.component.html',
  styleUrls: ['./payportsg.component.css']
})
export class PayportsgComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
