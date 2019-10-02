import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';

@Component({
  selector: 'app-signupctkm',
  templateUrl: './signupctkm.component.html',
  styleUrls: ['./signupctkm.component.css']
})
export class SignupctkmComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
