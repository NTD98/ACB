import { Component, OnInit } from '@angular/core';
import {LoginService} from '../module/login/login.service';

@Component({
  selector: 'app-onlineloan',
  templateUrl: './onlineloan.component.html',
  styleUrls: ['./onlineloan.component.css']
})
export class OnlineLoanComponent implements OnInit {
  
  constructor(private loginService:LoginService) { }
  

  ngOnInit() {
  }

}
