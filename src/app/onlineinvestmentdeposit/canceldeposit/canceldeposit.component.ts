import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
@Component({
  selector: 'app-canceldeposit',
  templateUrl: './canceldeposit.component.html',
  styleUrls: ['./canceldeposit.component.css']
})
export class CanceldepositComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
