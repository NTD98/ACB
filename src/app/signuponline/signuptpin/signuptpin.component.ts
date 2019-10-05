import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';

@Component({
  selector: 'app-signuptpin',
  templateUrl: './signuptpin.component.html',
  styleUrls: ['./signuptpin.component.css']
})
export class SignuptpinComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
