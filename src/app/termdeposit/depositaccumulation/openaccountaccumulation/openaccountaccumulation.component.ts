import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../module/login/login.service';

@Component({
  selector: 'app-openaccountaccumulation',
  templateUrl: './openaccountaccumulation.component.html',
  styleUrls: ['./openaccountaccumulation.component.css']
})
export class OpenaccountaccumulationComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
