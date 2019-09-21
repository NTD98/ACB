import { Component, OnInit } from '@angular/core';
import {LoginService} from '../module/login/login.service'
@Component({
  selector: 'app-bluediamond',
  templateUrl: './bluediamond.component.html',
  styleUrls: ['./bluediamond.component.css']
})
export class BlueDiamondComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
