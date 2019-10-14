import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
@Component({
  selector: 'app-listdeposittransaction',
  templateUrl: './listdeposittransaction.component.html',
  styleUrls: ['./listdeposittransaction.component.css']
})
export class ListdeposittransactionComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
