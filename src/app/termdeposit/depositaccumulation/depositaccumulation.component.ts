import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';

@Component({
  selector: 'app-depositaccumulation',
  templateUrl: './depositaccumulation.component.html',
  styleUrls: ['./depositaccumulation.component.css']
})
export class DepositaccumulationComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
