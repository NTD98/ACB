import { Component, OnInit } from '@angular/core';
import {LoginService} from '../module/login/login.service';

@Component({
  selector: 'app-smsbanking',
  templateUrl: './smsbanking.component.html',
  styleUrls: ['./smsbanking.component.css']
})
export class SmsBankingComponent implements OnInit {
  
  constructor(private loginService:LoginService) { }
  

  ngOnInit() {
  }

}
