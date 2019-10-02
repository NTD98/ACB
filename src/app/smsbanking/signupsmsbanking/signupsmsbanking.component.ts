import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
@Component({
  selector: 'app-signupsmsbanking',
  templateUrl: './signupsmsbanking.component.html',
  styleUrls: ['./signupsmsbanking.component.css']
})
export class SignupsmsbankingComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
