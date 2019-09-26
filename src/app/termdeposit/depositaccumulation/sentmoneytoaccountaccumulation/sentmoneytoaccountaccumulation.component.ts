import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../module/login/login.service';

@Component({
  selector: 'app-sentmoneytoaccountaccumulation',
  templateUrl: './sentmoneytoaccountaccumulation.component.html',
  styleUrls: ['./sentmoneytoaccountaccumulation.component.css']
})
export class SentmoneytoaccountaccumulationComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
