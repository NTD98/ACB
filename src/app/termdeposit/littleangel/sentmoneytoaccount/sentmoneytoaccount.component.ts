import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../module/login/login.service';

@Component({
  selector: 'app-sentmoneytoaccount',
  templateUrl: './sentmoneytoaccount.component.html',
  styleUrls: ['./sentmoneytoaccount.component.css']
})
export class SentmoneytoaccountComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
