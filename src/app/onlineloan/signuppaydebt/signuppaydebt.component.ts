import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
@Component({
  selector: 'app-signuppaydebt',
  templateUrl: './signuppaydebt.component.html',
  styleUrls: ['./signuppaydebt.component.css']
})
export class SignuppaydebtComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
