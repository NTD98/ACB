import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../module/login/login.service'
import { AuthenticationService } from '../../_services/authentication.service';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin = false;
  constructor(private loginService: LoginService,
    private authen:AuthenticationService) { }

  ngOnInit() {
    
  }
  log(){
    
    console.log(this.isLogin)
  }
  logout(){
    console.log("out")
    this.authen.logout();
  }
}
