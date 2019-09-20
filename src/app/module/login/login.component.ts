import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }
  login(){
    this.loginService.toggle();
  }
  ngOnInit() {
   
  }

}
