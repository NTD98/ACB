import { Component, OnInit } from '@angular/core';
import {LoginService} from '../module/login/login.service';

@Component({
  selector: 'app-cardservice',
  templateUrl: './cardservice.component.html',
  styleUrls: ['./cardservice.component.css']
})
export class CardServiceComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
