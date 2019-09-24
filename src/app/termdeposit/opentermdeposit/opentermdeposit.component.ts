import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';

@Component({
  selector: 'app-opentermdeposit',
  templateUrl: './opentermdeposit.component.html',
  styleUrls: ['./opentermdeposit.component.css']
})
export class OpentermdepositComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
