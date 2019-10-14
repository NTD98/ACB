import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
@Component({
  selector: 'app-automaticdeposit',
  templateUrl: './automaticdeposit.component.html',
  styleUrls: ['./automaticdeposit.component.css']
})
export class AutomaticdepositComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
