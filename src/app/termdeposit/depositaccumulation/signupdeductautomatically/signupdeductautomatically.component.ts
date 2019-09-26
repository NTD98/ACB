import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../module/login/login.service';

@Component({
  selector: 'app-signupdeductautomatically',
  templateUrl: './signupdeductautomatically.component.html',
  styleUrls: ['./signupdeductautomatically.component.css']
})
export class SignupdeductautomaticallyComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
