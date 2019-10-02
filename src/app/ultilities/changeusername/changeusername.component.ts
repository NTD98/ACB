import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';

@Component({
  selector: 'app-changeusername',
  templateUrl: './changeusername.component.html',
  styleUrls: ['./changeusername.component.css']
})
export class ChangeusernameComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
