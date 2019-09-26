import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../module/login/login.service';
@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
