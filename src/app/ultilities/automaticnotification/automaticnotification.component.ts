import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
@Component({
  selector: 'app-automaticnotification',
  templateUrl: './automaticnotification.component.html',
  styleUrls: ['./automaticnotification.component.css']
})
export class AutomaticnotificationComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
