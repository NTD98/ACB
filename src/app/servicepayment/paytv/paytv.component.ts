import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../module/login/login.service';
@Component({
  selector: 'app-paytv',
  templateUrl: './paytv.component.html',
  styleUrls: ['./paytv.component.css']
})
export class PaytvComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
