import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
@Component({
  selector: 'app-listedtransaction',
  templateUrl: './listedtransaction.component.html',
  styleUrls: ['./listedtransaction.component.css']
})
export class ListedtransactionComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
