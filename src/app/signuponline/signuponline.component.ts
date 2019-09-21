import { Component, OnInit } from '@angular/core';
import {LoginService} from '../module/login/login.service';

@Component({
  selector: 'app-signuponline',
  templateUrl: './signuponline.component.html',
  styleUrls: ['./signuponline.component.css']
})
export class SignUpOnlineComponent implements OnInit {

  
  constructor(private loginService:LoginService) { }
  ngOnInit() {
  }

}
