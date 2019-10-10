import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../module/login/login.service';
@Component({
  selector: 'app-paydtcd',
  templateUrl: './paydtcd.component.html',
  styleUrls: ['./paydtcd.component.css']
})
export class PaydtcdComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

}
