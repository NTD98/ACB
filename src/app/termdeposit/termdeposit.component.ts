import { Component, OnInit } from '@angular/core';
import {LoginService} from '../module/login/login.service';

@Component({
  selector: 'app-termdeposit',
  templateUrl: './termdeposit.component.html',
  styleUrls: ['./termdeposit.component.css']
})
export class TermDepositComponent implements OnInit {
  
  constructor(private loginService:LoginService) { }
 

  ngOnInit() {
  }

}
