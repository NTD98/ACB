import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../module/login/login.service'

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin = false;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    
  }
  log(){
    console.log(this.isLogin)
  }
}
