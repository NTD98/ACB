import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../module/login/login.service';
@Component({
  selector: 'app-linkwallet',
  templateUrl: './linkwallet.component.html',
  styleUrls: ['./linkwallet.component.css']
})
export class LinkwalletComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
