import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../module/login/login.service';

@Component({
  selector: 'app-listeddeposittransactionaccumulation',
  templateUrl: './listeddeposittransactionaccumulation.component.html',
  styleUrls: ['./listeddeposittransactionaccumulation.component.css']
})
export class ListeddeposittransactionaccumulationComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
