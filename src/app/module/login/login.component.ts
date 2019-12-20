import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './login.service';
import {AuthenticationService} from '../../_services/authentication.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string
  password:string
  wrongnameorpass=false;
  constructor(private loginService: LoginService,
    private authen: AuthenticationService,
    private router : Router) { }
  login(){
    console.log("usertest",this.username)
    this.authen.logout();
    this.authen.login(this.username,this.password).pipe()
    .subscribe(
        data => {
            this.router.navigate(['./home']);
        },
        error => {
          this.wrongnameorpass=true;
            console.log(error)
        });
    this.loginService.toggle();
  }
  ngOnInit() {
   
  }

}
