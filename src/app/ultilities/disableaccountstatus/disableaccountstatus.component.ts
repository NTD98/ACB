import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';

@Component({
  selector: 'app-disableaccountstatus',
  templateUrl: './disableaccountstatus.component.html',
  styleUrls: ['./disableaccountstatus.component.css']
})
export class DisableaccountstatusComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
