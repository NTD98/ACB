import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service'
@Component({
  selector: 'app-accountinfo',
  templateUrl: './accountinfo.component.html',
  styleUrls: ['./accountinfo.component.css']
})
export class AccountinfoComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
