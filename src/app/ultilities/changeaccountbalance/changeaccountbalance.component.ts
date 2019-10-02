import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';

@Component({
  selector: 'app-changeaccountbalance',
  templateUrl: './changeaccountbalance.component.html',
  styleUrls: ['./changeaccountbalance.component.css']
})
export class ChangeaccountbalanceComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
