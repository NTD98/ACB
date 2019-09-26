import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../module/login/login.service';
@Component({
  selector: 'app-canceldeduct',
  templateUrl: './canceldeduct.component.html',
  styleUrls: ['./canceldeduct.component.css']
})
export class CanceldeductComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
