import { Component, OnInit } from '@angular/core';
import {LoginService} from '../module/login/login.service';
@Component({
  selector: 'app-ewallet',
  templateUrl: './ewallet.component.html',
  styleUrls: ['./ewallet.component.css']
})
export class EwalletComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
