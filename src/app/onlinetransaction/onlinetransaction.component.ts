import { Component, OnInit } from '@angular/core';
import {LoginService} from '../module/login/login.service';

@Component({
  selector: 'app-onlinetransaction',
  templateUrl: './onlinetransaction.component.html',
  styleUrls: ['./onlinetransaction.component.css']
})
export class OnlineTransactionComponent implements OnInit {
  
  constructor(private loginService:LoginService) { }
  

  ngOnInit() {
  }

}
