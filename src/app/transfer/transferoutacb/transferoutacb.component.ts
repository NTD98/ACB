import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
@Component({
  selector: 'app-transferoutacb',
  templateUrl: './transferoutacb.component.html',
  styleUrls: ['./transferoutacb.component.css']
})
export class TransferOutACBComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
