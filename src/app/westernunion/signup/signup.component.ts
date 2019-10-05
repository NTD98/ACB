import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
