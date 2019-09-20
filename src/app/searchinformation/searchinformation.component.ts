import { Component, OnInit } from '@angular/core';
import {SearchInformationModule} from './searchinformation.module';
import {LoginService} from '../module/login/login.service';
@Component({
  selector: 'app-searchinformation',
  templateUrl: './searchinformation.component.html',
  styleUrls: ['./searchinformation.component.css']
})
export class SearchInformationComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
