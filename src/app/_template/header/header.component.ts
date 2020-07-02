import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../module/login/login.service';
import { AuthenticationService } from '../../_services/authentication.service';
import {AccountService} from '../../_services/account.services';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin = false;
  constructor(private loginService: LoginService,
    private authen: AuthenticationService) { }
  ngOnInit() {
    this.authen.logout();
  }
  log() {
    console.log(this.authen.currentUserValue);
  }
  logout() {
    console.log("out")
    this.authen.logout();
  }
}
