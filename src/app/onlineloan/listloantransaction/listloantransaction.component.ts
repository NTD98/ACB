import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
@Component({
  selector: 'app-listloantransaction',
  templateUrl: './listloantransaction.component.html',
  styleUrls: ['./listloantransaction.component.css']
})
export class ListloantransactionComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
