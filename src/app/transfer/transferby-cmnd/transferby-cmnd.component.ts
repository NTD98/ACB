import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
@Component({
  selector: 'app-transferby-cmnd',
  templateUrl: './transferby-cmnd.component.html',
  styleUrls: ['./transferby-cmnd.component.css']
})
export class TransferByCMNDComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
