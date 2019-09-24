import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';

@Component({
  selector: 'app-littleangel',
  templateUrl: './littleangel.component.html',
  styleUrls: ['./littleangel.component.css']
})
export class LittleangelComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
