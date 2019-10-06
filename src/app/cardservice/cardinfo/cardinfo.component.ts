import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../module/login/login.service';
@Component({
  selector: 'app-cardinfo',
  templateUrl: './cardinfo.component.html',
  styleUrls: ['./cardinfo.component.css']
})
export class CardinfoComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
