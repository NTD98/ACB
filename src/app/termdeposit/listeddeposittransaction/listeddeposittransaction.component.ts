import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';

@Component({
  selector: 'app-listeddeposittransaction',
  templateUrl: './listeddeposittransaction.component.html',
  styleUrls: ['./listeddeposittransaction.component.css']
})
export class ListeddeposittransactionComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
