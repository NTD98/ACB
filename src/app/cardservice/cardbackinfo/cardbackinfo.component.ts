import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../module/login/login.service';
@Component({
  selector: 'app-cardbackinfo',
  templateUrl: './cardbackinfo.component.html',
  styleUrls: ['./cardbackinfo.component.css']
})
export class CardbackinfoComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
